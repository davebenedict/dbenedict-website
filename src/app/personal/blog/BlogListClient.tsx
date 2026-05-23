'use client';

import Link from 'next/link';
import MatrixBackground from '@/components/MatrixBackground';
import GlowCard from '@/components/GlowCard';
import { VoiceProvider } from '@/contexts/VoiceContext';
import VoiceToggle from '@/components/VoiceToggle';
import ReadAloud from '@/components/ReadAloud';
import { BlogPost } from '@/lib/blog';

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
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
                <Link href="/personal/blog" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
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

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <ReadAloud text="Data Stream. Blog Transmissions. Technical insights, tutorials, and thoughts on emerging technologies.">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono">
              &lt;DATA STREAM /&gt;
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              BLOG TRANSMISSIONS
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technical insights, tutorials, and thoughts on emerging technologies
          </p>
        </div>
        </ReadAloud>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link href={`/personal/blog/${post.slug}`} key={post.slug}>
              <GlowCard glowColor="cyan">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full font-mono">
                      {post.category.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-400 font-mono">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-cyan-400 text-sm font-mono mt-auto">
                    <span>ACCESS DATA</span>
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </GlowCard>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4 font-mono">
              [ NO TRANSMISSIONS AVAILABLE ] - Check back soon!
            </p>
          </div>
        )}
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
