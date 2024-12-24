import About from '@/components/About'
import Links from '@/components/Links'
import Work from '@/components/Work'
import Projects from '@/components/Projects'
import Music from '@/components/Music'

export default function Home() {
  return (
    <main className="flex-1 relative z-aboveVignette mx-auto flex max-w-7xl flex-col justify-center font-mono px-2 lg:flex-row lg:px-0">
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
