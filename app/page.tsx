import About from "@/components/About";
import Links from "@/components/Links";
import Work from "@/components/Work";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen font-mono mx-auto flex max-w-7xl flex-col justify-center px-2 pt-4 sm:pt-0 lg:flex-row lg:px-0 z-aboveVignette">
      <div className="w-full lg:w-2/3">
        <About />
        <Work />
        <Projects />
      </div>
      <div className="w-full lg:w-1/3">
        <Links />
      </div>
    </main>
  );
}
