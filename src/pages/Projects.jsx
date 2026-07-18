import { useState, useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import ProjectModal from '../components/ProjectModal'

const PROJECTS = [
  {
    title: 'X32 Remote Toggle',
    tag: 'Automation',
    link: 'https://github.com/klaayd39/x32-channel-remote-toggle',
    desc: 'High-performance OSC control system for Behringer X32 mixers with real-time state synchronization.',
    longDesc: 'X32 Remote Toggle is a high-performance, low-latency OSC control suite developed to interface directly with Behringer X32 audio consoles. It enables broadcast engineers to seamlessly toggle specific channels, mute groups, or system configurations remotely while maintaining fully synchronized state indicators across clients.',
    problem: 'Live audio engineers often face physical layout constraints or slow response times when executing emergency mutes or quick mic handovers, leading to delayed action during live broadcasts.',
    solution: 'Designed an event-driven automation module using Python and Javascript communicating over low-latency OSC protocols (Open Sound Control), reaching sub-50ms synchronization across hardware and client dashboards.',
    features: [
      'Sub-50ms state sync latency over UDP OSC protocols',
      'Unified configuration profile schema for modular mixers',
      'Recruiter-friendly diagnostics console for testing packets',
      'Custom profiles for different studio configurations'
    ],
    tech: ['Python', 'JavaScript', 'OSC Protocol', 'WebSockets', 'UDP Network'],
    challenges: 'Ensuring network reliability over Wi-Fi/UDP packet drop scenarios. Mitigated by implementing a heartbeat check and auto-recovery sync state loops.',
    liveUrl: ''
  },
  {
    title: 'Media Automator',
    tag: 'Automation',
    link: 'https://github.com/klaayd39/obs-media-automator',
    desc: 'Python-driven workflow engine for instant broadcast asset deployment and OBS source management.',
    longDesc: 'Media Automator is an intelligent daemon that monitors assets directories and deploys media clips directly to active OBS Studio scenes, eliminating manual layout and asset import steps during fast-paced news or live-stream events.',
    problem: 'Production assistants frequently delay broadcast graphics deployment due to manual folder navigation, drag-drop errors, or mismatching size aspect ratios during live streaming.',
    solution: 'Built a background daemon watcher using Python watchdog modules connected to OBS WebSocket API. When assets are saved, they automatically transform, resize, and fade in on stream.',
    features: [
      'Automatic media ingestion and aspect-ratio padding',
      'OBS WebSockets API remote manipulation',
      'Hot-swapping asset pools with directory watcher',
      'Direct fade/transition timings settings'
    ],
    tech: ['Python', 'OBS WebSockets', 'Watchdog', 'JSON APIs', 'Git'],
    challenges: 'Handling concurrent file writes without triggering locking errors. Solved by integrating a debounce delay buffer before launching OBS import workflows.',
    liveUrl: ''
  },
  {
    title: 'OBS Scene Autosort',
    tag: 'Automation',
    link: 'https://github.com/klaayd39/obs-scene-autosort',
    desc: 'Dynamic scene indexing and organization tool designed for complex live productions.',
    longDesc: 'OBS Scene Autosort resolves workflow clutter in complex live productions by auto-indexing, sorting, and arranging scene structures in OBS Studio based on prefix-rules, metadata labels, and stream progression states.',
    problem: 'Broadcasters running 30+ scenes struggle to find the right transitions or camera layout during stressful live show switches.',
    solution: 'Created an intelligent sorting agent running locally that enforces strict scene structures and cleans up deprecated streams dynamically.',
    features: [
      'Dynamic naming schema validation',
      'Staggered index configuration files',
      'Hot-reload settings profile',
      'Keyboard automation macros triggers'
    ],
    tech: ['Python', 'OBS WebSockets', 'GUI Automation', 'Vite', 'React'],
    challenges: 'Syncing UI states when the user modifies scene names inside the native OBS GUI. Addressed by listening to OBS event streams and updating local indexes immediately.',
    liveUrl: ''
  },
  {
    title: 'Drama Report Gen',
    tag: 'Automation',
    link: 'https://github.com/klaayd39/Automatic-Drama-Report-Document-Generation',
    desc: 'Automated documentation engine for generating broadcast logs and performance reports.',
    longDesc: 'Drama Report Gen is a backend document synthesizer that extracts script data, performance notes, and schedule logs to construct professional PDFs and sheets optimized for broadcast audit compliance.',
    problem: 'Station managers spent hours daily copy-pasting log inputs into Word templates for official administrative checks.',
    solution: 'Designed a command-line and web automation script using docx/xlsx templating engines to build and output finalized compliance PDFs in one click.',
    features: [
      'Automated document building with zero manual layouting',
      'Audit compliance matching templates',
      'Error checking for missing schedules or duplicate entries',
      'Direct output to cloud folders'
    ],
    tech: ['Python', 'XLSX/DOCX Engine', 'JSON Schemas', 'Supabase'],
    challenges: 'Aligning dynamic tables perfectly across multi-page templates. Resolved by standardizing style XML blocks inside the generation script.',
    liveUrl: ''
  },
  {
    title: 'Weather Overlay',
    tag: 'Broadcast Systems',
    link: 'https://github.com/klaayd39/obs-bukidnon-weather-overlay',
    desc: 'Vector-based weather visualization engine with real-time API integration for stream overlays.',
    longDesc: 'A live weather presentation overlay that aggregates API data from PAGASA and weather APIs to output beautiful vector animations overlayed on live television and internet streams reaching 100K+ viewers.',
    problem: 'Static weather images feel outdated and lack immediate local context during typhoons or sudden climate changes.',
    solution: 'Developed a lightweight React-based dashboard running as an OBS browser source that pulls weather data and renders real-time CSS gradients and icons.',
    features: [
      'Live weather telemetry polling and caching',
      'SVG vector animations corresponding to current status',
      'Custom overlay styles optimized for broadcast aspect ratios',
      'Low CPU/Memory profile to safeguard stream software'
    ],
    tech: ['React', 'Vite', 'HTML5/CSS3', 'PAGASA API', 'Responsive Design'],
    challenges: 'High memory usage inside OBS browser engines. Solved by strictly optimizing DOM rendering cycles and using lightweight CSS transitions over heavyJS libraries.',
    liveUrl: ''
  },
  {
    title: 'Nautel AUI Monitor',
    tag: 'Broadcast Systems',
    link: 'https://github.com/klaayd39/nautel-aui-monitor',
    desc: 'Real-time monitoring dashboard for transmitter health metrics with custom telemetry alerts.',
    longDesc: 'Nautel AUI Monitor is a critical infrastructure dashboard that polls Nautel Advanced User Interface APIs to monitor RF power output, VSWR, and temperature metrics. It alerts engineers via custom webhooks in case of anomalies.',
    problem: 'Radio transmitters are located in remote sites and AUI crashes can go unnoticed, resulting in broadcast outages.',
    solution: 'Created a central monitor service that pings transmitter endpoints, handles authentication, caches telemetry logs, and fires alerts.',
    features: [
      'Transmitter health telemetry tracking',
      'Visual gauge dashboard with alert thresholds',
      'Instant notifications setup',
      '24/7 background service status checks'
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'REST APIs', 'Supabase'],
    challenges: 'Interfacing with older XML-based APIs securely. Solved by writing a clean backend parser node that translates legacy XML responses into JSON.',
    liveUrl: ''
  },
  {
    title: 'Bombo News Intel',
    tag: 'Intelligence',
    link: 'https://bombo-radyo.vercel.app',
    desc: 'AI-powered news monitoring dashboard that aggregates and synthesizes live intelligence feeds.',
    longDesc: 'Bombo News Intel is an advanced monitoring board aggregating 50+ live feeds, news portals, and social reports. It processes text feeds via localized filters to build a centralized real-time intelligence board for broadcast journalists.',
    problem: 'Journalists manually scanning dozens of pages miss breaking news, or lose valuable time during coverage.',
    solution: 'Engineered a full-stack platform using React, Supabase, and real-time scrapers that categorize, prioritize, and alert users of breaking items.',
    features: [
      'Scraper modules for live news feeds indexing',
      'Supabase Realtime notifications pipeline',
      'Search and priority categorization labels',
      'Recruiter-friendly preview environment'
    ],
    tech: ['React', 'Supabase', 'Node.js', 'Playwright', 'WebSockets', 'TailwindCSS'],
    challenges: 'Maintaining speed while database sizes grow quickly. Mitigated by indexing text columns, creating cron cleanup routines, and using efficient pagination.',
    liveUrl: 'https://bombo-radyo.vercel.app'
  }
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState(null)
  
  const categories = ['All', 'Automation', 'Broadcast Systems', 'Intelligence']

  // Simulate loader for premium perceived performance
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.tag === activeCategory)

  return (
    <div className="page-wrap">
      <div className="projects-header">
        <ScrollReveal direction="down" duration={500}>
          <h1 className="header-title">Project Portfolio</h1>
          <p className="header-subtitle">
            Specialized automation toolsets, telemetry dashboards, and real-time systems built for high-demand environments.
          </p>
        </ScrollReveal>
      </div>

      {/* Category filter tabs */}
      <ScrollReveal direction="up" delay={150} duration={500}>
        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-tab${activeCategory === category ? ' active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {loading ? (
        <div className="project-grid" style={{ marginTop: '2rem' }}>
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div className="card-skeleton" key={idx}>
              <div className="skeleton-image" />
              <div className="skeleton-line title" />
              <div className="skeleton-line text" />
              <div className="skeleton-line text" />
              <div className="skeleton-line short" />
              <div className="skeleton-shimmer" />
            </div>
          ))}
        </div>
      ) : (
        <div className="project-grid" style={{ marginTop: '2rem' }}>
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              direction="up"
              delay={index * 80}
              duration={600}
              key={project.title}
            >
              <article className="project-card glass">
                <div className="project-card-image-wrap">
                  <div className="modal-hero-placeholder">
                    <span className="placeholder-icon">🚀</span>
                  </div>
                </div>
                <div>
                  <span className="project-card-tag">{project.tag}</span>
                  <h3 className="card-title-main" style={{ marginTop: '0.5rem' }}>{project.title}</h3>
                  <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                    {project.desc}
                  </p>

                  <div className="tech-badges">
                    {(project.tech || []).slice(0, 3).map((t) => (
                      <span className="tech-badge" key={t}>
                        {t}
                      </span>
                    ))}
                    {project.tech && project.tech.length > 3 && (
                      <span className="tech-badge">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>

                <div className="project-actions">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="project-btn-sm project-btn-primary"
                  >
                    Details <span className="icon">→</span>
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn-sm project-btn-outline"
                  >
                    GitHub
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* Project detail modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}
