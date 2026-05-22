import Link from 'next/link';

export default function AboutPage() {
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
                <Link href="/personal/about" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/personal/blog" className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
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
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Welcome! I'm David Benedict, and this is my personal space on the web.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Background
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This section will contain information about your background, experience, and interests.
                You can customize this content to tell your story.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Skills</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Web Development</li>
                    <li>Software Engineering</li>
                    <li>Project Management</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Interests</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Technology</li>
                    <li>Innovation</li>
                    <li>Problem Solving</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Interested in connecting? Feel free to reach out through my contact page.
              </p>

              <Link
                href="/personal/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contact Me
              </Link>
            </div>
          </div>
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
