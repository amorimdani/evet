import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

let currentAudio = null;

export default function AudioButton({ text, label = null, className = '' }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (e) => {
    e.stopPropagation();
    if (!text) return;

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    setIsPlaying(true);

    const audioUrl = `/api/audio/pronounce?text=${encodeURIComponent(text)}`;
    const audio = new Audio(audioUrl);
    currentAudio = audio;

    audio.onended = () => {
      setIsPlaying(false);
      currentAudio = null;
    };

    audio.onerror = () => {
      // Fallback para SpeechSynthesis nativo do navegador
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'tr-TR';
        utterance.rate = 0.85;
        const turkishVoice = window.speechSynthesis.getVoices().find(v => v.lang.includes('tr') || v.name.toLowerCase().includes('turkish'));
        if (turkishVoice) utterance.voice = turkishVoice;
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
      } else {
        setIsPlaying(false);
      }
      currentAudio = null;
    };

    audio.play().catch(() => {
      audio.onerror();
    });
  };

  return (
    <button
      type="button"
      onClick={handlePlay}
      title={`Ouvir pronúncia: "${text}"`}
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700/60 select-none ${className}`}
    >
      <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'text-[#C8102E] animate-pulse' : 'text-zinc-400'}`} />
      {label && <span>{label}</span>}
    </button>
  );
}
