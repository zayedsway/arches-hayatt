'use client'
import { motion } from 'framer-motion';
import { MoveDown } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="z-10 text-center max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 flex justify-center"
          >
            <img src="/apple-touch-icon.png" alt="Icon" className="w-24 h-24 rounded-2xl shadow-xl" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-serif mb-6"
          >
            Structure <span className="italic font-light">meets</span> Soul
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-brand-copper uppercase tracking-[0.4em] text-xs font-bold mb-12"
          >
            Arches Hayatt Architecture
          </motion.p>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <MoveDown className="mx-auto text-brand-charcoal opacity-30" size={32} />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-charcoal text-brand-sandstone px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl mb-6">Timeless by Design</h2>
          <p className="text-brand-concrete opacity-80 leading-relaxed mb-8">
            From the copper accents of our studio to the sprawling arches of our residential villas, 
            every detail is crafted to elevate the human experience.
          </p>
          <a href="/contact" className="inline-block bg-brand-copper text-white px-8 py-4 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-opacity-90 transition-all">
            Start a Conversation
          </a>
        </div>
      </section>
    </main>
  );
}

