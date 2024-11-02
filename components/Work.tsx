const Work = () => {
  return (
    <div className="border-box cutout-title" data-title="👨‍💻 work">
      <div className="content">
        <ul>
          <li>
            » currently i&apos;m working on a video generation app called{' '}
            <a
              href="https://clip.studio/"
              className="text-pink hover:underline"
              target="_blank"
            >
              clip studio
            </a>
          </li>
          <li>
            » i&apos;m also an officer at{' '}
            <a
              href="https://sce.sjsu.edu/"
              className="text-pink hover:underline"
              target="_blank"
            >
              sce
            </a>
            , a software engineering club at sjsu, mentoring members during our
            summer internship
          </li>
          <li>
            » i also worked on{' '}
            <a
              href="https://search.mobiusengine.ai"
              className="text-pink hover:underline"
              target="_blank"
            >
              mobius engine
            </a>
            , a job search engine
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Work
