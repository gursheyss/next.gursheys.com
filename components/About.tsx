import Age from "@/components/Age";

const ABOUT_CONTENT = {
  links: {
    sjsu: {
      text: "sjsu",
      url: "https://www.sjsu.edu/",
    },
    typescript: {
      text: "typescript",
      url: "https://www.typescriptlang.org/",
    },
    golang: {
      text: "golang",
      url: "https://golang.org/",
    },
    nextjs: {
      text: "nextjs",
      url: "https://www.go.dev/",
    },
    sveltekit: {
      text: "sveltekit",
      url: "https://kit.svelte.dev/",
    },
  },
  intro: "hi i'm gurshan",
  items: [
    "i'm a junior swe student at {sjsu}",
    "i mainly work in {typescript}, {golang}, {nextjs}, and {sveltekit}",
    "i'm also a youtube editor for a few channels",
    "please contact me for my resume if you're interested :)",
  ],
};

export default function About() {
  return (
    <div className="border-box cutout-title" data-title="🌐 about">
      <div className="content">
        <p>{ABOUT_CONTENT.intro}</p>

        <ul>
          » i&apos;m <Age /> years old
        </ul>

        <ul>
          » i&apos;m a junior software engineering student at{" "}
          <a
            className="text-pink hover:underline"
            href={ABOUT_CONTENT.links.sjsu.url}
            target="_blank"
          >
            {ABOUT_CONTENT.links.sjsu.text}
          </a>
        </ul>

        <ul>
          » i mainly work in{" "}
          <a
            className="text-pink hover:underline"
            href={ABOUT_CONTENT.links.typescript.url}
            target="_blank"
          >
            {ABOUT_CONTENT.links.typescript.text}
          </a>
          ,{" "}
          <a
            className="text-pink hover:underline"
            href={ABOUT_CONTENT.links.golang.url}
            target="_blank"
          >
            {ABOUT_CONTENT.links.golang.text}
          </a>
          ,{" "}
          <a
            className="text-pink hover:underline"
            href={ABOUT_CONTENT.links.nextjs.url}
            target="_blank"
          >
            {ABOUT_CONTENT.links.nextjs.text}
          </a>
          , and{" "}
          <a
            className="text-pink hover:underline"
            href={ABOUT_CONTENT.links.sveltekit.url}
            target="_blank"
          >
            {ABOUT_CONTENT.links.sveltekit.text}
          </a>
        </ul>

        <ul>{ABOUT_CONTENT.items[3]}</ul>
        <ul>{ABOUT_CONTENT.items[4]}</ul>
      </div>
    </div>
  );
}
