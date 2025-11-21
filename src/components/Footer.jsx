import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500 ring-1 ring-white/20" aria-hidden="true"></span>
            <span className="text-white font-semibold">SkyTrail Adventures</span>
          </div>
          <p className="mt-4 text-slate-400 text-sm">Premium trekking, mountaineering, and skills training led by internationally certified guides.</p>
        </div>

        <div>
          <h3 className="text-white font-medium">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Email: hello@skytrailadventures.com</li>
            <li>Phone: +1 (406) 555-0148</li>
            <li>Base: Bozeman, MT • Chamonix, FR • Kathmandu, NP</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium">Follow</h3>
          <div className="mt-3 flex gap-4">
            <a href="#" aria-label="Instagram" className="text-slate-300 hover:text-white transition-colors">Instagram</a>
            <a href="#" aria-label="YouTube" className="text-slate-300 hover:text-white transition-colors">YouTube</a>
            <a href="#" aria-label="TikTok" className="text-slate-300 hover:text-white transition-colors">TikTok</a>
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-slate-500 border-t border-white/10">© {new Date().getFullYear()} SkyTrail Adventures. All rights reserved.</div>
    </footer>
  )
}

export default Footer
