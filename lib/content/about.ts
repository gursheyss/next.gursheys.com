import type { AboutContent } from './types'

export const aboutContent: AboutContent = {
  links: {
    sjsu: {
      text: 'sjsu',
      url: 'https://www.sjsu.edu/'
    },
    typescript: {
      text: 'typescript',
      url: 'https://www.typescriptlang.org/'
    },
    golang: {
      text: 'golang',
      url: 'https://golang.org/'
    },
    nextjs: {
      text: 'nextjs',
      url: 'https://www.go.dev/'
    }
  },
  intro: "hi i'm gurshan",
  items: [
    "i'm a junior swe student at {sjsu}",
    'i mainly work in {typescript}, {golang}, and {nextjs}',
    "i'm also a youtube editor for a few channels",
    "please contact me for my resume if you're interested :)"
  ]
} 