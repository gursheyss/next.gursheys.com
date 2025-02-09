import type { ProjectsContent } from './types'

export const projectsContent: ProjectsContent = {
  intro: "here's a couple of things i've worked on",
  projects: [
    {
      title: '📈 streamerstocks',
      tech: 'sveltekit, supabase, python',
      link: {
        text: 'streamerstocks',
        url: 'https://streamerstocks.org'
      },
      description: [
        "is a simulated stock market based on twitch streamer's community"
      ]
    },
    {
      title: '💊 meditag',
      tech: 'sveltekit, openai, supabase',
      link: {
        text: 'meditag',
        url: 'https://github.com/gursheyss/MediTag'
      },
      description: [
        'is a web app i made for irvinehacks 2024 that lets nurses access and interact with patient data'
      ]
    },
    {
      title: '📂 zipp',
      tech: 'sveltekit, golang, mysql, s3',
      link: {
        text: 'zipp',
        url: '/zipp'
      },
      description: [
        'is an encrypted file sharing service i made for my friends'
      ]
    },
    {
      title: '🎵 austere',
      tech: 'golang, docker',
      link: {
        text: 'austere',
        url: 'https://github.com/gursheyss/austere'
      },
      description: ['is a web server i use to save and tag music']
    }
  ]
} 