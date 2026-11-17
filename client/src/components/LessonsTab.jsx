import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Clock, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, MessageSquare, Lightbulb } from 'lucide-react';
import AudioButton from './AudioButton';

const LEVELS = [
  { id: 'ALL', label: 'Todos os Níveis' },
  { id: 'A1', label: 'A1 • Iniciante' },
  { id: 'A2', label: 'A2 • Básico' },
  { id: 'B1', label: 'B1 • Intermediário' },
  { id: 'B2', label: 'B2 • Interm. Superior' },
  { id: 'C1', label: 'C1 • Avançado' },
  { id: 'C2', label: 'C2 • Fluência / Maestria' }
];

export default function LessonsTab({ onSelectPractice }) {
  const [lessons, setLessons] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLesson, setActiveLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/curriculum/lessons')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data)) {
          setLessons(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao carregar lições:', err);
        setLoading(false);
      });
  }, []);

  const filteredLessons = lessons.filter(lesson => {
    const matchesLevel = selectedLevel === 'ALL' || lesson.level.toUpperCase() === selectedLevel.toUpperCase();
    const query = searchTerm.toLowerCase().trim();
    const matchesSearch = !query ||
      lesson.title.toLowerCase().includes(query) ||
      lesson.summary.toLowerCase().includes(query) ||
      lesson.category.toLowerCase().includes(query);
    return matchesLevel && matchesSearch;
  });

  if (activeLesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
        {/* Top bar de navegação da lição */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
          <button
            onClick={() => setActiveLesson(null)}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o sumário de lições
          </button>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-red-100 dark:bg-red-950/60 text-[#C8102E] dark:text-red-400 border border-red-200 dark:border-red-900/40">
              {activeLesson.levelLabel || `Nível ${activeLesson.level}`}
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500 font-mono">
              <Clock className="w-3.5 h-3.5" />
              {activeLesson.readTimeMinutes || 10} min
            </span>
          </div>
        </div>

        {/* Cabeçalho da Aula */}
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#C8102E] dark:text-red-400 mb-2">
            {activeLesson.category}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-zinc-900 dark:text-white leading-tight mb-4">
            {activeLesson.title}
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
            {activeLesson.summary}
          </p>
        </header>

        {/* Teoria Textual */}
        <article className="prose dark:prose-invert max-w-none text-zinc-800 dark:text-zinc-200 leading-relaxed mb-12 space-y-4">
          {activeLesson.theory.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl font-bold font-serif text-zinc-900 dark:text-white mt-8 mb-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={idx} className="text-2xl font-bold font-serif text-zinc-900 dark:text-white mt-10 mb-4">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('---')) {
              return <hr key={idx} className="my-8 border-zinc-200 dark:border-zinc-800" />;
            }
            return (
              <p key={idx} className="text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Tabelas Explicativas */}
        {activeLesson.tables && activeLesson.tables.length > 0 && (
          <section className="mb-12">
            <h3 className="text-xl font-bold font-serif text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C8102E]" />
              Quadros e Tabelas de Referência
            </h3>
            <div className="space-y-6">
              {activeLesson.tables.map((table, tIdx) => (
                <div key={tIdx} className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm">
                  {table.title && (
                    <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
                      <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 font-sans">
                        {table.title}
                      </p>
                    </div>
                  )}
                  <table className="w-full text-left text-sm">
                    <thead className="text-xs uppercase bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400">
                      <tr>
                        {table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-4 py-3 font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 font-sans">
                      {table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-3 text-zinc-800 dark:text-zinc-200">
                              <span className="flex items-center gap-2">
                                <span>{cell}</span>
                                {cIdx === 0 && cell.length < 25 && !cell.includes(' ') && (
                                  <AudioButton text={cell.split(',')[0]} />
                                )}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Vocabulário Essencial */}
        {activeLesson.vocabulary && activeLesson.vocabulary.length > 0 && (
          <section className="mb-12">
            <h3 className="text-xl font-bold font-serif text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#C8102E]" />
              Vocabulário da Aula (Turco ➔ Português)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeLesson.vocabulary.map((vocab, vIdx) => (
                <div key={vIdx} className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between gap-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base text-zinc-900 dark:text-white">
                          {vocab.turkish}
                        </span>
                        <AudioButton text={vocab.turkish} />
                      </div>
                      {vocab.pronunciation && (
                        <span className="text-xs text-zinc-400 font-mono">
                          [{vocab.pronunciation}]
                        </span>
                      )}
                    </div>
                    {vocab.category && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 font-medium">
                        {vocab.category}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      {vocab.portuguese || vocab.english}
                    </p>
                    {vocab.example && (
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 italic">
                        {vocab.example}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Diálogos da Vida Real */}
        {activeLesson.dialogues && activeLesson.dialogues.length > 0 && (
          <section className="mb-12">
            <h3 className="text-xl font-bold font-serif text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#C8102E]" />
              Diálogos da Vida Real (Prática Situacional)
            </h3>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-4 space-y-4 shadow-sm">
              {activeLesson.dialogues.map((d, dIdx) => (
                <div key={dIdx} className="flex flex-col gap-1 pb-3 border-b border-zinc-100 dark:border-zinc-800/60 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#C8102E] dark:text-red-400 uppercase tracking-wider">
                      {d.speaker}
                    </span>
                    <AudioButton text={d.turkish} />
                  </div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {d.turkish}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {d.portuguese}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Dicas de Ouro para Lusófonos */}
        {activeLesson.tips && activeLesson.tips.length > 0 && (
          <section className="mb-12">
            <div className="rounded-xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/70 dark:bg-amber-950/20 p-5">
              <h4 className="text-sm font-bold text-amber-900 dark:text-amber-400 mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                Dicas de Ouro para Falantes de Português
              </h4>
              <ul className="space-y-2">
                {activeLesson.tips.map((tip, tIdx) => (
                  <li key={tIdx} className="text-xs sm:text-sm text-amber-800 dark:text-amber-300 leading-relaxed list-disc list-inside">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Ação de Prática no Fim da Aula */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => setActiveLesson(null)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            ← Voltar ao sumário
          </button>
          <button
            onClick={() => onSelectPractice(activeLesson.level)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C8102E] hover:bg-[#A00D24] text-white text-sm font-semibold shadow-sm transition-colors"
          >
            <span>Praticar exercícios deste nível ({activeLesson.level})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Banner / Cabeçalho Minimalista */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-serif text-zinc-900 dark:text-white mb-2">
          Currículo Completo de Língua Turca (A1 ao C2)
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
          48 lições aprofundadas com gramática detalhada, tabelas fonéticas, áudios e explicações pedagógicas comparativas para falantes de português.
        </p>
      </div>

      {/* Barra de Filtros e Busca */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Seletor de Níveis (Pill Buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {LEVELS.map(lvl => {
            const active = selectedLevel === lvl.id;
            return (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevel(lvl.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
                  active
                    ? 'bg-[#C8102E] text-white border-[#C8102E] shadow-sm'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                {lvl.label}
              </button>
            );
          })}
        </div>

        {/* Input de Busca */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Buscar por tópico, regra ou palavra..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
          />
        </div>
      </div>

      {/* Grid de Lições */}
      {loading ? (
        <div className="py-24 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#C8102E]" />
          <p className="text-xs text-zinc-500 mt-2 font-mono">Carregando aulas...</p>
        </div>
      ) : filteredLessons.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl">
          <BookOpen className="w-8 h-8 text-zinc-300 dark:text-zinc-700 mx-auto mb-2" />
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Nenhuma lição encontrada para os critérios selecionados.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLessons.map(lesson => (
            <div
              key={lesson.id}
              onClick={() => setActiveLesson(lesson)}
              className="group cursor-pointer rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 p-5 shadow-sm hover:shadow-md hover:border-[#C8102E]/60 dark:hover:border-red-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-50 dark:bg-red-950/40 text-[#C8102E] dark:text-red-400 border border-red-100 dark:border-red-900/30">
                    {lesson.level}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-zinc-400 font-mono">
                    <Clock className="w-3 h-3" />
                    {lesson.readTimeMinutes || 8} min
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-zinc-900 dark:text-white group-hover:text-[#C8102E] dark:group-hover:text-red-400 transition-colors line-clamp-2 mb-2">
                  {lesson.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                  {lesson.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 font-medium">
                <span>{lesson.category}</span>
                <span className="flex items-center gap-1 text-[#C8102E] font-semibold">
                  Acessar aula <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
