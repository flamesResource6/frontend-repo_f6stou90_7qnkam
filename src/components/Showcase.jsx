import { Star, ArrowRight } from 'lucide-react'

const products = [
  {
    name: 'Arcadia Lounge Sofa',
    price: '$1,299',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1974&auto=format&fit=crop',
    tag: 'Bestseller'
  },
  {
    name: 'Sable Oak Dining Set',
    price: '$2,190',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1974&auto=format&fit=crop',
    tag: 'New arrival'
  },
  {
    name: 'Nimbus Leather Chair',
    price: '$690',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop',
    tag: 'Editor’s pick'
  }
]

export default function Showcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="showcase">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Featured pieces</h2>
            <p className="text-gray-600 mt-2">Top picks crafted to elevate your home.</p>
          </div>
          <a href="#" className="hidden sm:inline text-sm font-semibold text-blue-600 hover:text-blue-700">Browse all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-full w-max">{p.tag}</div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-gray-900 font-semibold">{p.price}</div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-400" />
                    <span className="text-sm text-gray-700">{p.rating}</span>
                  </div>
                </div>
                <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-700">
                  Add to cart
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
