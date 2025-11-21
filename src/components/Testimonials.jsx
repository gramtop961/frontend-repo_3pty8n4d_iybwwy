import React from 'react'

const testimonials = [
  {
    name: 'Maya R.',
    quote: 'From glaciers at dawn to tea with Sherpa families, it was the most thoughtful expedition I\'ve ever joined. Safety-first and truly inspiring.',
    trip: 'Everest Base Camp',
  },
  {
    name: 'Jonah P.',
    quote: 'Our guide coached ice technique with patience and precision. I came home a stronger, safer climber.',
    trip: 'Glacier Travel & Rescue',
  },
  {
    name: 'Elena K.',
    quote: 'Pristine camps, flexible pacing, and jaw-dropping views every day. SkyTrail delivers premium from start to finish.',
    trip: 'Patagonia W-Trek',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">What guests say</h2>
          <p className="mt-2 text-slate-300">Stories from recent expeditions and training courses.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <blockquote className="text-slate-200">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">— {t.name}, {t.trip}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
