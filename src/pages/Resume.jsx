function handlePrint() {
  window.print()
}

export default function Resume() {
  return (
    <div className="resume-page">

      {/* ── Download button ── */}
      <div className="resume-actions">
        <button className="resume-dl-btn" onClick={handlePrint}>
          📥 Download as PDF
        </button>
      </div>

      {/* ══════════════════════════════════
          RESUME CARD
      ══════════════════════════════════ */}
      <div className="resume-card">

        {/* ── Header ── */}
        <header className="rv-header">
          <div className="rv-name-block">
            <h1 className="rv-name">Klyde Joseph Yabo</h1>
            <p className="rv-title">BSIT Graduate &amp; Software Automation Developer</p>
          </div>
          <div className="rv-contact-block">
            <span>📧 klydejosephy@gmail.com</span>
            <span>📞 +63 945 592 7782</span>
            <span>🌐 github.com/klaayd39</span>
            <span>📍 Malaybalay City, Philippines</span>
          </div>
        </header>

        <div className="rv-divider" />

        {/* ── Two-column body ── */}
        <div className="rv-body">

          {/* LEFT column */}
          <div className="rv-left">

            {/* Summary */}
            <section className="rv-section">
              <h2 className="rv-section-title">
                <span className="rv-section-icon">👤</span> Summary
              </h2>
              <p className="rv-text">
                IT graduate from Bukidnon State University with hands-on experience in PC/printer troubleshooting,
                software installation, video editing, and document processing. Gained practical experience
                designing and building custom broadcast automation engines, OSC/WebSocket-driven mixer toggles,
                telemetry trackers, and real-time news intelligence monitors. Proficient in HTML/CSS, JavaScript,
                Python, and technical documentation.
              </p>
            </section>

            {/* Experience */}
            <section className="rv-section">
              <h2 className="rv-section-title">
                <span className="rv-section-icon">💼</span> Experience
              </h2>

              <div className="rv-job">
                <div className="rv-job-header">
                  <span className="rv-job-title">Software Automation &amp; Systems Developer</span>
                  <span className="rv-job-period">2022 – Present</span>
                </div>
                <span className="rv-job-company">Freelance &amp; Independent Projects</span>
                <ul className="rv-job-list">
                  <li>Developed **Bombo News Intel**, an AI-powered news monitoring dashboard that aggregates and synthesizes live intelligence feeds for real-time tracking.</li>
                  <li>Built **Nautel AUI Monitor**, a real-time dashboard for transmitter health metrics with custom telemetry alerts.</li>
                  <li>Designed and deployed **Weather Overlay**, a vector-based weather visualization engine with real-time API integration for stream overlays.</li>
                  <li>Programmed the **X32 Remote Toggle** control system using OSC protocols for Behringer X32 mixers with real-time state synchronization.</li>
                  <li>Created OBS automation utilities (**Media Automator** and **OBS Scene Autosort**) to optimize live stream workflows, media triggers, and scene indexing.</li>
                  <li>Developed **Drama Report Gen**, an automated document engine to produce broadcast logs and performance reports, reducing manual data entry.</li>
                </ul>
              </div>

              <div className="rv-job">
                <div className="rv-job-header">
                  <span className="rv-job-title">IT Support &amp; Hardware Technician</span>
                  <span className="rv-job-period">Freelance</span>
                </div>
                <span className="rv-job-company">General IT Services</span>
                <ul className="rv-job-list">
                  <li>Performed diagnostic troubleshooting, component upgrades, and repair services for PCs and office printers.</li>
                  <li>Installed operating systems, software packages, and system drivers for local staff and users.</li>
                  <li>Assisted in setting up network routing and configuring peripheral devices for workspace productivity.</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section className="rv-section">
              <h2 className="rv-section-title">
                <span className="rv-section-icon">🚀</span> Key Projects
              </h2>

              {[
                {
                  name: 'X32 Remote Toggle',
                  tag: 'Automation',
                  url: 'github.com/klaayd39/x32-channel-remote-toggle',
                  desc: 'High-performance OSC control system for Behringer X32 mixers with real-time state synchronization.',
                },
                {
                  name: 'Media Automator',
                  tag: 'Automation',
                  url: 'github.com/klaayd39/obs-media-automator',
                  desc: 'Python-driven workflow engine for instant broadcast asset deployment and OBS source management.',
                },
                {
                  name: 'OBS Scene Autosort',
                  tag: 'Automation',
                  url: 'github.com/klaayd39/obs-scene-autosort',
                  desc: 'Dynamic scene indexing and organization tool designed for complex live productions.',
                },
                {
                  name: 'Drama Report Gen',
                  tag: 'Automation',
                  url: 'github.com/klaayd39/Automatic-Drama-Report-Document-Generation',
                  desc: 'Automated documentation engine for generating broadcast logs and performance reports.',
                },
                {
                  name: 'Weather Overlay',
                  tag: 'Broadcast Systems',
                  url: 'github.com/klaayd39/obs-bukidnon-weather-overlay',
                  desc: 'Vector-based weather visualization engine with real-time API integration for stream overlays.',
                },
                {
                  name: 'Nautel AUI Monitor',
                  tag: 'Broadcast Systems',
                  url: 'github.com/klaayd39/nautel-aui-monitor',
                  desc: 'Real-time monitoring dashboard for transmitter health metrics with custom telemetry alerts.',
                },
                {
                  name: 'Bombo News Intel',
                  tag: 'Intelligence',
                  url: 'bombo-radyo.vercel.app',
                  desc: 'AI-powered news monitoring dashboard that aggregates and synthesizes live intelligence feeds.',
                },
              ].map((p) => (
                <div className="rv-project" key={p.name}>
                  <div className="rv-project-header">
                    <span className="rv-project-name">{p.name}</span>
                    <span className="rv-project-tag">{p.tag}</span>
                  </div>
                  <p className="rv-project-desc">{p.desc}</p>
                  <a
                    className="rv-project-link"
                    href={`https://${p.url}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    🔗 {p.url}
                  </a>
                </div>
              ))}
            </section>

          </div>{/* end rv-left */}

          {/* RIGHT column */}
          <div className="rv-right">

            {/* Skills */}
            <section className="rv-section">
              <h2 className="rv-section-title">
                <span className="rv-section-icon">🛠</span> Skills
              </h2>

              {[
                {
                  group: 'Technical Skills (IT)',
                  items: [
                    'IT Support & Troubleshooting',
                    'PC & Printer Maintenance',
                    'Software Installation',
                    'Network Configuration',
                    'Video Editing',
                    'Technical Documentation'
                  ],
                },
                {
                  group: 'Languages & Web',
                  items: ['Python', 'JavaScript', 'HTML', 'CSS', 'React', 'Vite'],
                },
                {
                  group: 'Automation & Broadcast',
                  items: [
                    'OSC Protocol',
                    'WebSockets',
                    'Playwright',
                    'API Design & Integration',
                    'OBS Studio',
                    'Nautel AUI telemetry'
                  ],
                },
                {
                  group: 'Professional Qualities',
                  items: [
                    'Problem-solving abilities',
                    'Adaptability & Flexibility',
                    'Critical Thinking',
                    'Communication Skills'
                  ],
                },
              ].map(({ group, items }) => (
                <div className="rv-skill-group" key={group}>
                  <p className="rv-skill-group-label">{group}</p>
                  <div className="rv-skill-pills">
                    {items.map((s) => (
                      <span className="rv-skill-pill" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Specializations */}
            <section className="rv-section">
              <h2 className="rv-section-title">
                <span className="rv-section-icon">⚡</span> Specializations
              </h2>
              <ul className="rv-spec-list">
                <li>Desktop &amp; Printer Support</li>
                <li>OSC / WebSocket Integration</li>
                <li>Stream &amp; Broadcast Automation</li>
                <li>Telemetry Monitoring &amp; Alerting</li>
                <li>AI News Intelligence Tools</li>
                <li>Custom Scripting &amp; APIs</li>
              </ul>
            </section>

            {/* Education */}
            <section className="rv-section">
              <h2 className="rv-section-title">
                <span className="rv-section-icon">🎓</span> Education
              </h2>
              <div className="rv-edu rv-edu-spaced">
                <span className="rv-edu-degree">Bukidnon State University</span>
                <span className="rv-edu-school">Bachelor of Science in Information Technology (2020 – 2024)</span>
              </div>
              <div className="rv-edu rv-edu-spaced">
                <span className="rv-edu-degree">STI Malaybalay</span>
                <span className="rv-edu-school">TVL – Information Technology, Senior High School (2018 – 2020)</span>
              </div>
              <div className="rv-edu">
                <span className="rv-edu-degree">Bukidnon National High School</span>
                <span className="rv-edu-school">Junior High School Special Program in Sports (2014 – 2018)</span>
              </div>
            </section>

            {/* Achievements */}
            <section className="rv-section">
              <h2 className="rv-section-title">
                <span className="rv-section-icon">🏆</span> Achievements
              </h2>
              <p className="rv-text" style={{ fontWeight: '600' }}>
                Graduated as Athlete of the Year 2024
              </p>
            </section>

            {/* References */}
            <section className="rv-section">
              <h2 className="rv-section-title">
                <span className="rv-section-icon">📋</span> Reference
              </h2>
              <p className="rv-text">
                Reference available upon request
              </p>
            </section>

          </div>{/* end rv-right */}
        </div>{/* end rv-body */}
      </div>{/* end resume-card */}
    </div>
  )
}
