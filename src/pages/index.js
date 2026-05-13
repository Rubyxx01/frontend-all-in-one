"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex flex-col">
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">BuildYourFuture</h1>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-indigo-600 font-bold">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-indigo-600 font-medium transition">About</Link>
            <Link href="/content" className="text-gray-600 hover:text-indigo-600 font-medium transition">Content</Link>
            <Link href="/contact" className="text-gray-600 hover:text-indigo-600 font-medium transition">Contact</Link>
            <Link href="/people" className="text-gray-600 hover:text-indigo-600 font-medium transition">People</Link>
            <Link href="/weatherweb" className="text-gray-600 hover:text-indigo-600 font-medium transition">Weather</Link>
          </nav>
          <button className="md:hidden text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            Welcome to BuildYourFuture
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Explore our platform and discover amazing content, connect with people, and stay updated with the weather.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/about">
              <button className="w-full px-8 py-6 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <div className="text-2xl mb-2">📖</div>
                About Us
              </button>
            </Link>
            <Link href="/content">
              <button className="w-full px-8 py-6 bg-cyan-600 text-white font-semibold rounded-xl hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <div className="text-2xl mb-2">📚</div>
                Content
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full px-8 py-6 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <div className="text-2xl mb-2">📞</div>
                Contact
              </button>
            </Link>
            <Link href="/people">
              <button className="w-full px-8 py-6 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <div className="text-2xl mb-2">👥</div>
                People
              </button>
            </Link>
            <Link href="/weatherweb">
              <button className="w-full px-8 py-6 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <div className="text-2xl mb-2">🌤️</div>
                Weather
              </button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 BuildYourFuture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}