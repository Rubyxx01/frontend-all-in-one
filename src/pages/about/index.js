"use client";

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased font-sans flex flex-col">
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600 hover:opacity-80 transition">
            BuildYourFuture
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-indigo-600 font-medium transition">
              Home
            </Link>
            <Link href="/about" className="text-indigo-600 font-bold">
              About
            </Link>
            <Link href="/content" className="text-gray-600 hover:text-indigo-600 font-medium transition">
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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              About <span className="text-indigo-600">BuildYourFuture</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              We are dedicated to empowering individuals to build their future through innovative solutions, quality content, and meaningful connections. Our platform brings together the best resources to help you achieve your goals.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow-sm">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To provide a comprehensive platform that connects people, delivers valuable content, and offers real-time information to support personal and professional growth.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We believe in the power of community, knowledge sharing, and staying informed about the world around us.
                </p>
              </div>
              <div className="relative">
                <div className="bg-indigo-100 p-8 rounded-lg">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                  <p className="text-gray-600">Constantly evolving to meet your needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-12">What We Offer</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="text-xl font-semibold mb-2">Quality Content</h4>
                <p className="text-gray-600">Access to curated, valuable information and resources.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">👥</div>
                <h4 className="text-xl font-semibold mb-2">Community</h4>
                <p className="text-gray-600">Connect with like-minded individuals and build networks.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">🌤️</div>
                <h4 className="text-xl font-semibold mb-2">Real-time Info</h4>
                <p className="text-gray-600">Stay updated with weather and other timely information.</p>
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
