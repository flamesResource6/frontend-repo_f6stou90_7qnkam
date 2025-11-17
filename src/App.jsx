import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Showcase />
        <footer className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-gray-600">
              <div>
                <h4 className="text-gray-900 font-semibold">Furnish</h4>
                <p className="mt-2">Contemporary furniture that blends craftsmanship with comfort.</p>
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">Help</h4>
                <ul className="mt-2 space-y-1">
                  <li><a href="#" className="hover:text-gray-900">Shipping & returns</a></li>
                  <li><a href="#" className="hover:text-gray-900">Warranty</a></li>
                  <li><a href="#" className="hover:text-gray-900">Care guide</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">Company</h4>
                <ul className="mt-2 space-y-1">
                  <li><a href="#" className="hover:text-gray-900">About</a></li>
                  <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                  <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between text-xs text-gray-500">
              <p>© {new Date().getFullYear()} Furnish. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-gray-700">Privacy</a>
                <a href="#" className="hover:text-gray-700">Terms</a>
                <a href="#" className="hover:text-gray-700">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
