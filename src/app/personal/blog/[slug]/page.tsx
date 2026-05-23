import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';
import MatrixBackground from '@/components/MatrixBackground';
import GlowCard from '@/components/GlowCard';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post;
  
  try {
    post = await getPostBySlug(params.slug);
  } catch (error) {
    notFound();
  }

  return (
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
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <Link href="/personal" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  Home
                </Link>
                <Link href="/personal/about" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  About
                </Link>
                <Link href="/personal/blog" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
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

      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <Link
          href="/personal/blog"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 font-mono"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          &lt; RETURN TO STREAM
        </Link>

        <GlowCard glowColor="blue">
          <div className="px-6 py-8 sm:p-10">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full font-mono">
                {post.category.toUpperCase()}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white mb-4">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-400 mb-8 font-mono text-sm">
              <span className="text-cyan-400">{post.author}</span>
              <span className="mx-2">•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-white
                prose-p:text-gray-300
                prose-a:text-cyan-400 hover:prose-a:text-cyan-300
                prose-strong:text-white
                prose-code:text-cyan-400 prose-code:bg-cyan-500/10 prose-code:px-1 prose-code:rounded
                prose-pre:bg-black/50 prose-pre:border prose-pre:border-cyan-500/30
                prose-li:text-gray-300
                prose-blockquote:border-cyan-500/50 prose-blockquote:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
          </div>
        </GlowCard>

        <div className="mt-8 flex justify-between items-center">
          <Link
            href="/personal/blog"
            className="inline-flex items-center px-4 py-2 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-black transition-all font-mono"
          >
            ← ALL TRANSMISSIONS
          </Link>
          <Link
            href="/personal/contact"
            className="inline-flex items-center px-4 py-2 border-2 border-gray-500 text-gray-300 font-bold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all font-mono"
          >
            OPEN CHANNEL →
          </Link>
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
