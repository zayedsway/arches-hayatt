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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} bg-brand-sandstone text-brand-charcoal`}>
        <nav className="fixed w-full z-50 bg-brand-sandstone/90 backdrop-blur-md border-b border-brand-concrete px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Arches Hayatt Logo" className="h-10 w-auto" />
            <span className="text-xl tracking-[0.3em] font-light uppercase hidden sm:block">Arches Hayatt</span>
          </div>
          <div className="space-x-8 uppercase text-[10px] tracking-[0.2em] font-bold hidden md:flex">
            <a href="/" className="hover:text-brand-copper transition-colors">Home</a>
            <a href="/about" className="hover:text-brand-copper transition-colors">Philosophy</a>
            <a href="/contact" className="hover:text-brand-copper transition-colors border border-brand-charcoal px-4 py-2">Inquire</a>
          </div>
        </nav>
        {children}
        <footer className="bg-brand-charcoal text-brand-sandstone py-16 px-6 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto mb-4 mx-auto md:mx-0 brightness-0 invert" />
              <p className="text-xs tracking-widest uppercase opacity-60">Arches Hayatt © 2026</p>
            </div>
            <p className="font-serif italic text-xl opacity-80 text-center">"Building the horizon of your life."</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

