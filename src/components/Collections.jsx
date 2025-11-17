import { Sofa, Armchair, Lamp, BedDouble, Table2 } from 'lucide-react'

const categories = [
  {
    icon: Sofa,
    title: 'Living Room',
    desc: 'Sofas, sectionals, coffee tables and more.',
    color: 'from-blue-50 to-indigo-50',
  },
  {
    icon: BedDouble,
    title: 'Bedroom',
    desc: 'Beds, nightstands, dressers and linens.',
    color: 'from-rose-50 to-pink-50',
  },
  {
    icon: Table2,
    title: 'Dining',
    desc: 'Dining tables, chairs and bar stools.',
    color: 'from-emerald-50 to-teal-50',
  },
  {
    icon: Armchair,
    title: 'Office',
    desc: 'Desks, ergonomic chairs and storage.',
    color: 'from-amber-50 to-yellow-50',
  },
  {
    icon: Lamp,
    title: 'Lighting',
    desc: 'Floor lamps, pendants and sconces.',
    color: 'from-purple-50 to-violet-50',
  },
]

export default function Collections() {
  return (
    <section id="collections" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Shop by collection</h2>
            <p className="text-gray-600 mt-2">Explore curated categories for every room.</p>
          </div>
          <a href="#" className="hidden sm:inline text-sm font-semibold text-blue-600 hover:text-blue-700">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className={`group rounded-2xl bg-gradient-to-br ${color} p-6 border border-gray-100 hover:shadow-lg transition`}> 
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                  <p className="text-gray-600 mt-1 text-sm">{desc}</p>
                </div>
                <div className="shrink-0 rounded-xl bg-white p-3 shadow-sm">
                  <Icon className="h-6 w-6 text-gray-800" />
                </div>
              </div>
              <div className="mt-6">
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all">
                  Shop now
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
