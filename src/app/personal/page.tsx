import Link from 'next/link';
import MatrixBackground from '@/components/MatrixBackground';
import GlowCard from '@/components/GlowCard';
import ReadAloud from '@/components/ReadAloud';

export default function PersonalHome() {
  return (
    <div className="min-h-screen relative bg-black overflow-hidden">
      {/* Matrix background */}
      <MatrixBackground />
      
      {/* Grid overlay */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" style={{ zIndex: 1 }} />
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-950/50 via-blue-950/50 to-black pointer-events-none" style={{ zIndex: 2 }} />
      
      {/* Content */}
      <div className="relative" style={{ zIndex: 3 }}>
      <nav className="bg-black/50 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-cyan-400 text-glow animate-glow-pulse">DAVID BENEDICT</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <Link href="/personal" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
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
                <Link href="/personal/contact" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Floating accent */}
          <div className="inline-block mb-4 animate-float">
            <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono">
              &lt;SYSTEM ONLINE /&gt;
            </span>
          </div>
          
          <ReadAloud text="Connected to David Benedict. Developer. Creator. Innovator. Explore the digital realm. Discover cutting-edge projects, insightful articles, and innovative solutions.">
          <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl mb-6">
            <span className="block text-white mb-2">CONNECTED TO</span>
            <span className="block text-cyan-400 text-glow animate-glow-pulse">
              DAVID BENEDICT
            </span>
            <span className="block text-2xl md:text-3xl text-gray-400 mt-4 font-mono">
              [ DEVELOPER • CREATOR • INNOVATOR ]
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Explore the digital realm. Discover cutting-edge projects, insightful articles, and innovative solutions.
          </p>
          </ReadAloud>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/personal/about"
              className="group relative px-8 py-4 bg-cyan-500/10 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg overflow-hidden transition-all hover:bg-cyan-500 hover:text-black"
            >
              <span className="relative z-10">INITIALIZE PROFILE</span>
              <div className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link
              href="/personal/contact"
              className="px-8 py-4 bg-transparent border-2 border-gray-500 text-gray-300 font-bold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all"
            >
              ESTABLISH CONNECTION
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/personal/portfolio-dynamic" className="block">
              <GlowCard glowColor="cyan">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">💼</span>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-400 font-mono">PORTFOLIO</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Explore cutting-edge projects and innovative solutions. View live demos and source code.
                  </p>
                  <div className="mt-4 flex items-center text-cyan-400 text-sm font-mono">
                    <span>ACCESS FILES</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </GlowCard>
            </Link>

            <Link href="/personal/blog" className="block">
              <GlowCard glowColor="blue">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">📡</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-400 font-mono">BLOG</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Technical insights, tutorials, and thoughts on emerging technologies and development.
                  </p>
                  <div className="mt-4 flex items-center text-blue-400 text-sm font-mono">
                    <span>READ TRANSMISSIONS</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </GlowCard>
            </Link>

            <Link href="/personal/contact" className="block">
              <GlowCard glowColor="purple">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold text-purple-400 font-mono">CONTACT</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Initiate communication protocols. Collaborate on projects or discuss opportunities.
                  </p>
                  <div className="mt-4 flex items-center text-purple-400 text-sm font-mono">
                    <span>OPEN CHANNEL</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </GlowCard>
            </Link>
          </div>
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
  );
}
