import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, Lightbulb, HelpCircle } from 'lucide-react';
import AudioButton from './AudioButton';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export default function ExerciseTab({ preselectedLevel = 'A1', onGoToPerformance }) {
  const [level, setLevel] = useState(preselectedLevel || 'A1');
  const [exercises, setExercises] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [answersHistory, setAnswersHistory] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  // Carrega exercícios do nível
  const loadExercises = (lvl) => {
    setLoading(true);
    setIsFinished(false);
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasSubmitted(false);
    setScore(0);
    setAnswersHistory([]);

    fetch(`/api/exercises?level=${lvl}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data)) {
          setExercises(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao carregar exercícios:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadExercises(level);
  }, [level]);

  useEffect(() => {
    if (preselectedLevel && preselectedLevel !== 'ALL' && preselectedLevel !== level) {
      setLevel(preselectedLevel);
    }
  }, [preselectedLevel]);

  const currentQ = exercises[currentIndex];

  const handleSelectOption = (option) => {
    if (hasSubmitted) return;
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || hasSubmitted) return;

    // Faz a avaliação com o backend
    fetch('/api/exercises/evaluate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 'aluno-evet',
        level,
        submissions: [
          { questionId: currentQ.id, answer: selectedOption }
        ]
      })
    })
      .then(res => res.json())
      .then(result => {
        if (result.success && result.data.results.length > 0) {
          const evalResult = result.data.results[0];
          setHasSubmitted(true);
          const isCorrect = evalResult.isCorrect;
          if (isCorrect) {
            setScore(prev => prev + 1);
          }
          setAnswersHistory(prev => [
            ...prev,
            {
              question: currentQ.question,
              selected: selectedOption,
              correct: evalResult.correctAnswer,
              isCorrect,
              explanation: evalResult.explanation
            }
          ]);
        }
      })
      .catch(err => {
        console.error('Erro ao avaliar:', err);
        // Fallback local caso haja falha
        setHasSubmitted(true);
      });
  };

  const handleNext = () => {
    if (currentIndex + 1 < exercises.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setHasSubmitted(false);
    } else {
      setIsFinished(true);
    }
  };

  const currentHistoryItem = answersHistory[answersHistory.length - 1];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Seletor de Níveis */}
      <div className="flex items-center justify-between gap-3 mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <h2 className="text-2xl font-bold font-serif text-zinc-900 dark:text-white">
            Prática & Exercícios Interativos
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">
            100% em português com feedback imediato e explicações das regras
          </p>
        </div>

        <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800/80 p-1 rounded-xl border border-zinc-200 dark:border-zinc-700/60">
          {LEVELS.map(lvl => (
            <button
              key={lvl}
              onClick={() => setLevel(lvl)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                level === lvl
                  ? 'bg-[#C8102E] text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="py-24 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#C8102E]" />
          <p className="text-xs text-zinc-500 mt-2 font-mono">Preparando exercícios do nível {level}...</p>
        </div>
      ) : isFinished ? (
        /* Tela de Resultados Finais */
        <div className="bg-white dark:bg-zinc-900/80 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 text-center shadow-sm">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-50 dark:bg-red-950/40 text-[#C8102E] flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold font-serif text-zinc-900 dark:text-white mb-2">
            Exercícios do Nível {level} Concluídos!
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            Você acertou <strong className="text-zinc-900 dark:text-white">{score}</strong> de <strong className="text-zinc-900 dark:text-white">{exercises.length}</strong> questões ({Math.round((score / exercises.length) * 100)}%).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => loadExercises(level)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Refazer nível {level}
            </button>
            <button
              onClick={onGoToPerformance}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C8102E] hover:bg-[#A00D24] text-white text-sm font-semibold shadow-sm transition-colors"
            >
              <span>Ver painel de progresso</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : currentQ ? (
        /* Card de Pergunta Ativa */
        <div className="bg-white dark:bg-zinc-900/80 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-sm">
          {/* Header da Pergunta: Progresso e Tópico */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono">
              Questão {currentIndex + 1} de {exercises.length}
            </span>
            <span className="text-xs font-medium text-[#C8102E] dark:text-red-400">
              {currentQ.topic}
            </span>
          </div>

          {/* Barra de Progresso */}
          <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-6 overflow-hidden">
            <div
              className="h-full bg-[#C8102E] transition-all duration-300 rounded-full"
              style={{ width: `${((currentIndex + 1) / exercises.length) * 100}%` }}
            />
          </div>

          {/* Enunciado */}
          <div className="mb-6">
            <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 mb-1">
              {currentQ.instructions}
            </p>
            <h3 className="text-lg sm:text-xl font-bold font-serif text-zinc-900 dark:text-white leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Opções de Resposta */}
          <div className="space-y-3 mb-6">
            {currentQ.options && currentQ.options.map((opt, oIdx) => {
              const isSelected = selectedOption === opt;
              let btnClass = 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900';

              if (isSelected) {
                btnClass = 'border-[#C8102E] bg-red-50/50 dark:bg-red-950/20 text-[#C8102E] dark:text-red-300 font-semibold ring-2 ring-[#C8102E]/20';
              }

              if (hasSubmitted && currentHistoryItem) {
                if (opt === currentHistoryItem.correct) {
                  btnClass = 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 font-semibold';
                } else if (isSelected && !currentHistoryItem.isCorrect) {
                  btnClass = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400';
                }
              }

              return (
                <button
                  key={oIdx}
                  type="button"
                  disabled={hasSubmitted}
                  onClick={() => handleSelectOption(opt)}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all flex items-center justify-between ${btnClass}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-mono flex items-center justify-center text-zinc-500">
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span>{opt}</span>
                  </span>
                  {opt.length < 30 && <AudioButton text={opt} />}
                </button>
              );
            })}
          </div>

          {/* Feedback Didático Imediato */}
          {hasSubmitted && currentHistoryItem && (
            <div className={`p-4 rounded-xl mb-6 border animate-fadeIn ${
              currentHistoryItem.isCorrect
                ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40 text-emerald-900 dark:text-emerald-300'
                : 'bg-red-50/60 dark:bg-red-950/20 border-red-200 dark:border-red-900/40 text-red-900 dark:text-red-300'
            }`}>
              <div className="flex items-center gap-2 mb-1.5 font-bold text-sm">
                {currentHistoryItem.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span>Correto! Parabéns.</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <span>Incorreto. A resposta certa é: <u>{currentHistoryItem.correct}</u></span>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm leading-relaxed mt-1 opacity-90">
                {currentHistoryItem.explanation}
              </p>
            </div>
          )}

          {/* Botão de Ação */}
          <div className="flex justify-end">
            {!hasSubmitted ? (
              <button
                type="button"
                disabled={!selectedOption}
                onClick={handleSubmitAnswer}
                className="px-6 py-2.5 rounded-lg bg-[#C8102E] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#A00D24] text-white text-sm font-semibold transition-colors"
              >
                Confirmar Resposta
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
              >
                <span>{currentIndex + 1 < exercises.length ? 'Próxima Questão' : 'Ver Resultados'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
