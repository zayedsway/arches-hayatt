/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          copper: '#B87333',
          charcoal: '#24272B',
          sandstone: '#F9F7F2',
          concrete: '#E5E0D8',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)'],
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}

