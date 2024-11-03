const PROJECTS_CONTENT = {
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
        "is a simulated stock market based on twitch streamer jasontheween's community"
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
        'is a web app that lets nurses access and interact with patient data'
      ]
    },
    {
      title: '📂 zipp',
      tech: 'sveltekit, golang, mysql, s3',
      link: {
        text: 'zipp',
        url: '/zipp'
      },
      description: ['is an encrypted file sharing service']
    },
    {
      title: '🎵 austere',
      tech: 'golang, docker',
      link: {
        text: 'austere',
        url: 'https://github.com/gursheyss/austere'
      },
      description: ['is a web server i use to save and tag unre']
    }
  ]
}

const Projects = () => {
  return (
    <div className="border-box cutout-title" data-title="🛠️ projects">
      <div className="content">
        {PROJECTS_CONTENT.intro}
        {PROJECTS_CONTENT.projects.map((project) => (
          <div
            key={project.title}
            className="border-box cutout-title right-title"
            data-title={project.title}
            data-right-title={project.tech}
          >
            <div className="content">
              <ul>
                {project.description.map((desc, index) => (
                  <li key={index}>
                    »{' '}
                    <a
                      href={project.link.url}
                      target="_blank"
                      className="text-pink hover:underline"
                    >
                      {project.link.text}
                    </a>{' '}
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
