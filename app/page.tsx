import About from '@/components/About'
import Links from '@/components/Links'
import Work from '@/components/Work'
import Projects from '@/components/Projects'
import Music from '@/components/Music'

export default function Home() {
  return (
    <main className="relative z-aboveVignette mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-2 pt-4 font-mono sm:pt-0 lg:flex-row lg:px-0">
      <div className="w-full lg:w-2/3">
        <About />
        <Work />
        <Projects />
      </div>
      <div className="w-full lg:w-1/3">
        <Links />
        <Music />
      </div>
    </main>
  )
}
