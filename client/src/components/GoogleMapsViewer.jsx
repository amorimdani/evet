import React, { useState, useEffect } from 'react';
import { Map, Layers, ExternalLink, Navigation, Sparkles, Eye } from 'lucide-react';

const REGION_LANDMARKS = {
  marmara: [
    { name: 'Istambul (Bósforo & Centro Histórico)', query: 'Hagia Sophia, Istanbul, Turkey', zoom: 15 },
    { name: 'Palácio Topkapı', query: 'Topkapi Palace, Istanbul, Turkey', zoom: 16 },
    { name: 'Bursa (Primeira Capital Otomana)', query: 'Grand Mosque of Bursa, Turkey', zoom: 14 },
    { name: 'Edirne (Mesquita Selimiye)', query: 'Selimiye Mosque, Edirne, Turkey', zoom: 16 },
    { name: 'Estreito de Dardanelos', query: 'Canakkale, Turkey', zoom: 12 },
  ],
  ege: [
    { name: 'Éfeso (Ruínas Greco-Romanas)', query: 'Ephesus Ancient City, Selcuk, Turkey', zoom: 16 },
    { name: 'Pamukkale (Piscinas de Calcário)', query: 'Pamukkale, Denizli, Turkey', zoom: 15 },
    { name: 'İzmir (Kordon & Praça Konak)', query: 'Konak Square, Izmir, Turkey', zoom: 15 },
    { name: 'Castelo de Bodrum', query: 'Bodrum Castle, Turkey', zoom: 16 },
  ],
  akdeniz: [
    { name: 'Antália (Kaleiçi Centro Histórico)', query: 'Kaleici, Antalya, Turkey', zoom: 16 },
    { name: 'Cachoeiras de Düden', query: 'Duden Waterfalls, Antalya, Turkey', zoom: 16 },
    { name: 'Ölüdeniz & Rota Lícia', query: 'Oludeniz Beach, Fethiye, Turkey', zoom: 14 },
    { name: 'Adana (Ponte de Pedra)', query: 'Taskopru, Adana, Turkey', zoom: 15 },
    { name: 'Teatro Romano de Aspendos', query: 'Aspendos Ancient Theater, Serik, Antalya, Turkey', zoom: 16 },
  ],
  'ic-anadolu': [
    { name: 'Capadócia (Chaminés de Fadas & Balões)', query: 'Goreme, Cappadocia, Turkey', zoom: 14 },
    { name: 'Anıtkabir (Mausoléu de Atatürk)', query: 'Anitkabir, Ankara, Turkey', zoom: 16 },
    { name: 'Konya (Museu Mevlânâ Rûmî)', query: 'Mevlana Museum, Konya, Turkey', zoom: 16 },
    { name: 'Cidade Subterrânea de Derinkuyu', query: 'Derinkuyu Underground City, Turkey', zoom: 16 },
    { name: 'Tuz Gölü (Lago Salgado da Turquia)', query: 'Lake Tuz, Turkey', zoom: 10 },
  ],
  karadeniz: [
    { name: 'Mosteiro de Sumela (Rochas de Trabzon)', query: 'Sumela Monastery, Macka, Trabzon, Turkey', zoom: 16 },
    { name: 'Campos de Chá de Rize', query: 'Rize, Turkey', zoom: 13 },
    { name: 'Lago Uzungöl', query: 'Uzungol, Trabzon, Turkey', zoom: 14 },
    { name: 'Samsun (Monumento da Libertação)', query: 'Ataturk Monument, Samsun, Turkey', zoom: 15 },
  ],
  'dogu-anadolu': [
    { name: 'Monte Ararat / Ağrı Dağı (5.137m)', query: 'Mount Ararat, Turkey', zoom: 11 },
    { name: 'Lago de Van & Igreja de Akdamar', query: 'Akdamar Island, Lake Van, Turkey', zoom: 14 },
    { name: 'Ruínas Medievais de Ani (Kars)', query: 'Ani Ruins, Kars, Turkey', zoom: 15 },
    { name: 'Palácio de İshak Paşa', query: 'Ishak Pasha Palace, Dogubayazit, Turkey', zoom: 16 },
  ],
  'guneydogu-anadolu': [
    { name: 'Göbeklitepe (Templo de 12.000 anos)', query: 'Gobeklitepe, Sanliurfa, Turkey', zoom: 16 },
    { name: 'Mardin (Arquitetura Antiga de Pedra)', query: 'Mardin Old City, Turkey', zoom: 15 },
    { name: 'Monte Nemrut (Estátuas Colossais)', query: 'Mount Nemrut, Adiyaman, Turkey', zoom: 15 },
    { name: 'Museu de Mosaicos de Zeugma', query: 'Zeugma Mosaic Museum, Gaziantep, Turkey', zoom: 16 },
    { name: 'Balıklıgöl (Lago dos Peixes Sagrados)', query: 'Balikligol, Sanliurfa, Turkey', zoom: 16 },
  ],
};

const MAP_LAYERS = [
  { id: 'h', name: 'Satélite Híbrido', desc: 'Imagens de satélite reais com vias' },
  { id: 'k', name: 'Satélite Puro', desc: 'Fotografia orbital de alta definição' },
  { id: 'p', name: 'Relevo / Terreno', desc: 'Topografia montanhosa da Anatólia' },
  { id: 'm', name: 'Mapa Padrão', desc: 'Cartografia de navegação' },
];

export default function GoogleMapsViewer({ regionId, regionName, defaultCity }) {
  const landmarks = REGION_LANDMARKS[regionId] || [
    { name: defaultCity || 'Turquia', query: `${defaultCity || 'Turkey'}`, zoom: 12 },
  ];

  const [activeLandmark, setActiveLandmark] = useState(landmarks[0]);
  const [mapLayer, setMapLayer] = useState('h'); // Padrão: Satélite Híbrido
  const [zoomLevel, setZoomLevel] = useState(landmarks[0]?.zoom || 14);

  useEffect(() => {
    const list = REGION_LANDMARKS[regionId] || [
      { name: defaultCity || 'Turquia', query: `${defaultCity || 'Turkey'}`, zoom: 12 },
    ];
    setActiveLandmark(list[0]);
    setZoomLevel(list[0]?.zoom || 14);
  }, [regionId, defaultCity]);

  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    activeLandmark.query
  )}&t=${mapLayer}&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`;

  const externalGoogleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    activeLandmark.query
  )}`;

  return (
    <div className="w-full bg-slate-900/90 dark:bg-zinc-950 rounded-2xl border border-zinc-800 p-4 sm:p-6 shadow-xl text-white">
      {/* Cabeçalho do Google Maps Plugin */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-500 via-emerald-500 to-amber-500 p-0.5 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
              <Map className="w-3.5 h-3.5 text-blue-400" />
            </div>
          </div>
          <div>
            <h3 className="font-serif font-bold text-base sm:text-lg text-white flex items-center gap-2">
              Google Maps — Exploração Visual de {regionName}
            </h3>
            <p className="text-[11px] text-zinc-400 font-sans">
              Visualização por satélite em alta resolução, relevo anatólico e patrimônios históricos.
            </p>
          </div>
        </div>

        {/* Camadas (Satélite / Relevo / Mapa) */}
        <div className="flex items-center gap-1.5 bg-zinc-900/80 p-1 rounded-xl border border-zinc-800">
          {MAP_LAYERS.map(layer => (
            <button
              key={layer.id}
              onClick={() => setMapLayer(layer.id)}
              title={layer.desc}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                mapLayer === layer.id
                  ? 'bg-[#C8102E] text-white shadow'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {layer.name}
            </button>
          ))}
        </div>
      </div>

      {/* Seletor de Marcos e Patrimônios da Região */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-2 font-mono uppercase tracking-wider">
          <Navigation className="w-3.5 h-3.5 text-[#C8102E]" />
          <span>Pontos Históricos & Paisagens Naturais:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {landmarks.map((lm, idx) => {
            const isSelected = activeLandmark.name === lm.name;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveLandmark(lm);
                  setZoomLevel(lm.zoom);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white font-semibold shadow-md ring-2 ring-blue-400/30'
                    : 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60'
                }`}
              >
                <Sparkles className={`w-3 h-3 ${isSelected ? 'text-amber-300' : 'text-zinc-500'}`} />
                <span>{lm.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Frame do Google Maps */}
      <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden border border-zinc-800 bg-slate-950 shadow-inner">
        <iframe
          key={`${activeLandmark.query}-${mapLayer}-${zoomLevel}`}
          title={`Google Maps - ${activeLandmark.name}`}
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full filter contrast-[1.03]"
        />

        {/* Overlay informativo com link para tela cheia oficial do Google Maps */}
        <div className="absolute top-3 right-3 bg-zinc-950/85 backdrop-blur-md border border-zinc-700/80 rounded-xl px-3 py-2 shadow-lg flex items-center gap-3">
          <div className="text-left">
            <span className="text-[10px] text-zinc-400 uppercase font-mono block">Foco Atual</span>
            <span className="text-xs font-bold text-white max-w-[180px] truncate block">
              {activeLandmark.name}
            </span>
          </div>
          <a
            href={externalGoogleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-[#C8102E] text-white text-xs font-medium transition-colors border border-zinc-700"
            title="Abrir no Google Maps oficial"
          >
            <span>Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
