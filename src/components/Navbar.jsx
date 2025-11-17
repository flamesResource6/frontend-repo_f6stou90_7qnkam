import { useState } from 'react'
import { Menu, ShoppingBag, Search, Heart, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              aria-label="Open menu"
              className="lg:hidden p-2 rounded-md hover:bg-white/60"
              onClick={() => setOpen(!open)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-2 font-semibold text-gray-900 text-lg">
              <ShoppingBag className="h-6 w-6 text-blue-600" />
              Furnish
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#collections" className="hover:text-gray-900">Collections</a>
            <a href="#living" className="hover:text-gray-900">Living</a>
            <a href="#bedroom" className="hover:text-gray-900">Bedroom</a>
            <a href="#office" className="hover:text-gray-900">Office</a>
            <a href="#outdoor" className="hover:text-gray-900">Outdoor</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search furniture, brands..."
                className="w-56 rounded-full border border-gray-200 bg-white/80 pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <button className="p-2 rounded-md hover:bg-white/60" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-md hover:bg-white/60" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <div className="grid gap-2 text-sm font-medium text-gray-700">
              <a href="#collections" className="rounded-md px-3 py-2 hover:bg-white/60">Collections</a>
              <a href="#living" className="rounded-md px-3 py-2 hover:bg-white/60">Living</a>
              <a href="#bedroom" className="rounded-md px-3 py-2 hover:bg-white/60">Bedroom</a>
              <a href="#office" className="rounded-md px-3 py-2 hover:bg-white/60">Office</a>
              <a href="#outdoor" className="rounded-md px-3 py-2 hover:bg-white/60">Outdoor</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
