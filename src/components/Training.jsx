import React from 'react'

const programs = [
  {
    title: 'Alpine Skills 101',
    level: 'Beginner',
    duration: '2 days',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1600&auto=format&fit=crop',
    points: ['Crampon and ice axe basics', 'Rope team movement', 'Crevasse awareness']
  },
  {
    title: 'Glacier Travel & Rescue',
    level: 'Intermediate',
    duration: '2 days',
    image: 'https://images.unsplash.com/photo-1583908251017-6731e7ffd3ec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHbGFjaWVyJTIwVHJhdmVsJTIwJTI2JTIwUmVzY3VlfGVufDB8MHx8fDE3NjM3MzUyMjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    points: ['Snow anchors', 'Haul systems', 'Self-rescue practice']
  },
  {
    title: 'Winter Mountaineering',
    level: 'Advanced',
    duration: '3 days',
    image: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop',
    points: ['Avalanche awareness', 'Mixed terrain movement', 'Cold-weather systems']
  },
]

const Training = () => {
  return (
    <section id="training" className="bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Mountaineering Training</h2>
          <p className="mt-2 text-slate-300">Build technical confidence with structured, guide-led programs designed for real mountain objectives.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <span className="text-xs text-emerald-300/80">{p.duration}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {p.points.map((point) => (
                    <li key={point} className="text-sm text-slate-300">• {point}</li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Level: {p.level}</span>
                  <a href="#contact" className="text-sm font-medium text-emerald-400 hover:text-emerald-300">Check availability →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Training
