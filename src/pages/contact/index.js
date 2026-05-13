"use client";

import Link from 'next/link';

export default function Contact() {
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
            <Link href="/about" className="text-gray-600 hover:text-indigo-600 font-medium transition">
              About
            </Link>
            <Link href="/content" className="text-gray-600 hover:text-indigo-600 font-medium transition">
              Content
            </Link>
            <Link href="/contact" className="text-indigo-600 font-bold">
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

      <main className="flex-grow py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Contact <span className="text-indigo-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a question or need assistance? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    required
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition duration-200 shadow-sm"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">📧</div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">hello@buildyourfuture.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">📞</div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">123 Future Street<br />Innovation City, IC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 p-8 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Fast response time
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Expert support team
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> 24/7 availability
                  </li>
                </ul>
              </div>
            </div>
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
