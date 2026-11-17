import React, { useState, useEffect } from 'react';
import { Printer, Download, BookOpen, CheckSquare, Sparkles } from 'lucide-react';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export default function WorksheetTab() {
  const [level, setLevel] = useState('A1');
  const [worksheet, setWorksheet] = useState(null);
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/exercises/printable?level=${level}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setWorksheet(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao gerar ficha:', err);
        setLoading(false);
      });
  }, [level]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Controles da Ficha (Ocultos na Impressão) */}
      <div className="no-print mb-8 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold font-serif text-zinc-900 dark:text-white">
            Caderno de Exercícios & Fichas de Estudo para Impressão (PDF)
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            Gera folhas de atividades diagramadas no padrão A4, ideais para estudo offline e fixação manual.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg border border-zinc-200 dark:border-zinc-700">
            {LEVELS.map(lvl => (
              <button
                key={lvl}
                onClick={() => setLevel(lvl)}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors ${
                  level === lvl
                    ? 'bg-[#C8102E] text-white shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowAnswerKey(!showAnswerKey)}
            className="px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {showAnswerKey ? 'Ocultar Gabarito' : 'Incluir Gabarito'}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-lg bg-[#C8102E] hover:bg-[#A00D24] text-white shadow-sm transition-colors"
          >
            <Printer className="w-4 h-4" />
            Imprimir / Salvar PDF
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-24 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#C8102E]" />
          <p className="text-xs text-zinc-500 mt-2 font-mono">Diagramando folha de atividades...</p>
        </div>
      ) : worksheet ? (
        /* Documento Formatado para Impressão (Estilo Caderno de Estudos A4) */
        <div className="bg-white text-zinc-900 p-8 sm:p-12 rounded-2xl border border-zinc-300 shadow-md print:shadow-none print:border-none print:p-0">
          {/* Cabeçalho da Folha */}
          <div className="border-b-2 border-zinc-900 pb-4 mb-6 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 text-xs font-bold bg-[#C8102E] text-white rounded">
                  EVET TÜRKÇE
                </span>
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                  Plataforma de Língua Turca
                </span>
              </div>
              <h1 className="text-2xl font-bold font-serif text-zinc-900">
                Caderno de Prática e Fixação Gramatical — Nível {level}
              </h1>
              <p className="text-xs text-zinc-500 mt-1">
                Idioma de Instrução: Português • Total de Questões: {worksheet.totalQuestions} • Pontos: {worksheet.totalPoints}
              </p>
            </div>

            <div className="text-right text-xs text-zinc-500 font-mono">
              <p>Nome: ______________________</p>
              <p className="mt-1">Data: ____/____/2026</p>
              <p className="mt-1">Nota: ____/{worksheet.totalPoints}</p>
            </div>
          </div>

          {/* Lista de Exercícios Formatados para Papel */}
          <div className="space-y-6">
            {worksheet.questions.map((q, idx) => (
              <div key={q.id} className="pb-4 border-b border-zinc-200 last:border-b-0 break-inside-avoid">
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="font-bold text-sm text-zinc-900">
                    {idx + 1}. [{q.topic}]
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    ({q.points || 10} pts)
                  </span>
                </div>
                <p className="text-xs text-zinc-600 mb-2 italic">
                  {q.instructions}
                </p>
                <p className="text-sm font-semibold text-zinc-800 mb-3">
                  {q.question}
                </p>

                {/* Opções de Múltipla Escolha com Caixas para Marcar */}
                {q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, oIdx) => (
                      <div key={oIdx} className="flex items-center gap-2 p-2 rounded border border-zinc-200">
                        <span className="w-4 h-4 rounded border border-zinc-400 inline-block flex-shrink-0" />
                        <span>{String.fromCharCode(65 + oIdx)}) {opt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Gabarito das Respostas (Opcional ou ao Final da Impressão) */}
          {showAnswerKey && worksheet.answerKey && (
            <div className="mt-12 pt-6 border-t-2 border-dashed border-zinc-400 break-before-page">
              <h3 className="text-lg font-bold font-serif mb-4 flex items-center gap-2 text-zinc-900">
                <CheckSquare className="w-5 h-5 text-[#C8102E]" />
                Gabarito Oficial e Explicações Pedagógicas
              </h3>
              <div className="grid grid-cols-1 gap-3 text-xs">
                {worksheet.answerKey.map(ans => (
                  <div key={ans.id} className="p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
                    <p className="font-bold text-zinc-900">
                      Questão {ans.number}: <span className="text-emerald-700 underline">{ans.correctAnswer}</span>
                    </p>
                    <p className="text-zinc-600 mt-1 italic">
                      {ans.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rodapé da Página Impressa */}
          <div className="mt-8 pt-4 border-t border-zinc-200 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
            <span>Evet — Türkçe Öğrenme Platformu</span>
            <span>https://evet-danicode.duckdns.org</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
