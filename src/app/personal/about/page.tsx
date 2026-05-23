'use client';

import Link from 'next/link';
import MatrixBackground from '@/components/MatrixBackground';
import GlowCard from '@/components/GlowCard';
import { VoiceProvider } from '@/contexts/VoiceContext';
import VoiceToggle from '@/components/VoiceToggle';
import ReadAloud from '@/components/ReadAloud';

export default function AboutPage() {
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
                <Link href="/personal/about" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  About
                </Link>
                <Link href="/personal/portfolio-dynamic" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  Portfolio
                </Link>
                <Link href="/personal/blog" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  Blog
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

      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <ReadAloud text="Profile Data. Welcome! I'm David Benedict, and this is my personal space on the web.">
        <GlowCard glowColor="cyan">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-4xl font-bold text-cyan-400 mb-6 font-mono">
              [ PROFILE DATA ]
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                Welcome! I'm David Benedict, and this is my personal space on the web.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Background
              </h2>
              <p className="text-gray-300 mb-4">
                This section will contain information about your background, experience, and interests.
                You can customize this content to tell your story.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-cyan-500/10 border border-cyan-500/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-400 mb-2">Technical Skills</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Web Development</li>
                    <li>Software Engineering</li>
                    <li>Project Management</li>
                  </ul>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-400 mb-2">Interests</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Technology</li>
                    <li>Innovation</li>
                    <li>Problem Solving</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-6">
                Interested in connecting? Feel free to reach out through my contact page.
              </p>

              <Link
                href="/personal/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-black transition-all"
              >
                OPEN CHANNEL
              </Link>
            </div>
          </div>
        </GlowCard>
        </ReadAloud>
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
