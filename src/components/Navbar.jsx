import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#packages', label: 'Trekking Packages' },
    { href: '#training', label: 'Mountaineering Training' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between" aria-label="Primary">
        <a href="#top" className="flex items-center gap-3">
          <span className="inline-block h-9 w-9 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500 ring-1 ring-white/20 shadow-md" aria-hidden="true"></span>
          <div className="leading-tight">
            <span className="block text-white font-semibold tracking-wide">SkyTrail</span>
            <span className="block text-emerald-300/80 text-xs">Adventures</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-200 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#packages" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 text-white px-4 py-2 text-sm font-medium shadow hover:bg-emerald-400 transition-colors">
            Plan a Trip
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-200 hover:text-white p-2" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            {open ? (
              <path fillRule="evenodd" d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 1 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 5.25a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-200 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#packages" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg bg-emerald-500 text-white px-4 py-2 text-sm font-medium shadow hover:bg-emerald-400">
              Plan a Trip
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
