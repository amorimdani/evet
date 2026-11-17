import React, { useState, useEffect } from 'react';
import { Compass, Landmark, Coffee, History, Sparkles, MapPin, UtensilsCrossed } from 'lucide-react';
import AudioButton from './AudioButton';

export default function CultureTab() {
  const [cultureData, setCultureData] = useState(null);
  const [activeSection, setActiveSection] = useState('traditions');
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/culture')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setCultureData(data.data);
          if (data.data.regions && data.data.regions.length > 0) {
            setSelectedRegion(data.data.regions[0]);
          }
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao carregar dados culturais:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-24 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#C8102E]" />
        <p className="text-xs text-zinc-500 mt-2 font-mono">Carregando imersão cultural...</p>
      </div>
    );
  }

  if (!cultureData) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Cabeçalho */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-serif text-zinc-900 dark:text-white mb-2">
          Cultura, História & Geografia da Turquia
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Conhecer a língua turca é inseparável de compreender sua fascinante tapeçaria histórica, os rituais da hospitalidade e as ricas 7 regiões anatólicas.
        </p>
      </div>

      {/* Navegação entre Seções Culturais */}
      <div className="flex items-center gap-2 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-3 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveSection('traditions')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            activeSection === 'traditions'
              ? 'bg-[#C8102E] text-white shadow-sm'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
          }`}
        >
          <Coffee className="w-4 h-4" />
          <span>Tradições & Rituais</span>
        </button>

        <button
          onClick={() => setActiveSection('regions')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            activeSection === 'regions'
              ? 'bg-[#C8102E] text-white shadow-sm'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>As 7 Regiões da Turquia</span>
        </button>

        <button
          onClick={() => setActiveSection('history')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            activeSection === 'history'
              ? 'bg-[#C8102E] text-white shadow-sm'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
          }`}
        >
          <History className="w-4 h-4" />
          <span>Linha do Tempo Histórica</span>
        </button>

        <button
          onClick={() => setActiveSection('etymology')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            activeSection === 'etymology'
              ? 'bg-[#C8102E] text-white shadow-sm'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Etimologia da Língua</span>
        </button>
      </div>

      {/* SEÇÃO 1: TRADIÇÕES E RITUAIS */}
      {activeSection === 'traditions' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          {cultureData.culturalTraditions.map((trad, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif font-bold text-xl text-zinc-900 dark:text-white">
                    {trad.name}
                  </h3>
                  {trad.turkishTerm && <AudioButton text={trad.turkishTerm} />}
                </div>
                <p className="text-xs font-mono text-[#C8102E] dark:text-red-400 mb-3">
                  {trad.turkishTerm}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                  {trad.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SEÇÃO 2: AS 7 REGIÕES */}
      {activeSection === 'regions' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
          {/* Menu Lateral das Regiões */}
          <div className="lg:col-span-1 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Selecione uma região geográfica
            </p>
            {cultureData.regions.map(r => {
              const isSelected = selectedRegion && selectedRegion.id === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedRegion(r)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-[#C8102E] bg-red-50/50 dark:bg-red-950/20 text-[#C8102E] dark:text-red-300 font-semibold shadow-sm'
                      : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <span className="text-sm">{r.name}</span>
                  <MapPin className="w-4 h-4 opacity-60" />
                </button>
              );
            })}
          </div>

          {/* Detalhe da Região Selecionada */}
          <div className="lg:col-span-2">
            {selectedRegion && (
              <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                      Capital / Cidades-Chave: {selectedRegion.capitalCity}
                    </span>
                    <AudioButton text={selectedRegion.name.split('(')[0].trim()} />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-zinc-900 dark:text-white mb-3">
                    {selectedRegion.name}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {selectedRegion.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                      <Landmark className="w-3.5 h-3.5 text-[#C8102E]" />
                      Destaques Culturais
                    </h4>
                    <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                      {selectedRegion.culturalHighlights.map((ch, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#C8102E] font-bold">•</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                      <UtensilsCrossed className="w-3.5 h-3.5 text-[#C8102E]" />
                      Gastronomia Típica
                    </h4>
                    <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                      {selectedRegion.gastronomy.map((g, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {selectedRegion.etymologyOrigin && (
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 text-xs text-zinc-500 dark:text-zinc-400 italic border border-zinc-100 dark:border-zinc-800">
                    Origem Etimológica: {selectedRegion.etymologyOrigin}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* SEÇÃO 3: LINHA DO TEMPO HISTÓRICA */}
      {activeSection === 'history' && (
        <div className="relative border-l-2 border-[#C8102E]/40 ml-4 pl-6 space-y-8 animate-fadeIn">
          {cultureData.historyTimeline.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#C8102E] border-4 border-white dark:border-zinc-900" />
              <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-100 dark:bg-red-950/60 text-[#C8102E] dark:text-red-400 font-mono">
                  {item.era}
                </span>
                <h3 className="text-lg font-bold font-serif text-zinc-900 dark:text-white mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SEÇÃO 4: ETIMOLOGIA DA LÍNGUA */}
      {activeSection === 'etymology' && cultureData.etymology && (
        <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm space-y-6 animate-fadeIn">
          <div>
            <h3 className="text-2xl font-bold font-serif text-zinc-900 dark:text-white mb-2">
              {cultureData.etymology.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <strong>Família Linguística:</strong> {cultureData.etymology.family}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-3">
              Características Estruturais Únicas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cultureData.etymology.keyLinguisticFeatures.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                  <span className="text-[#C8102E] font-bold">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-2">
              Empréstimos Lexicais e a Revolução Republicana
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {cultureData.etymology.loanwordsAndReforms}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
