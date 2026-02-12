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
        {/* DESIGN-MATCHED HEADER */}
        <header className="w-full bg-white py-6 px-10 border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
            {/* Minimal Arch Icon Top Center */}
            <img src="/apple-touch-icon.png" alt="Icon" className="h-10 w-auto opacity-80" />
            
            {/* Brand Name Center */}
            <h1 className="text-2xl tracking-[0.4em] font-light uppercase text-brand-charcoal">
              Arches Hayatt
            </h1>

            {/* Navigation Centered */}
            <nav className="flex gap-10 mt-2">
              {['Projects', 'About Us', 'Services', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`/${item.toLowerCase().replace(' ', '')}`}
                  className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-brand-copper transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Search Icon Right (from your image) */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="border border-brand-concrete p-2 rounded-sm opacity-50">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  )
}

