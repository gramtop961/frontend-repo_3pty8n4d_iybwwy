import React from 'react'

const trips = [
  {
    title: 'Everest Base Camp Trek',
    level: 'Intermediate',
    duration: '14 days',
    image: 'https://images.unsplash.com/photo-1697746149225-63a33bcb2ea4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFdmVyZXN0JTIwQmFzZSUyMENhbXAlMjBUcmVrfGVufDB8MHx8fDE3NjM3MzUyMjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    summary: 'Follow legendary trails through Sherpa villages to the foot of the world’s highest peak.',
    perks: ['Tea-house stays', 'Acclimatization days', 'Expert local guides'],
  },
  {
    title: 'Mont Blanc Summit Weekend',
    level: 'Advanced',
    duration: '3 days',
    image: 'https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?q=80&w=1600&auto=format&fit=crop',
    summary: 'Fast-track ascent via Gouter route with IFMGA-certified leaders and small rope teams.',
    perks: ['Glacier travel', 'Summit push', 'All technical gear included'],
  },
  {
    title: 'Patagonia W-Trek',
    level: 'Beginner friendly',
    duration: '5 days',
    image: 'https://images.unsplash.com/photo-1549888834-3ec93abae044?q=80&w=1600&auto=format&fit=crop',
    summary: 'Wind-sculpted granite towers, turquoise lakes, and wild pampas vistas in Torres del Paine.',
    perks: ['Camp supported', 'All permits', 'Iconic viewpoints'],
  },
]

const Packages = () => {
  return (
    <section id="packages" className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Featured Trekking Packages</h2>
          <p className="mt-2 text-slate-300">Handpicked routes led by experienced guides with a focus on safety, comfort, and unforgettable mountain moments.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <article key={trip.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={trip.image} alt={trip.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{trip.title}</h3>
                  <span className="text-xs text-emerald-300/80">{trip.duration}</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{trip.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {trip.perks.map((perk) => (
                    <li key={perk} className="text-xs text-emerald-200/90 bg-emerald-500/10 ring-1 ring-emerald-500/20 px-2 py-1 rounded-md">{perk}</li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Level: {trip.level}</span>
                  <a href="#contact" className="text-sm font-medium text-emerald-400 hover:text-emerald-300">Request details →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
