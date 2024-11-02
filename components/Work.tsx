const WORK_CONTENT = {
  links: {
    clipStudio: {
      text: "clip studio",
      url: "https://clip.studio/",
    },
    sce: {
      text: "sce",
      url: "https://sce.sjsu.edu/",
    },
    mobiusEngine: {
      text: "mobius engine",
      url: "https://search.mobiusengine.ai",
    },
  },
  items: [
    "i'm working on an ai {clipStudio} video generation app",
    "i'm a dev officer and mentor at {sce}, a software engineering club at sjsu",
    "i also worked on {mobiusEngine}, a job search engine",
  ],
};

const Work = () => {
  return (
    <div className="border-box cutout-title" data-title="👨‍💻 work">
      <div className="content">
        <ul>
          <li>
            » currently i&apos;m working on an ai{" "}
            <a
              href={WORK_CONTENT.links.clipStudio.url}
              className="text-pink hover:underline"
              target="_blank"
            >
              {WORK_CONTENT.links.clipStudio.text}
            </a>{" "}
            video generation app
          </li>
          <li>
            » i&apos;m a dev officer and mentor at{" "}
            <a
              href={WORK_CONTENT.links.sce.url}
              className="text-pink hover:underline"
              target="_blank"
            >
              {WORK_CONTENT.links.sce.text}
            </a>
            , a software engineering club at sjsu
          </li>
          <li>
            » i also worked on{" "}
            <a
              href={WORK_CONTENT.links.mobiusEngine.url}
              className="text-pink hover:underline"
              target="_blank"
            >
              {WORK_CONTENT.links.mobiusEngine.text}
            </a>
            , a job search engine
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
