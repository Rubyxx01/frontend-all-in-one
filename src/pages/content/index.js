"use client";

import Link from 'next/link';

export default function Content() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600 hover:opacity-80 transition">
            BuildYourFuture
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-indigo-600 font-medium transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-indigo-600 font-medium transition">
              About
            </Link>
            <Link href="/content" className="text-indigo-600 font-bold">
              Content
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-indigo-600 font-medium transition">
              Contact
            </Link>
            <Link href="/people" className="text-gray-600 hover:text-indigo-600 font-medium transition">
              People
            </Link>
            <Link href="/weatherweb" className="text-gray-600 hover:text-indigo-600 font-medium transition">
              Weather
            </Link>
          </nav>
          <button className="md:hidden text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-white py-20 md:py-28 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Explore Our <span className="text-indigo-600">Content</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover valuable insights, tutorials, and resources to help you build your future. From web development to personal growth, we've got you covered.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Getting Started with Next.js</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to set up a Next.js project from scratch and build modern web applications with ease.
                </p>
                <Link href="#" className="text-indigo-600 font-medium hover:text-indigo-700 transition">
                  Read More →
                </Link>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3">Mastering Tailwind CSS</h3>
                <p className="text-gray-600 mb-4">
                  Discover the power of utility-first CSS with Tailwind. Create beautiful, responsive designs quickly.
                </p>
                <Link href="#" className="text-indigo-600 font-medium hover:text-indigo-700 transition">
                  Read More →
                </Link>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold mb-3">Deploying Your App</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to deploy your Next.js applications to production with Vercel, Netlify, or other platforms.
                </p>
                <Link href="#" className="text-indigo-600 font-medium hover:text-indigo-700 transition">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">Content Categories</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg hover:shadow-md transition">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="font-semibold mb-2">Web Development</h3>
                <p className="text-sm text-gray-600">Frontend & Backend</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg hover:shadow-md transition">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold mb-2">Mobile Apps</h3>
                <p className="text-sm text-gray-600">iOS & Android</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg hover:shadow-md transition">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-semibold mb-2">AI & ML</h3>
                <p className="text-sm text-gray-600">Machine Learning</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg hover:shadow-md transition">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold mb-2">Data Science</h3>
                <p className="text-sm text-gray-600">Analytics & Insights</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 BuildYourFuture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}