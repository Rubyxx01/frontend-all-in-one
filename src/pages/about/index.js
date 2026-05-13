export default function About() {
  return (
    <div className="bg-gray-50 text-gray-900 antialiased font-sans">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-indigo-600 hover:opacity-80 transition">
            BuildYourFuture
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-indigo-600 font-medium transition">
              Home
            </a>
            <a href="/about" className="text-indigo-600 font-bold">
              About
            </a>
            <a href="/content" className="text-gray-600 hover:text-indigo-600 font-medium transition">
              Content
            </a>
            <a href="/contact" className="text-gray-600 hover:text-indigo-600 font-medium transition">
              Contact
            </a>
          </nav>
          <button className="md:hidden text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        <section className="bg-white py-20 md:py-28 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              This is our  <span className="text-indigo-600">about page</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow-sm">
                Join 
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui rati
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-indigo-100 rounded-lg transform rotate-2 -z-10"></div>
              </div>
            </div>
          </div>
        </section>

      
      </main>

      <footer className="bg-gray-100 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 BuildYourFuture.</p>
        </div>
      </footer>
    </div>
  );
}
