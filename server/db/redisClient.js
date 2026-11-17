const Redis = require('ioredis');

// Configured for remote/cluster Redis with in-memory fallback for local development without Redis
const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
const REDIS_PORT = parseInt(process.env.REDIS_PORT || '6379', 10);
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || undefined;

let redis = null;
let isConnected = false;

// In-memory cache fallback if Redis is unreachable locally
const memoryStore = new Map();

try {
  redis = new Redis({
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD,
    connectTimeout: 5000,
    maxRetriesPerRequest: null,
    enableReadyCheck: true,
    retryStrategy(times) {
      const delay = Math.min(times * 500, 3000);
      return delay;
    }
  });

  redis.on('connect', () => {
    isConnected = true;
    console.log(`✅ [Redis] Connected successfully to ${REDIS_HOST}:${REDIS_PORT}`);
  });

  redis.on('ready', () => {
    isConnected = true;
    console.log(`🚀 [Redis] Ready to accept commands from ${REDIS_HOST}:${REDIS_PORT}`);
  });

  redis.on('close', () => {
    isConnected = false;
  });

  redis.on('error', (err) => {
    isConnected = false;
    console.warn(`ℹ️ [Redis] Notice: ${err.message}. Operating with fallback sync.`);
  });
} catch (e) {
  console.warn('ℹ️ [Redis] Initialization failed, using memory store fallback.');
}

module.exports = {
  async get(key) {
    if (isConnected && redis) {
      try {
        const val = await redis.get(key);
        return val ? JSON.parse(val) : null;
      } catch (e) {
        console.error('Redis get error:', e);
      }
    }
    const val = memoryStore.get(key);
    return val ? JSON.parse(val) : null;
  },

  async set(key, value, expirySeconds = null) {
    const stringVal = JSON.stringify(value);
    if (isConnected && redis) {
      try {
        if (expirySeconds) {
          return await redis.set(key, stringVal, 'EX', expirySeconds);
        }
        return await redis.set(key, stringVal);
      } catch (e) {
        console.error('Redis set error:', e);
      }
    }
    memoryStore.set(key, stringVal);
    return 'OK';
  },

  async lpush(key, value) {
    const stringVal = JSON.stringify(value);
    if (isConnected && redis) {
      try {
        return await redis.lpush(key, stringVal);
      } catch (e) {
        console.error('Redis lpush error:', e);
      }
    }
    if (!memoryStore.has(key)) {
      memoryStore.set(key, []);
    }
    const list = memoryStore.get(key);
    list.unshift(stringVal);
    return list.length;
  },

  async lrange(key, start, stop) {
    if (isConnected && redis) {
      try {
        const items = await redis.lrange(key, start, stop);
        return items.map(item => JSON.parse(item));
      } catch (e) {
        console.error('Redis lrange error:', e);
      }
    }
    const list = memoryStore.get(key) || [];
    const slice = list.slice(start, stop === -1 ? undefined : stop + 1);
    return slice.map(item => JSON.parse(item));
  },

  async del(key) {
    if (isConnected && redis) {
      try {
        return await redis.del(key);
      } catch (e) {
        console.error('Redis del error:', e);
      }
    }
    memoryStore.delete(key);
    return 1;
  },

  isRedisConnected() {
    return isConnected;
  }
};
