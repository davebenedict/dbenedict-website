import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/personal">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">David Benedict</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/personal" className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/personal/about" className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/personal/blog" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Blog
                </Link>
                <Link href="/personal/contact" className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
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
          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-8"
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
          Back to Blog
        </Link>

        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-8">
              <span>{post.author}</span>
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
                prose-headings:text-gray-900 dark:prose-headings:text-white
                prose-p:text-gray-600 dark:prose-p:text-gray-300
                prose-a:text-indigo-600 dark:prose-a:text-indigo-400
                prose-strong:text-gray-900 dark:prose-strong:text-white
                prose-code:text-indigo-600 dark:prose-code:text-indigo-400
                prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950
                prose-li:text-gray-600 dark:prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
          </div>
        </article>

        <div className="mt-8 flex justify-between items-center">
          <Link
            href="/personal/blog"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            ← All Posts
          </Link>
          <Link
            href="/personal/contact"
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Get in Touch →
          </Link>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; 2026 David Benedict. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
