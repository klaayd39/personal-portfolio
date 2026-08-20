import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'
import { SKILLS } from '../data/skills'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  return (
    <div className="page-wrap">
      <Helmet>
        <title>Klyde Joseph Yabo | Portfolio</title>
      </Helmet>
      <div className="section-block">
        <div className="hero-grid">
          {/* Left column — hero text */}
          <div className="hero-left">
            <ScrollReveal direction="down" duration={500}>
              <h1 className="main-title">
                Klyde Joseph<br />Yabo
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} duration={600}>
              <p className="subtitle-hero">
                Software Automation Developer | Python, React, Playwright, WebSockets | Building real-time broadcast systems @ Bombo Radyo Malaybalay 📡
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400} duration={600}>
              <div className="hero-cta">
                <Link to="/projects" className="btn-primary">
                  View Projects <span className="icon">→</span>
                </Link>
                <Link to="/contact" className="btn-outline">
                  Get in Touch
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column — profile card */}
          <div className="profile-card-wrap">
            <ScrollReveal direction="left" delay={300} duration={700}>
              <div className="profile-card">
                <img
                  src="/ID.png"
                  alt="Klyde Joseph Yabo"
                  className="profile-img"
                />
                <p className="profile-role">
                  Automation Specialist
                </p>
                <span className="hire-badge">
                  <span className="hire-dot" aria-hidden="true"></span>
                  Available for Hire
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="section-block section-alt">
        <ScrollReveal direction="up" duration={600}>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="subtitle-hero" style={{ marginBottom: '40px' }}>
            Technologies, methodologies, and platforms I use to build performant products.
          </p>
        </ScrollReveal>

        <div className="skills-grid">
          {SKILLS.map((cat, index) => (
            <ScrollReveal direction="up" delay={index * 100} duration={600} key={cat.category}>
              <div className="skill-card">
                <div className="skill-card-header">
                  <h3 className="skill-card-title">{cat.category}</h3>
                </div>
                <div className="skill-items-list">
                  {cat.items.map((skill) => (
                    <span className="skill-badge" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
