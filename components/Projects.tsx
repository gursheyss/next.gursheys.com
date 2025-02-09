import { projectsContent } from '@/lib/content/projects'

const Projects = () => {
  return (
    <div className="border-box cutout-title" data-title="🛠️ projects">
      <div className="content">
        {projectsContent.intro}
        {projectsContent.projects.map((project) => (
          <div
            key={project.title}
            className="border-box cutout-title right-title"
            data-title={project.title}
            data-right-title={project.tech}
          >
            <div className="content">
              <ul>
                {project.description.map((desc) => (
                  <li key={`${project.title}-${desc}`}>
                    »{' '}
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noreferrer"
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
