import { workContent } from '@/lib/content/work'
import type { ReactNode } from 'react'

const Work = () => {
  return (
    <div className="border-box cutout-title" data-title="👨‍💻 work">
      <div className="content">
        <ul>
          {workContent.items.map((item) => {
            const itemWithLinks = Object.entries(
              workContent.links
            ).reduce<ReactNode>((text, [key, link]) => {
              const placeholder = `{${key}}`
              if (typeof text === 'string' && text.includes(placeholder)) {
                const parts = text.split(placeholder)
                return (
                  <>
                    {parts[0]}
                    <a
                      href={link.url}
                      className="text-pink hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.text}
                    </a>
                    {parts[1]}
                  </>
                )
              }
              return text
            }, item)

            return <li key={item}>» {itemWithLinks}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Work
