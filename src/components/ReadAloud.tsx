'use client';

import { useState, useRef } from 'react';

interface ReadAloudProps {
  children: React.ReactNode;
  text: string;
  className?: string;
}

export default function ReadAloud({ children, text, className = '' }: ReadAloudProps) {
  const [isReading, setIsReading] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const handleMouseEnter = () => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Create new utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utteranceRef.current = utterance;
      
      // Optional: Configure voice settings
      utterance.rate = 1.0; // Speed (0.1 to 10)
      utterance.pitch = 1.0; // Pitch (0 to 2)
      utterance.volume = 0.8; // Volume (0 to 1)
      
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
