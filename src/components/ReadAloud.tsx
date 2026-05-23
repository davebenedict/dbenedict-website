'use client';

import { useState, useRef } from 'react';
import { useVoice } from '@/contexts/VoiceContext';

interface ReadAloudProps {
  children: React.ReactNode;
  text: string;
  className?: string;
}

export default function ReadAloud({ children, text, className = '' }: ReadAloudProps) {
  const [isReading, setIsReading] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const { isVoiceEnabled } = useVoice();

  const handleMouseEnter = () => {
    // Only read if voice is enabled
    if (!isVoiceEnabled) return;
    
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Create new utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utteranceRef.current = utterance;
      
      // 80s British computer assistant voice - retro and robotic
      utterance.rate = 0.85; // Slower, deliberate 80s computer pace
      utterance.pitch = 0.7; // Lower pitch for male voice with robotic quality
      utterance.volume = 1.0; // Full volume for clarity
      
      // Try to select a British male voice
      const voices = window.speechSynthesis.getVoices();
      const britishMaleVoice = voices.find(voice => 
        // Prefer Google UK Male voices
        voice.name.includes('Google UK English Male') ||
        voice.name.includes('Microsoft George') || // UK Male
        voice.name.includes('Microsoft Ryan') || // UK Male
        voice.name.includes('Daniel') || // UK Male (macOS)
        voice.name.includes('Oliver') || // UK Male (macOS)
        // Fallback to any UK male voice
        (voice.lang === 'en-GB' && voice.name.toLowerCase().includes('male')) ||
        // Last resort: any male English voice
        (voice.lang.startsWith('en') && voice.name.toLowerCase().includes('male'))
      );
      if (britishMaleVoice) {
        utterance.voice = britishMaleVoice;
      }
      
      // Event handlers
      utterance.onstart = () => setIsReading(true);
      utterance.onend = () => setIsReading(false);
      utterance.onerror = () => setIsReading(false);
      
      // Speak
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleMouseLeave = () => {
    // Stop speaking when mouse leaves
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className} ${isReading ? 'ring-2 ring-cyan-400 ring-opacity-50' : ''}`}
    >
      {children}
      {isReading && (
        <div className="absolute top-2 right-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full p-2 animate-pulse">
          <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
          </svg>
        </div>
      )}
    </div>
  );
}
