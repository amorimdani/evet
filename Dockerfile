# Multi-stage build para Evet
FROM node:20-alpine AS builder
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3005

COPY package*.json ./
RUN npm install --omit=dev
COPY --chown=node:node server/ ./server/
COPY --chown=node:node --from=builder /app/client/dist ./client/dist

USER node
EXPOSE 3005

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3005/healthz || exit 1

CMD ["node", "server/index.js"]
