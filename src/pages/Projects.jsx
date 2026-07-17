const PROJECTS = [
  {
    title: 'X32 Remote Toggle',
    tag: 'Automation',
    link: 'https://github.com/klaayd39/x32-channel-remote-toggle',
    desc: 'High-performance OSC control system for Behringer X32 mixers with real-time state synchronization.',
  },
  {
    title: 'Media Automator',
    tag: 'Automation',
    link: 'https://github.com/klaayd39/obs-media-automator',
    desc: 'Python-driven workflow engine for instant broadcast asset deployment and OBS source management.',
  },
  {
    title: 'OBS Scene Autosort',
    tag: 'Automation',
    link: 'https://github.com/klaayd39/obs-scene-autosort',
    desc: 'Dynamic scene indexing and organization tool designed for complex live productions.',
  },
  {
    title: 'Drama Report Gen',
    tag: 'Automation',
    link: 'https://github.com/klaayd39/Automatic-Drama-Report-Document-Generation',
    desc: 'Automated documentation engine for generating broadcast logs and performance reports.',
  },
  {
    title: 'Weather Overlay',
    tag: 'Broadcast Systems',
    link: 'https://github.com/klaayd39/obs-bukidnon-weather-overlay',
    desc: 'Vector-based weather visualization engine with real-time API integration for stream overlays.',
  },
  {
    title: 'Nautel AUI Monitor',
    tag: 'Broadcast Systems',
    link: 'https://github.com/klaayd39/nautel-aui-monitor',
    desc: 'Real-time monitoring dashboard for transmitter health metrics with custom telemetry alerts.',
  },
  {
    title: 'Bombo News Intel',
    tag: 'Intelligence',
    link: 'https://bombo-radyo.vercel.app',
    desc: 'AI-powered news monitoring dashboard that aggregates and synthesizes live intelligence feeds.',
  },
]

const CATEGORY_ORDER = ['Automation', 'Broadcast Systems', 'Intelligence']

export default function Projects() {
  const categories = [...new Set(PROJECTS.map((p) => p.tag))].sort(
    (a, b) => CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b)
  )

  return (
    <div>
      <div className="projects-header">
        <h1 className="header-title">Project Portfolio</h1>
        <p className="header-subtitle">
          Architecture and source code for specialized broadcast automation and real-time web
          systems.
        </p>
      </div>

      {categories.map((category) => (
        <section key={category}>
          <div className="category-pill">{category}</div>
          <div className="project-grid">
            {PROJECTS.filter((p) => p.tag === category).map((project) => (
              <article className="project-card" key={project.title}>
                <div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.desc}</p>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="card-link">
                  <span>VIEW PROJECT</span>
                  <span className="arrow-box" aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
