const Projects = () => {
  return (
    <div className="border-box cutout-title" data-title="🛠️ projects">
      <div className="content">
        here&apos;s a couple of things i&apos;ve worked on
        <div
          className="border-box cutout-title right-title"
          data-title="📈 streamerstocks"
          data-right-title="sveltekit, supabase, python"
        >
          <div className="content">
            <ul>
              <li>
                »{" "}
                <a
                  href="https://streamerstocks.org"
                  target="_blank"
                  className="text-pink hover:underline"
                >
                  streamerstocks
                </a>{" "}
                is a simulated stock market based on twitch streamer
                jasontheween&apos;s community that had over 3,500 users
              </li>
              <li>
                » we used supabase + websockets for realtime updates and python
                for the price simulation
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-box cutout-title right-title"
          data-title="💊 meditag"
          data-right-title="sveltekit, openai, supabase"
        >
          <div className="content">
            <ul>
              <li>
                »{" "}
                <a
                  href="https://github.com/gursheyss/MediTag"
                  target="_blank"
                  className="text-pink hover:underline"
                >
                  meditag
                </a>{" "}
                is a web app that lets nurses access and interact with patient
                data
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-box cutout-title right-title"
          data-title="📂 zipp"
          data-right-title="sveltekit, golang, mysql, s3"
        >
          <div className="content">
            <ul>
              <li>
                »{" "}
                <a
                  href="/zipp"
                  target="_blank"
                  className="text-pink hover:underline"
                >
                  zipp
                </a>{" "}
                is an encrypted file sharing service that implements aes-256 and
                pbkdf2 encryption
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-box cutout-title right-title"
          data-title="🎵 austere"
          data-right-title="golang, docker"
        >
          <div className="content">
            <ul>
              <li>
                »{" "}
                <a
                  href="https://github.com/gursheyss/austere"
                  target="_blank"
                  className="text-pink hover:underline"
                >
                  austere
                </a>{" "}
                is a web server that&apos;s used to save and tag songs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
