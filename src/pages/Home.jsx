const SKILLS = ['Python', 'HTML', 'Playwright', 'CSS', 'Javascript', 'API Design']

export default function Home() {
  return (
    <div className="hero-grid">
      {/* Left column — hero text */}
      <div className="hero-left">
        <p className="eyebrow">Digital Architect</p>
        <h1 className="main-title">
          Klyde Joseph<br />Yabo
        </h1>
        <p className="subtitle">
          Passionate developer focused on building practical and efficient solutions. I enjoy
          working on automation, modern web apps, and experimenting with new technologies to
          improve workflows and productivity.
        </p>
        <div className="skills-row">
          {SKILLS.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Right column — profile card */}
      <div className="profile-card-wrap">
        <div className="profile-card-3d">
          <img
            src="/ID.png"
            alt="Klyde Joseph Yabo — Automation Specialist"
            className="profile-img-3d"
          />
          <p className="profile-role">Automation Specialist</p>
          <span className="hire-badge">
            <span className="hire-dot" aria-hidden="true">●</span> ACTIVE FOR HIRE
          </span>
        </div>
      </div>
    </div>
  )
}
