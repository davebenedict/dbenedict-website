'use client';

import Link from 'next/link';
import MatrixBackground from '@/components/MatrixBackground';
import GlowCard from '@/components/GlowCard';
import { VoiceProvider } from '@/contexts/VoiceContext';
import VoiceToggle from '@/components/VoiceToggle';
import ReadAloud from '@/components/ReadAloud';

export default function InterestsPage() {
  return (
    <VoiceProvider>
    <div className="min-h-screen relative bg-black overflow-hidden">
      <MatrixBackground />
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" style={{ zIndex: 1 }} />
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-950/50 via-blue-950/50 to-black pointer-events-none" style={{ zIndex: 2 }} />
      
      <div className="relative" style={{ zIndex: 3 }}>
      <nav className="bg-black/50 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/personal">
                <h1 className="text-2xl font-bold text-cyan-400 text-glow animate-glow-pulse">DAVID BENEDICT</h1>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-baseline space-x-1">
                <Link href="/personal" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  Home
                </Link>
                <Link href="/personal/about" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  About
                </Link>
                <Link href="/personal/portfolio-dynamic" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  Portfolio
                </Link>
                <Link href="/personal/blog" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  Blog
                </Link>
                <Link href="/personal/interests" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  Interests
                </Link>
                <Link href="/personal/contact" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  Contact
                </Link>
              </div>
              <VoiceToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <ReadAloud text="Personal Interests. Discover what I'm passionate about beyond coding. From strategic games to creative pursuits.">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono">
              &lt;PERSONAL INTERESTS /&gt;
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              BEYOND THE CODE
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover what I'm passionate about beyond coding
          </p>
        </div>
        </ReadAloud>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Chess Interest */}
          <GlowCard glowColor="cyan">
            <div className="p-6 h-full flex flex-col">
              <div className="mb-4">
                <div className="w-16 h-16 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Chess
                </h2>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">
                I love to play online chess and sharpen my strategic thinking. Whether it's blitz games or longer matches, chess keeps my mind sharp and competitive.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-cyan-400 font-mono mr-2">PLATFORM:</span>
                  <span>Chess.com</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-cyan-400 font-mono mr-2">USERNAME:</span>
                  <span>geckoseverywhere</span>
                </div>
              </div>

              <a
                href="https://www.chess.com/member/geckoseverywhere"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center px-4 py-2 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-black transition-all font-mono"
              >
                VIEW PROFILE
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </GlowCard>

          {/* Placeholder for more interests */}
          <GlowCard glowColor="purple">
            <div className="p-6 h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-purple-500/10 border-2 border-purple-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">More Coming Soon</h3>
              <p className="text-gray-400 text-sm font-mono">
                [ ADDITIONAL INTERESTS LOADING... ]
              </p>
            </div>
          </GlowCard>

          <GlowCard glowColor="blue">
            <div className="p-6 h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">More Coming Soon</h3>
              <p className="text-gray-400 text-sm font-mono">
                [ ADDITIONAL INTERESTS LOADING... ]
              </p>
            </div>
          </GlowCard>
        </div>
      </main>

      <footer className="bg-black/50 backdrop-blur-md border-t border-cyan-500/20 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            &copy; 2026 <span className="text-cyan-400">David Benedict</span>. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </div>
    </VoiceProvider>
  );
}
