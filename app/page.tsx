'use client'

import { motion } from 'framer-motion';
import { ArrowRight, MoveDown } from 'lucide-react';

export default function HomePage() {
  const projects = [
    { title: "The Obsidian Villa", category: "Residential", size: "col-span-2 row-span-2" },
    { title: "Horizon Pavilion", category: "Public Space", size: "col-span-1 row-span-1" },
    { title: "Copper Arch Studio", category: "Interior", size: "col-span-1 row-span-1" },
    { title: "Eco-Lichen Community", category: "Sustainable", size: "col-span-2 row-span-1" },
  ];

  return (
    <main>
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          {/* Background Detail: A subtle architectural wireframe feel */}
          <div className="absolute inset-0 bg-[#E5E0D8]/30 mix-blend-multiply" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[1px] border-brand-copper/20 w-[120%] h-[120%] rounded-t-full" />
        </div>

        <div className="z-10 text-center max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.5em] text-sm mb-6 text-brand-copper font-bold"
          >
            Architecture for Life
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif leading-none mb-8"
          >
            Arches <br /> <span className="italic font-light">Hayatt</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center"
          >
            <p className="max-w-md text-gray-600 mb-10 text-lg">
              We design spaces that breathe, structures that endure, and environments where life flourishes.
            </p>
            <MoveDown className="animate-bounce text-brand-copper" size={32} />
          </motion.div>
        </div>
      </section>

      {/* --- PROJECT GRID --- */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-brand-copper font-bold mb-2">Selected Works</h2>
            <p className="text-4xl font-serif font-light text-brand-charcoal">The Living Portfolio</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest font-semibold hover:text-brand-copper transition-colors">
            View All <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 0.98 }}
              className={`${project.size} group relative bg-brand-concrete overflow-hidden cursor-pointer`}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-brand-charcoal opacity-10 group-hover:opacity-30 transition-opacity" />
              
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs uppercase tracking-widest text-brand-copper mb-2 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                  {project.category}
                </p>
                <h3 className="text-2xl font-serif text-brand-charcoal group-hover:text-brand-charcoal transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PHILOSOPHY TEASER --- */}
      <section className="bg-brand-charcoal py-32 px-6">
        <div className="max-w-4xl mx-auto text-center text-brand-sandstone">
          <h2 className="text-brand-copper uppercase tracking-widest text-sm mb-8 font-bold">Our Philosophy</h2>
          <p className="text-3xl md:text-5xl font-serif leading-relaxed mb-12">
            "A building is not just a shield from the elements; it is a framework for the human experience."
          </p>
          <a href="/about" className="inline-block border-b-2 border-brand-copper pb-2 uppercase tracking-widest text-xs font-bold hover:text-brand-copper transition-colors">
            The Hayatt Way
          </a>
        </div>
      </section>
    </main>
  );
              }
                   
