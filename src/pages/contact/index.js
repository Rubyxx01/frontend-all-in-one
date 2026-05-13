export default function Contact() {
  return (
    <div className="bg-gray-50 text-gray-900 antialiased font-sans flex flex-col min-h-screen">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="/"
            className="text-2xl font-bold text-indigo-600 hover:opacity-80 transition"
          >
            BuildYourFuture
          </a>
          <nav className="hidden md:flex space-x-6">
            <a
              href="/"
              className="text-gray-600 hover:text-indigo-600 font-medium transition"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-600 hover:text-indigo-600 font-medium transition"
            >
              About
            </a>
            <a href="/contact" className="text-indigo-600 font-bold">
              Contact
            </a>
          </nav>
          <button className="md:hidden text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow py-20">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Contact Us
            </h1>
            <p className="text-gray-600">
              Have a question? Fill out the form and send to us
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="username"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="user@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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
                className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-6 border-t border-gray-200 text-center text-sm text-gray-500"></footer>
    </div>
  );
}
