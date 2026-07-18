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
            <p className="rv-title">Software Automation Engineer | Python | JavaScript | Broadcast Automation</p>
          </div>
          <div className="rv-contact-block">
            <a href="mailto:klydejosephy@gmail.com">📧 klydejosephy@gmail.com</a>
            <span>📞 +63 945 592 7782</span>
            <a href="https://github.com/klaayd39" target="_blank" rel="noreferrer">💻 github.com/klaayd39</a>
            <a href="https://klyde-portfolio.vercel.app" target="_blank" rel="noreferrer">🌐 klyde-portfolio.vercel.app</a>
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
                Software Automation Developer specializing in Python, JavaScript, REST APIs, Playwright,
                WebSockets, and broadcast automation. Experienced in building real-time monitoring systems,
                AI-powered dashboards, workflow automation tools, and custom control systems for live
                broadcast environments. Passionate about automation, software engineering, and solving
                complex operational problems.
              </p>
            </section>

            {/* Education – moved higher for recent graduate */}
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

            {/* Experience – with quantified achievements */}
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
                  <li>Built <strong>Bombo News Intel</strong>, an AI-powered news monitoring dashboard that aggregates 50+ live intelligence feeds, reducing manual news tracking time by approximately 80%.</li>
                  <li>Developed <strong>Nautel AUI Monitor</strong>, a real-time transmitter health dashboard with custom telemetry alerts, enabling 24/7 unattended monitoring and reducing equipment downtime.</li>
                  <li>Designed <strong>Weather Overlay</strong>, a vector-based weather visualization engine with real-time REST API integration, deployed across live broadcast streams reaching 100K+ viewers.</li>
                  <li>Programmed <strong>X32 Remote Toggle</strong> using OSC protocols for Behringer X32 mixers, achieving sub-50ms state synchronization and eliminating manual hardware switching.</li>
                  <li>Developed OBS automation tools (<strong>Media Automator</strong> &amp; <strong>OBS Scene Autosort</strong>) that reduced repetitive production setup time by approximately 70% and improved workflow consistency during live broadcasts.</li>
                  <li>Created <strong>Drama Report Gen</strong>, an automated document engine that generates broadcast logs and performance reports, cutting manual data entry by approximately 90%.</li>
                </ul>
              </div>

              <div className="rv-job">
                <div className="rv-job-header">
                  <span className="rv-job-title">IT Support &amp; Hardware Technician</span>
                  <span className="rv-job-period">Freelance</span>
                </div>
                <span className="rv-job-company">General IT Services</span>
                <ul className="rv-job-list">
                  <li>Performed diagnostic troubleshooting, component upgrades, and repair services for 30+ PCs and office printers.</li>
                  <li>Installed operating systems, software packages, and system drivers, servicing 50+ local clients.</li>
                  <li>Configured network routing and peripheral devices, improving workspace productivity for small offices.</li>
                </ul>
              </div>
            </section>

            {/* Projects – with full URLs */}
            <section className="rv-section">
              <h2 className="rv-section-title">
                <span className="rv-section-icon">🚀</span> Key Projects
              </h2>

              {[
                {
                  name: 'X32 Remote Toggle',
                  tag: 'Automation',
                  url: 'https://github.com/klaayd39/x32-channel-remote-toggle',
                  desc: 'OSC control system for Behringer X32 mixers with sub-50ms real-time state synchronization.',
                },
                {
                  name: 'Media Automator',
                  tag: 'Automation',
                  url: 'https://github.com/klaayd39/obs-media-automator',
                  desc: 'Python-driven workflow engine for instant broadcast asset deployment and OBS source management.',
                },
                {
                  name: 'OBS Scene Autosort',
                  tag: 'Automation',
                  url: 'https://github.com/klaayd39/obs-scene-autosort',
                  desc: 'Dynamic scene indexing tool that reduced production setup time by ~70% for complex live shows.',
                },
                {
                  name: 'Drama Report Gen',
                  tag: 'Automation',
                  url: 'https://github.com/klaayd39/Automatic-Drama-Report-Document-Generation',
                  desc: 'Automated documentation engine that cut manual broadcast log data entry by ~90%.',
                },
                {
                  name: 'Weather Overlay',
                  tag: 'Broadcast',
                  url: 'https://github.com/klaayd39/obs-bukidnon-weather-overlay',
                  desc: 'Vector-based weather visualization with real-time REST API integration for live stream overlays.',
                },
                {
                  name: 'Nautel AUI Monitor',
                  tag: 'Broadcast',
                  url: 'https://github.com/klaayd39/nautel-aui-monitor',
                  desc: 'Real-time transmitter health monitoring dashboard with custom telemetry alerts.',
                },
                {
                  name: 'Bombo News Intel',
                  tag: 'Intelligence',
                  url: 'https://bombo-radyo.vercel.app',
                  desc: 'AI-powered news monitoring dashboard aggregating 50+ live intelligence feeds.',
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
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    🔗 {p.url.replace('https://', '')}
                  </a>
                </div>
              ))}
            </section>

          </div>{/* end rv-left */}

          {/* RIGHT column */}
          <div className="rv-right">

            {/* Skills – properly grouped with ATS keywords */}
            <section className="rv-section">
              <h2 className="rv-section-title">
                <span className="rv-section-icon">🛠</span> Skills
              </h2>

              {[
                {
                  group: 'Programming',
                  items: ['Python', 'JavaScript', 'JSON', 'REST API'],
                },
                {
                  group: 'Frontend',
                  items: ['React', 'HTML', 'CSS', 'Vite'],
                },
                {
                  group: 'Automation & Testing',
                  items: [
                    'Playwright',
                    'WebSockets',
                    'OSC Protocol',
                    'Unit Testing',
                    'API Integration',
                  ],
                },
                {
                  group: 'Tools & Platforms',
                  items: [
                    'Git',
                    'GitHub',
                    'VS Code',
                    'OBS Studio',
                    'Linux',
                  ],
                },
                {
                  group: 'IT & Infrastructure',
                  items: [
                    'IT Support',
                    'Network Configuration',
                    'Hardware Troubleshooting',
                    'Technical Documentation',
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
                <li>Stream &amp; Broadcast Automation</li>
                <li>Real-time Monitoring Systems</li>
                <li>OSC / WebSocket Integration</li>
                <li>Telemetry &amp; Alerting</li>
                <li>AI-powered Intelligence Tools</li>
                <li>Custom Scripting &amp; REST APIs</li>
              </ul>
            </section>

            {/* Achievements */}
            <section className="rv-section">
              <h2 className="rv-section-title">
                <span className="rv-section-icon">🏆</span> Achievements
              </h2>
              <p className="rv-text" style={{ fontWeight: '600' }}>
                Athlete of the Year 2024 – Bukidnon State University
              </p>
            </section>

            {/* References */}
            <section className="rv-section">
              <h2 className="rv-section-title">
                <span className="rv-section-icon">📋</span> Reference
              </h2>
              <p className="rv-text">
                Available upon request
              </p>
            </section>

          </div>{/* end rv-right */}
        </div>{/* end rv-body */}
      </div>{/* end resume-card */}
    </div>
  )
}
