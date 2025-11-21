import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Packages from './components/Packages'
import Training from './components/Training'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Training />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
