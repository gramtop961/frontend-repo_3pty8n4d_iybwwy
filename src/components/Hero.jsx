import React from 'react'

const Hero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2400&auto=format&fit=crop"
          alt="Snow-capped mountain range at sunrise"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-36">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-inset ring-white/20">
            Premium expeditions • IFMGA guides • Small groups
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            SkyTrail Adventures
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200">
            Explore wild horizons with seasoned guides, modern mountaineering training, and curated treks across the Himalaya, Alps, Andes, and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#packages" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-emerald-400 transition-colors">
              Explore Trips
            </a>
            <a href="#training" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white px-5 py-3 text-sm font-semibold ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-colors">
              Training Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
