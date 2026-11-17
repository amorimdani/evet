import React, { useState } from 'react';
import { Compass, Info } from 'lucide-react';

const REGIONS = [
  {
    id: 'marmara',
    name: 'Região do Mármara',
    trName: 'Marmara Bölgesi',
    capital: 'Istambul / Bursa',
    center: { x: 155, y: 110 },
    // Trajetória do Noroeste: Trácia + Istambul + Sul de Mármara (Bursa, Çanakkale)
    path: 'M 45,45 L 120,40 L 150,60 L 175,70 L 195,95 L 245,95 L 240,140 L 205,155 L 155,160 L 105,165 L 75,135 L 55,115 L 70,85 Z',
    fillColor: '#6366F1', // Indigo
  },
  {
    id: 'karadeniz',
    name: 'Região do Mar Negro',
    trName: 'Karadeniz Bölgesi',
    capital: 'Trabzon / Rize / Samsun',
    center: { x: 530, y: 105 },
    // Faixa costeira setentrional do Mar Negro de Bolu até Artvin/Geórgia
    path: 'M 245,95 L 340,90 L 415,75 L 480,50 L 530,75 L 610,85 L 700,90 L 785,95 L 830,95 L 815,145 L 745,150 L 640,155 L 545,150 L 440,140 L 340,145 L 240,140 Z',
    fillColor: '#10B981', // Esmeralda / Verde
  },
  {
    id: 'ege',
    name: 'Região do Egeu',
    trName: 'Ege Bölgesi',
    capital: 'Esmirna (İzmir)',
    center: { x: 145, y: 245 },
    // Costa ocidental do Mar Egeu (İzmir, Aydın, Muğla, Manisa, Denizli)
    path: 'M 105,165 L 155,160 L 205,155 L 225,185 L 220,240 L 195,290 L 175,325 L 125,320 L 100,285 L 115,245 L 85,215 L 95,180 Z',
    fillColor: '#F59E0B', // Âmbar / Dourado
  },
  {
    id: 'ic-anadolu',
    name: 'Anatólia Central',
    trName: 'İç Anadolu Bölgesi',
    capital: 'Ancara (Capital da República)',
    center: { x: 380, y: 205 },
    // Planalto central (Ancara, Konya, Capadócia, Kayseri, Sivas)
    path: 'M 205,155 L 240,140 L 340,145 L 440,140 L 545,150 L 585,175 L 575,230 L 540,270 L 460,275 L 390,285 L 315,280 L 220,240 L 225,185 Z',
    fillColor: '#EC4899', // Rosa / Terracota
  },
  {
    id: 'akdeniz',
    name: 'Região do Mediterrâneo',
    trName: 'Akdeniz Bölgesi',
    capital: 'Antália / Adana',
    center: { x: 360, y: 325 },
    // Faixa litorânea meridional de Fethiye/Antália até Adana e Hatay
    path: 'M 175,325 L 195,290 L 220,240 L 315,280 L 390,285 L 460,275 L 540,270 L 580,275 L 610,310 L 605,370 L 580,360 L 550,335 L 490,345 L 420,365 L 360,350 L 300,355 L 240,350 L 190,340 Z',
    fillColor: '#3B82F6', // Azul Mediterrâneo
  },
  {
    id: 'dogu-anadolu',
    name: 'Anatólia Oriental',
    trName: 'Doğu Anadolu Bölgesi',
    capital: 'Erzurum / Van / Kars',
    center: { x: 735, y: 215 },
    // Planalto oriental e montanhoso até o Monte Ararat e Lago de Van
    path: 'M 545,150 L 640,155 L 745,150 L 815,145 L 830,95 L 870,110 L 910,155 L 915,210 L 875,260 L 885,310 L 835,300 L 760,285 L 690,280 L 630,275 L 580,275 L 575,230 L 585,175 Z',
    fillColor: '#8B5CF6', // Roxo / Violeta
  },
  {
    id: 'guneydogu-anadolu',
    name: 'Sudeste da Anatólia',
    trName: 'Güneydoğu Anadolu Bölgesi',
    capital: 'Gaziantep / Şanlıurfa / Mardin',
    center: { x: 695, y: 325 },
    // Planície fértil mesopotâmica ao sul (Gaziantep, Urfa, Mardin, Diyarbakır)
    path: 'M 580,275 L 630,275 L 690,280 L 760,285 L 835,300 L 840,325 L 785,340 L 720,345 L 650,345 L 610,310 Z',
    fillColor: '#14B8A6', // Turquesa
  },
];

const CITIES = [
  { name: 'İstanbul', x: 165, y: 75, capital: false },
  { name: 'Ankara', x: 375, y: 175, capital: true },
  { name: 'İzmir', x: 105, y: 215, capital: false },
  { name: 'Antalya', x: 275, y: 325, capital: false },
  { name: 'Trabzon', x: 710, y: 110, capital: false },
  { name: 'Erzurum', x: 770, y: 175, capital: false },
  { name: 'Gaziantep', x: 635, y: 315, capital: false },
];

export default function TurkeyMap({ selectedRegionId, onSelectRegion }) {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const activeRegion = REGIONS.find(r => r.id === (hoveredRegion?.id || selectedRegionId)) || REGIONS[0];

  return (
    <div className="w-full bg-slate-900/90 dark:bg-zinc-950 rounded-2xl border border-zinc-800 p-4 sm:p-6 shadow-xl text-white relative overflow-hidden">
      {/* Barra Superior do Mapa */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-[#C8102E] animate-pulse" />
          <h3 className="font-serif font-bold text-lg text-white">
            Mapa Geográfico Interativo da Turquia (Türkiye Haritası)
          </h3>
        </div>
        <span className="text-xs font-mono text-zinc-400 bg-zinc-800/80 px-2.5 py-1 rounded-full border border-zinc-700/50">
          7 Regiões Geográficas Oficiais
        </span>
      </div>

      {/* Container SVG Responsivo */}
      <div className="relative w-full aspect-[950/410] max-h-[460px] bg-slate-950/60 rounded-xl overflow-hidden border border-zinc-800/80">
        <svg
          viewBox="0 0 950 410"
          className="w-full h-full select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Definições de Gradientes e Efeitos */}
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="selectedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C8102E" />
              <stop offset="100%" stopColor="#8A0B1E" />
            </linearGradient>
            <pattern id="seaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Fundo Marítimo */}
          <rect width="950" height="410" fill="#090d16" />
          <rect width="950" height="410" fill="url(#seaGrid)" />

          {/* Rótulos de Mares Circundantes */}
          <g className="fill-blue-300/30 font-serif italic text-xs tracking-widest pointer-events-none select-none">
            <text x="450" y="35" textAnchor="middle">KARADENİZ (MAR NEGRO)</text>
            <text x="50" y="270" textAnchor="middle" transform="rotate(-90 50 270)">EGE DENİZİ (MAR EGEU)</text>
            <text x="420" y="395" textAnchor="middle">AKDENİZ (MAR MEDITERRÂNEO)</text>
            <text x="110" y="105" textAnchor="middle" className="text-[10px]">MARMARA</text>
          </g>

          {/* Lago de Van */}
          <path
            d="M 865,245 C 875,240 885,250 878,260 C 870,265 860,255 865,245 Z"
            fill="#1e3a8a"
            stroke="#3b82f6"
            strokeWidth="1.5"
            className="pointer-events-none"
          />
          <text x="872" y="255" fill="#93c5fd" fontSize="8" fontStyle="italic" textAnchor="middle" className="pointer-events-none">
            Van Gölü
          </text>

          {/* Polígonos das 7 Regiões */}
          {REGIONS.map(region => {
            const isSelected = selectedRegionId === region.id;
            const isHovered = hoveredRegion?.id === region.id;

            return (
              <g
                key={region.id}
                className="cursor-pointer transition-all duration-300"
                onClick={() => onSelectRegion(region.id)}
                onMouseEnter={() => setHoveredRegion(region)}
                onMouseLeave={() => setHoveredRegion(null)}
              >
                <path
                  d={region.path}
                  fill={
                    isSelected
                      ? 'url(#selectedGrad)'
                      : isHovered
                      ? '#E11D48'
                      : `${region.fillColor}33`
                  }
                  stroke={
                    isSelected
                      ? '#FFFFFF'
                      : isHovered
                      ? '#FFCCD5'
                      : region.fillColor
                  }
                  strokeWidth={isSelected ? 3 : isHovered ? 2.5 : 1.5}
                  strokeLinejoin="round"
                  filter={isSelected ? 'url(#glow)' : undefined}
                  className="transition-all duration-300"
                />

                {/* Nome da Região no Centro */}
                <text
                  x={region.center.x}
                  y={region.center.y}
                  textAnchor="middle"
                  fill={isSelected ? '#FFFFFF' : '#E2E8F0'}
                  fontSize={isSelected ? '12' : '10'}
                  fontWeight={isSelected ? 'bold' : '600'}
                  className="pointer-events-none drop-shadow font-sans"
                >
                  {region.trName.replace(' Bölgesi', '')}
                </text>
              </g>
            );
          })}

          {/* Cidades Marcadas no Mapa */}
          {CITIES.map((c, idx) => (
            <g key={idx} className="pointer-events-none select-none">
              <circle
                cx={c.x}
                cy={c.y}
                r={c.capital ? 4.5 : 3}
                fill={c.capital ? '#FACC15' : '#FFFFFF'}
                stroke="#0f172a"
                strokeWidth="1.5"
              />
              <text
                x={c.x}
                y={c.y - 7}
                textAnchor="middle"
                fill="#F8FAFC"
                fontSize="9"
                fontWeight={c.capital ? 'bold' : '500'}
                className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
              >
                {c.name} {c.capital && '★'}
              </text>
            </g>
          ))}
        </svg>

        {/* Card Flutuante de Informação Rápida da Região em Foco */}
        <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-md bg-zinc-900/95 backdrop-blur-md border border-zinc-700/80 rounded-xl p-3 shadow-2xl flex items-center justify-between gap-4 animate-fadeIn">
          <div className="min-w-0">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#C8102E] font-bold block">
              Região Selecionada
            </span>
            <h4 className="text-sm font-bold text-white truncate font-serif">
              {activeRegion.name} <span className="text-zinc-400 font-sans text-xs">({activeRegion.trName})</span>
            </h4>
            <p className="text-xs text-zinc-300 truncate">
              {activeRegion.capital}
            </p>
          </div>
          <button
            onClick={() => onSelectRegion(activeRegion.id)}
            className="shrink-0 px-3 py-1.5 rounded-lg bg-[#C8102E] hover:bg-[#A00D24] text-white text-xs font-semibold shadow-sm transition-colors"
          >
            Ver Detalhes
          </button>
        </div>
      </div>

      {/* Mini Legenda Interativa Inferior */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
        {REGIONS.map(r => {
          const isSelected = selectedRegionId === r.id;
          return (
            <button
              key={r.id}
              onClick={() => onSelectRegion(r.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition-all ${
                isSelected
                  ? 'border-[#C8102E] bg-[#C8102E] text-white font-bold shadow'
                  : 'border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: isSelected ? '#FFFFFF' : r.fillColor }}
              />
              <span>{r.name.replace('Região ', '').replace(' da Turquia', '')}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
