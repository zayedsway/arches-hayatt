'use client'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row h-full min-h-[calc(100vh-180px)]">
      {/* Left Branding Panel */}
      <div className="w-full md:w-[45%] bg-brand-charcoal flex flex-col justify-center px-12 md:px-20 py-16">
        <img src="/apple-touch-icon.png" alt="Arch" className="w-20 h-auto mb-10 opacity-40" />
        <h2 className="text-white text-5xl font-serif tracking-widest uppercase mb-4">
          Arches Hayatt
        </h2>
        <p className="text-gray-400 text-[10px] tracking-widest uppercase mb-8 max-w-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </p>
        <button className="bg-brand-copper text-white px-8 py-3 text-[10px] tracking-widest font-bold uppercase w-fit">
          View Our Portfolio
        </button>
      </div>

      {/* Right Image Panel */}
      <div className="w-full md:w-[55%] relative">
        <img 
          src="https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&q=80" 
          alt="Architecture" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-brand-copper rounded-full flex items-center justify-center text-white text-2xl cursor-pointer">
          ✕
        </div>
      </div>

      {/* Beige Bottom Bar */}
      <div className="absolute bottom-0 w-full bg-brand-sandstone py-6 flex justify-center gap-12 border-t border-black/5">
        {['Instagram', 'LinkedIn', 'Studio'].map((social) => (
          <span key={social} className="text-[10px] tracking-widest font-bold text-gray-600 uppercase cursor-pointer">
            {social}
          </span>
        ))}
      </div>
    </div>
  )
}
