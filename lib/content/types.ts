export interface Link {
  text: string
  url: string
}

export interface Links {
  [key: string]: Link
}

export interface AboutContent {
  links: Links
  intro: string
  items: string[]
}

export interface WorkContent {
  links: Links
  items: string[]
}

export interface Project {
  title: string
  tech: string
  link: Link
  description: string[]
}

export interface ProjectsContent {
  intro: string
  projects: Project[]
} 