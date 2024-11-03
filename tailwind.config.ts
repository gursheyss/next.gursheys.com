import type { Config } from 'tailwindcss'
const vignetteZIndex = 10

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        pink: 'rgb(253, 207, 243)'
      },
      zIndex: {
        vignette: `${vignetteZIndex}`,
        aboveVignette: `${vignetteZIndex + 1}`
      },
      fontFamily: {
        sans: 'var(--font-geist-sans)',
        mono: 'var(--font-geist-mono)'
      }
    }
  },
  plugins: []
}
export default config
