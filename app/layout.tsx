import './globals.css'
import { Inter, Cormorant_Garamond } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600'],
  variable: '--font-cormorant' 
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans bg-white`}>
        {/* CENTERED MINIMAL HEADER */}
        <header className="w-full bg-white pt-8 pb-6 px-10 z-50">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            {/* The Arch Icon */}
            <img src="/apple-touch-icon.png" alt="Icon" className="h-8 w-auto mb-2 opacity-80" />
            
            {/* Navigation and Title Container */}
            <div className="flex flex-col items-center w-full relative">
              <nav className="flex gap-8 mb-4">
                <a href="/projects" className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-brand-copper transition-colors">Projects</a>
                <a href="/about" className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-brand-copper transition-colors">About Us</a>
                <a href="/services" className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-brand-copper transition-colors">Services</a>
                <a href="/contact" className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-brand-copper transition-colors">Contact</a>
              </nav>
              
              <h1 className="text-2xl tracking-[0.5em] font-light uppercase text-brand-charcoal border-t border-gray-100 pt-4 w-full text-center">
                Arches Hayatt
              </h1>

              {/* Search Icon Box (Far Right) */}
              <div className="absolute right-0 bottom-0 border border-brand-concrete p-2 opacity-40 hidden md:block">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  )
}

