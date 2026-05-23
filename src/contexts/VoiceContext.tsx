'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface VoiceContextType {
  isVoiceEnabled: boolean;
  toggleVoice: () => void;
}

const VoiceContext = createContext<VoiceContextType | undefined>(undefined);

export function VoiceProvider({ children }: { children: ReactNode }) {
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false); // Default OFF

  const toggleVoice = () => {
    setIsVoiceEnabled(prev => !prev);
    // Cancel any ongoing speech when toggling off
    if (isVoiceEnabled && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <VoiceContext.Provider value={{ isVoiceEnabled, toggleVoice }}>
      {children}
    </VoiceContext.Provider>
  );
}

export function useVoice() {
  const context = useContext(VoiceContext);
  if (context === undefined) {
    throw new Error('useVoice must be used within a VoiceProvider');
  }
  return context;
}
