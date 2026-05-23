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
                  <svg className="w-10 h-10 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 22H5v-2h14v2M17.16 8.26A2.5 2.5 0 0 0 15 3c-.28 0-.5.22-.5.5s.22.5.5.5a1.5 1.5 0 0 1 1.5 1.5c0 .28-.22.5-.5.5a2.5 2.5 0 0 0-2.45 2h-.03c-.18-1.13-1.01-2.02-2.02-2.02S9.68 6.87 9.5 8h-.03A2.5 2.5 0 0 0 7 6c-.28 0-.5-.22-.5-.5A1.5 1.5 0 0 1 8 4c.28 0 .5-.22.5-.5S8.28 3 8 3a2.5 2.5 0 0 0-2.16 5.26L4 18h16l-2.84-9.74z"/>
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

          {/* Intellivision Games Interest */}
          <GlowCard glowColor="purple">
            <div className="p-6 h-full flex flex-col">
              <div className="mb-4">
                <div className="w-16 h-16 bg-purple-500/10 border-2 border-purple-500/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Retro Gaming
                </h2>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">
                Nostalgia for classic Intellivision games from the golden age of gaming. These vintage titles bring back memories of simpler times and pioneering game design.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-purple-400 font-mono mr-2">PLATFORM:</span>
                  <span>Intellivision</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-purple-400 font-mono mr-2">ERA:</span>
                  <span>1979-1990</span>
                </div>
              </div>

              <a
                href="https://www.intellivision.us/intvgames/nostalgia/nostalgia.php"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center px-4 py-2 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500 hover:text-black transition-all font-mono"
              >
                EXPLORE GAMES
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </GlowCard>

          {/* CrossFit Interest */}
          <GlowCard glowColor="blue">
            <div className="p-6 h-full flex flex-col">
              <div className="mb-4">
                <div className="w-16 h-16 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    {/* Barbell */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 10v4M21 10v4M5 9v6M19 9v6M7 8v8M17 8v8"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  CrossFit
                </h2>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">
                We own <a href="https://www.crossfitkapaa.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">CrossFit Kapaa</a>, where fitness meets community. My wonderful partner Bethanie is a competitive Masters athlete who inspires everyone around her with her dedication and strength.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-blue-400 font-mono mr-2">GYM:</span>
                  <a href="https://www.crossfitkapaa.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">CrossFit Kapaa</a>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-blue-400 font-mono mr-2">ATHLETE:</span>
                  <span>Bethanie Werner</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-blue-400 font-mono mr-2">LEVEL:</span>
                  <span>Masters Competitor</span>
                </div>
              </div>

              <a
                href="https://www.instagram.com/bethaniewerner"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center px-4 py-2 border-2 border-blue-500 text-blue-400 font-bold rounded-lg hover:bg-blue-500 hover:text-black transition-all font-mono"
              >
                FOLLOW BETHANIE
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
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
