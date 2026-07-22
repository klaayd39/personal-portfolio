export default function Resume() {
  return (
    <div className="resume-page page-wrap">

      {/* ── Download buttons ── */}
      <div className="resume-actions">
        <a
          href="/Klyde_Joseph_Yabo_Resume.pdf"
          download="Klyde_Joseph_Yabo_Resume.pdf"
          className="btn-primary"
        >
          📥 Download PDF
        </a>
        <a
          href="/Klyde_Joseph_Yabo_Resume.docx"
          download="Klyde_Joseph_Yabo_Resume.docx"
          className="btn-outline"
        >
          📄 Download DOCX
        </a>
      </div>

      {/* ══════════════════════════════════
          RESUME CARD
      ══════════════════════════════════ */}
      <div className="resume-card doc-theme">

        {/* ── Header ── */}
        <header className="rv-header">
          <h1 className="rv-name">KLYDE JOSEPH YABO</h1>
          <p className="rv-title">
            Software Automation Engineer &nbsp;|&nbsp; Python &nbsp;|&nbsp; JavaScript &nbsp;|&nbsp; Broadcast Automation
          </p>
          <div className="rv-contact-bar">
            <span>klydejosephy@gmail.com</span>
            <span className="sep">|</span>
            <span>+63 945 592 7782</span>
            <span className="sep">|</span>
            <a href="https://github.com/klaayd39" target="_blank" rel="noreferrer">github.com/klaayd39</a>
            <span className="sep">|</span>
            <a href="https://www.linkedin.com/in/klyde-joseph-yabo-a38286373/" target="_blank" rel="noreferrer">linkedin.com/in/klyde-joseph-yabo</a>
            <span className="sep">|</span>
            <span>Malaybalay City, Philippines</span>
          </div>
        </header>

        {/* ── Two-column body ── */}
        <div className="rv-body">

          {/* LEFT column */}
          <div className="rv-left">

            {/* Summary */}
            <section className="rv-section">
              <h2 className="rv-section-title">SUMMARY</h2>
              <p className="rv-text">
                Software Automation Developer specializing in Python, JavaScript, REST APIs,
                Playwright, WebSockets, and broadcast automation. Experienced in building
                real-time monitoring systems, AI-powered dashboards, workflow automation
                tools, and custom control systems for live broadcast environments.
                Passionate about automation, software engineering, and solving complex
                operational problems.
              </p>
            </section>

            {/* Education */}
            <section className="rv-section">
              <h2 className="rv-section-title">EDUCATION</h2>
              <div className="rv-edu">
                <p className="rv-edu-school">Bukidnon State University</p>
                <p className="rv-edu-degree">Bachelor of Science in Information Technology (2020 – 2024)</p>
              </div>
            </section>

            {/* Experience */}
            <section className="rv-section">
              <h2 className="rv-section-title">EXPERIENCE</h2>

              <div className="rv-job">
                <div className="rv-job-header">
                  <span className="rv-job-title">Software Automation &amp; Systems Developer</span>
                  <span className="rv-job-period">2022 – Present</span>
                </div>
                <p className="rv-job-company">Bombo Radyo Malaybalay</p>
                <p className="rv-job-tech">
                  <strong>Technologies:</strong> Python, JavaScript, React, REST APIs, Playwright, WebSockets, OSC, Git, Linux
                </p>
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
                <p className="rv-job-company">General IT Services</p>
                <p className="rv-job-tech">
                  <strong>Technologies:</strong> Hardware Diagnostics, Network Configuration, Technical Documentation, Video Editing
                </p>
                <ul className="rv-job-list">
                  <li>Performed diagnostic troubleshooting, component upgrades, and repair services for 30+ PCs and office printers.</li>
                  <li>Installed operating systems, software packages, and system drivers, servicing 50+ local clients.</li>
                  <li>Configured network routing and peripheral devices, improving workspace productivity for small offices.</li>
                </ul>
              </div>
            </section>

          </div>{/* end rv-left */}

          {/* RIGHT column */}
          <div className="rv-right">

            {/* Skills */}
            <section className="rv-section">
              <h2 className="rv-section-title">SKILLS</h2>

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
                  items: ['Playwright', 'WebSockets', 'OSC Protocol', 'Unit Testing', 'API Integration'],
                },
                {
                  group: 'Tools & Platforms',
                  items: ['Git', 'GitHub', 'VS Code', 'OBS Studio', 'Linux'],
                },
                {
                  group: 'IT & Infrastructure',
                  items: ['IT Support', 'Network Configuration', 'Hardware Troubleshooting', 'Technical Documentation'],
                },
              ].map(({ group, items }) => (
                <div className="rv-skill-group" key={group}>
                  <p className="rv-skill-group-label">{group}</p>
                  <p className="rv-skill-group-items">{items.join('  •  ')}</p>
                </div>
              ))}
            </section>

            {/* Specializations */}
            <section className="rv-section">
              <h2 className="rv-section-title">SPECIALIZATIONS</h2>
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
              <h2 className="rv-section-title">ACHIEVEMENTS</h2>
              <p className="rv-text-bold">
                Athlete of the Year 2024 – Bukidnon State University
              </p>
            </section>

            {/* References */}
            <section className="rv-section">
              <h2 className="rv-section-title">REFERENCE</h2>
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
