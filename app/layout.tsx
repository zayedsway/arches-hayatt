import './globals.css'
import { Inter, Cormorant_Garamond } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} ${cormorant.variable} h-full flex flex-col bg-white`}>
        <header className="w-full pt-10 pb-6 flex flex-col items-center border-b border-gray-50">
          <div className="flex flex-col items-center max-w-7xl w-full px-10">
            <img src="/apple-touch-icon.png" alt="Logo" className="h-10 w-auto mb-4" />
            <nav className="flex gap-10 mb-6">
              {['Projects', 'About Us', 'Services', 'Contact'].map((link) => (
                <a key={link} href="#" className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400 hover:text-black transition-all">
                  {link}
                </a>
              ))}
            </nav>
            <h1 className="text-2xl tracking-[0.5em] font-light uppercase text-black">
              Arches Hayatt
            </h1>
          </div>
        </header>
        <main className="flex-1 flex flex-col overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}

