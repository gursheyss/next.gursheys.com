import Age from "@/components/Age";

export default function About() {
  return (
    <div className="border-box cutout-title" data-title="🌐 about">
      <div className="content">
        <p>hi i&apos;m gurshan</p>

        <ul>
          » i&apos;m <Age /> years old
        </ul>

        <ul>
          » i&apos;m a junior software engineering student at{" "}
          <a
            className="text-pink hover:underline"
            href="https://www.sjsu.edu/"
            target="_blank"
          >
            sjsu
          </a>
        </ul>

        <ul>
          » i mainly work in{" "}
          <a
            className="text-pink hover:underline"
            href="https://www.typescriptlang.org/"
            target="_blank"
          >
            typescript
          </a>
          ,{" "}
          <a
            className="text-pink hover:underline"
            href="https://golang.org/"
            target="_blank"
          >
            golang
          </a>
          ,{" "}
          <a
            className="text-pink hover:underline"
            href="https://www.go.dev/"
            target="_blank"
          >
            nextjs
          </a>
          , and{" "}
          <a
            className="text-pink hover:underline"
            href="https://kit.svelte.dev/"
            target="_blank"
          >
            sveltekit
          </a>
        </ul>

        <ul>» i&apos;m also a youtube editor for a few channels</ul>

        <ul>please contact me for my resume if you&apos;re interested :)</ul>
      </div>
    </div>
  );
}
