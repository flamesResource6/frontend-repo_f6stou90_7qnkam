import Spline from '@splinetool/react-spline'
import { ArrowRight, Shield, Truck, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              Modern living, elevated
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-gray-900">
              Luxury furniture for contemporary spaces
            </h1>
            <p className="mt-4 text-gray-700 text-base sm:text-lg">
              Discover curated pieces that blend craftsmanship with comfort. Create your dream living room, bedroom, and workspace with timeless design.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#collections" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-black transition">
                Shop collections
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#story" className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white">
                Our story
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur rounded-lg px-3 py-2">
                <Shield className="h-4 w-4 text-blue-600" />
                5-year warranty
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur rounded-lg px-3 py-2">
                <Truck className="h-4 w-4 text-blue-600" />
                Free delivery
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur rounded-lg px-3 py-2">
                <Sparkles className="h-4 w-4 text-blue-600" />
                Sustainable materials
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
