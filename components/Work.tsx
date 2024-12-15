const WORK_CONTENT = {
  links: {
    fInc: {
      text: 'f.inc',
      url: 'https://f.inc'
    },
    clipStudio: {
      text: 'clip.studio',
      url: 'https://clip.studio/'
    },
    sce: {
      text: 'sce',
      url: 'https://sce.sjsu.edu/'
    },
    // mobiusEngine: {
    //   text: 'mobius engine',
    //   url: 'https://search.mobiusengine.ai'
    // }
  },
  items: [
    "i'm currently working on a studio project at {fInc} for seo/ads",
    "i'm also working on an ai video generation platform {clipStudio}",
    "i'm a dev officer and mentor at {sce}, a software engineering club at sjsu",
    // 'i also worked on {mobiusEngine}, a job search engine'
  ]
}

const Work = () => {
  return (
    <div className="border-box cutout-title" data-title="👨‍💻 work">
      <div className="content">
        <ul>
          <li>
            » i&apos;m working on a studio project at{' '}
            <a
              href={WORK_CONTENT.links.fInc.url}
              className="text-pink hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {WORK_CONTENT.links.fInc.text}
            </a>
          </li>
          <li>
            » i&apos;m also working on an ai video generation platform called{' '}
            <a
              href={WORK_CONTENT.links.clipStudio.url}
              className="text-pink hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {WORK_CONTENT.links.clipStudio.text}
            </a>
          </li>
          <li>
            » i&apos;m a dev officer and mentor at{' '}
            <a
              href={WORK_CONTENT.links.sce.url}
              className="text-pink hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {WORK_CONTENT.links.sce.text}
            </a>
            , a software engineering club at sjsu
          </li>
          {/* <li>
            » i also worked on{' '}
            <a
              href={WORK_CONTENT.links.mobiusEngine.url}
              className="text-pink hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {WORK_CONTENT.links.mobiusEngine.text}
            </a>
            , a job search engine
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Work
