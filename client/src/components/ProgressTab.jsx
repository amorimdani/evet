import React, { useState, useEffect } from 'react';
import { Activity, Award, CheckCircle2, RotateCcw, ArrowRight, Database, Target, TrendingUp } from 'lucide-react';

export default function ProgressTab({ onTakeExercise }) {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProgress = () => {
    setLoading(true);
    fetch('/api/progress/aluno-evet')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setProgress(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao carregar progresso:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  const handleReset = () => {
    if (!window.confirm('Deseja realmente redefinir o seu histórico de desempenho e estatísticas?')) return;
    fetch('/api/progress/reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'aluno-evet' })
    })
      .then(res => res.json())
      .then(() => {
        fetchProgress();
      })
      .catch(err => console.error('Erro ao resetar:', err));
  };

  if (loading) {
    return (
      <div className="py-24 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#C8102E]" />
        <p className="text-xs text-zinc-500 mt-2 font-mono">Consultando métricas no Redis...</p>
      </div>
    );
  }

  const stats = progress?.stats || {};
  const history = progress?.history || [];
  const redisConnected = progress?.redisConnected;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <h2 className="text-2xl font-bold font-serif text-zinc-900 dark:text-white">
            Meu Desempenho & Métricas de Aprendizado
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">
            Acompanhe sua taxa de acerto e retenção por nível com persistência no Redis
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-mono border border-zinc-200 dark:border-zinc-700">
            <Database className="w-3.5 h-3.5 text-zinc-400" />
            <span>Redis:</span>
            <span className={`font-semibold ${redisConnected ? 'text-emerald-500' : 'text-amber-500'}`}>
              {redisConnected ? 'Sincronizado' : 'Modo Memória'}
            </span>
          </div>

          <button
            onClick={handleReset}
            title="Redefinir estatísticas"
            className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-400 hover:text-red-500 hover:border-red-300 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid de Cards de Estatísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="text-xs font-medium">Média Global</span>
            <TrendingUp className="w-4 h-4 text-[#C8102E]" />
          </div>
          <p className="text-3xl font-bold font-serif text-zinc-900 dark:text-white">
            {stats.averageScore || 0}%
          </p>
          <span className="text-[11px] text-zinc-400 mt-1 block">
            Aproveitamento nos testes
          </span>
        </div>

        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="text-xs font-medium">Questões Respondidas</span>
            <Target className="w-4 h-4 text-emerald-500" />
          </div>
          <p className="text-3xl font-bold font-serif text-zinc-900 dark:text-white">
            {stats.totalQuestionsAnswered || 0}
          </p>
          <span className="text-[11px] text-zinc-400 mt-1 block">
            {stats.totalCorrect || 0} acertos confirmados
          </span>
        </div>

        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="text-xs font-medium">Sessões Realizadas</span>
            <Activity className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-3xl font-bold font-serif text-zinc-900 dark:text-white">
            {stats.totalAttempts || 0}
          </p>
          <span className="text-[11px] text-zinc-400 mt-1 block">
            Baterias de teste concluídas
          </span>
        </div>

        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="text-xs font-medium">Status de Domínio</span>
            <Award className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-xl font-bold font-serif text-zinc-900 dark:text-white">
            {(stats.averageScore || 0) >= 80 ? 'Avançado' : (stats.averageScore || 0) >= 50 ? 'Em Progresso' : 'Iniciante'}
          </p>
          <span className="text-[11px] text-zinc-400 mt-1 block">
            Classificação pedagógica
          </span>
        </div>
      </div>

      {/* Histórico das Últimas Tentativas */}
      <div className="bg-white dark:bg-zinc-900/60 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm mb-8">
        <h3 className="text-lg font-bold font-serif text-zinc-900 dark:text-white mb-4">
          Histórico Recente de Prática
        </h3>

        {history.length === 0 ? (
          <div className="py-12 text-center text-zinc-400 text-xs font-sans">
            Nenhuma sessão de exercício registrada ainda. Faça seu primeiro teste na aba Prática!
          </div>
        ) : (
          <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {history.slice(0, 8).map((item, idx) => (
              <div key={idx} className="py-3 flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {item.level || 'A1'}
                  </span>
                  <div>
                    <p className="font-medium text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm">
                      {item.correctCount} acertos de {item.totalQuestions} questões
                    </p>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      {new Date(item.timestamp).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`text-sm font-bold font-mono ${item.passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-500'}`}>
                    {item.scorePercentage}%
                  </span>
                  <span className="text-[10px] block text-zinc-400">
                    {item.passed ? 'Aprovado' : 'Revisar'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Call to action */}
      <div className="text-center pt-4">
        <button
          onClick={onTakeExercise}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#C8102E] hover:bg-[#A00D24] text-white text-sm font-semibold shadow-sm transition-colors"
        >
          <span>Iniciar nova bateria de exercícios</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
