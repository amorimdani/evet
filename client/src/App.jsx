import React, { useState, useEffect } from 'react';
import { BookOpen, CheckSquare, FileText, Compass, Activity, Sun, Moon } from 'lucide-react';
import LessonsTab from './components/LessonsTab';
import ExerciseTab from './components/ExerciseTab';
import WorksheetTab from './components/WorksheetTab';
import CultureTab from './components/CultureTab';
import ProgressTab from './components/ProgressTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('lessons');
  const [exerciseLevel, setExerciseLevel] = useState('A1');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('evet_theme');
    return saved === null || saved === 'dark';
  });
  const [redisHealthy, setRedisHealthy] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('evet_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('evet_theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    fetch('/healthz')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'healthy' || data.redisStatus === 'connected') {
          setRedisHealthy(true);
        }
      })
      .catch(() => setRedisHealthy(false));
  }, []);

  const handleSelectPractice = (lvl) => {
    setExerciseLevel(lvl);
    setActiveTab('exercises');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'lessons', label: 'Aulas (A1–C2)', icon: BookOpen },
    { id: 'exercises', label: 'Prática Interativa', icon: CheckSquare },
    { id: 'worksheets', label: 'Caderno PDF', icon: FileText },
    { id: 'culture', label: 'Cultura & Etimologia', icon: Compass },
    { id: 'progress', label: 'Meu Progresso', icon: Activity }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#121316] text-zinc-900 dark:text-zinc-100 flex flex-col font-sans transition-colors duration-150">
      {/* HEADER MINIMALISTA & LIMPO */}
      <header className="no-print sticky top-0 z-50 bg-[#FAF8F5]/90 dark:bg-[#121316]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo Evet */}
            <div
              onClick={() => setActiveTab('lessons')}
              className="flex items-center gap-2.5 cursor-pointer select-none group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#C8102E] flex items-center justify-center text-white font-serif font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                Ev
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold font-serif text-zinc-900 dark:text-white tracking-tight">
                  Evet
                </span>
                <span className="text-[11px] font-mono text-zinc-400">
                  Türkçe
                </span>
              </div>
            </div>

            {/* Navegação Desktop */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? 'bg-zinc-200/70 dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#C8102E]' : 'text-zinc-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Controles: Status & Tema */}
            <div className="flex items-center gap-2">
              <span
                title={redisHealthy ? 'Servidor & Redis operacionais' : 'Modo offline'}
                className={`w-2 h-2 rounded-full ${redisHealthy ? 'bg-emerald-500 ring-2 ring-emerald-500/20' : 'bg-amber-500'}`}
              />

              <button
                type="button"
                onClick={() => setIsDarkMode(!isDarkMode)}
                title={isDarkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-zinc-600" />
                )}
              </button>
            </div>
          </div>

          {/* Navegação Mobile (Barra Horizontal) */}
          <div className="flex md:hidden overflow-x-auto py-2 gap-1 border-t border-zinc-200 dark:border-zinc-800 no-scrollbar">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL DAS ABAS */}
      <main className="flex-1">
        {activeTab === 'lessons' && (
          <LessonsTab onSelectPractice={handleSelectPractice} />
        )}

        {activeTab === 'exercises' && (
          <ExerciseTab
            preselectedLevel={exerciseLevel}
            onGoToPerformance={() => setActiveTab('progress')}
          />
        )}

        {activeTab === 'worksheets' && (
          <WorksheetTab />
        )}

        {activeTab === 'culture' && (
          <CultureTab />
        )}

        {activeTab === 'progress' && (
          <ProgressTab onTakeExercise={() => setActiveTab('exercises')} />
        )}
      </main>

      {/* RODAPÉ DISCRETO & MINIMALISTA */}
      <footer className="no-print border-t border-zinc-200 dark:border-zinc-800 py-8 mt-16 text-center text-xs text-zinc-500 font-mono">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Evet — Plataforma de Ensino da Língua Turca em Português</span>
          <span>CEFR A1 a C2 • 48 Módulos • 100+ Exercícios • Redis</span>
        </div>
      </footer>
    </div>
  );
}
