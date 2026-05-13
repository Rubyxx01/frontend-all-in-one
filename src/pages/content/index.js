export default function Content() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
    
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-indigo-600">
            BuildYourFuture
          </a>
          <nav className="space-x-6">
            <a href="/about" className="hover:text-indigo-600">About</a>
            <a href="/content" className="text-indigo-600 font-semibold">Content</a>
            <a href="/contact" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Explore Our <span className="text-indigo-600">Content</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

        </p>
      </main>

      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8">
        
        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Getting Started with Next.js</h3>
          <p className="text-gray-600 mb-4">
            Learn how to set up a Next.js 
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Mastering Tailwind CSS</h3>
          <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Deploying Your App</h3>
          <p className="text-gray-600 mb-4">
            Learn how to deploy your Next.js.
          </p>
        </div>

      </section>

      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © 2026 BuildYourFuture.
      </footer>
    </div>
  );
}