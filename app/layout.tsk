import './globals.css'
import { Inter, Cormorant_Garamond } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600'],
  variable: '--font-cormorant' 
})

export const metadata = {
  title: 'Arches Hayatt | Architecture for Life',
  description: 'Boutique architectural firm specializing in timeless, living structures.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} bg-brand-sandstone text-brand-charcoal`}>
        <nav className="fixed w-full z-50 bg-brand-sandstone/80 backdrop-blur-md border-b border-brand-concrete px-6 py-4 flex justify-between items-center">
          <div className="text-xl tracking-[0.3em] font-light uppercase">Arches Hayatt</div>
          <div className="space-x-8 uppercase text-xs tracking-widest font-semibold hidden md:block">
            <a href="/" className="hover:text-brand-copper transition-colors">Home</a>
            <a href="/projects" className="hover:text-brand-copper transition-colors">Projects</a>
            <a href="/about" className="hover:text-brand-copper transition-colors">About</a>
            <a href="/contact" className="hover:text-brand-copper transition-colors border border-brand-charcoal px-4 py-2">Inquire</a>
          </div>
        </nav>
        {children}
        <footer className="bg-brand-charcoal text-brand-sandstone p-12 mt-20">
          <div className="max-w-7xl mx-auto text-center">
            <p className="tracking-widest uppercase text-sm mb-4">Arches Hayatt © 2026</p>
            <p className="text-gray-400 font-serif italic italic">Building the horizon of your life.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

