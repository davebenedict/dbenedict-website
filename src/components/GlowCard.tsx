'use client';

import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({ children, className = '', glowColor = 'cyan' }: GlowCardProps) {
  const glowColors = {
    cyan: 'hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]',
    blue: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
    purple: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
    green: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]',
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl
        bg-gradient-to-br from-gray-900/90 to-gray-800/90
        border border-cyan-500/20
        backdrop-blur-sm
        transition-all duration-300
        ${glowColors[glowColor as keyof typeof glowColors] || glowColors.cyan}
        hover:border-cyan-500/50
        hover:scale-[1.02]
        ${className}
      `}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-shimmer" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/30" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-500/30" />
    </div>
  );
}
