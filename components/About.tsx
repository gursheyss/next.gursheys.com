import Age from '@/components/Age'
import { aboutContent } from '@/lib/content/about'

export default function About() {
  return (
    <div className="border-box cutout-title" data-title="🌐 about">
      <div className="content">
        <p>{aboutContent.intro}</p>

        <ul>
          » i&apos;m <Age /> years old
        </ul>

        <ul>
          » i&apos;m a junior software engineering student at{' '}
          <a
            className="text-pink hover:underline"
            href={aboutContent.links.sjsu.url}
            target="_blank"
            rel="noreferrer"
          >
            {aboutContent.links.sjsu.text}
          </a>
        </ul>

        <ul>
          » i mainly work in{' '}
          <a
            className="text-pink hover:underline"
            href={aboutContent.links.typescript.url}
            target="_blank"
            rel="noreferrer"
          >
            {aboutContent.links.typescript.text}
          </a>
          ,{' '}
          <a
            className="text-pink hover:underline"
            href={aboutContent.links.golang.url}
            target="_blank"
            rel="noreferrer"
          >
            {aboutContent.links.golang.text}
          </a>
          , and{' '}
          <a
            className="text-pink hover:underline"
            href={aboutContent.links.nextjs.url}
            target="_blank"
            rel="noreferrer"
          >
            {aboutContent.links.nextjs.text}
          </a>
        </ul>

        <ul>{aboutContent.items[3]}</ul>
        <ul>{aboutContent.items[4]}</ul>
      </div>
    </div>
  )
}
