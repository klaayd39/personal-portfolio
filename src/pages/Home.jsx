import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { SKILLS } from '../data/skills'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  const cardRef = useRef(null)
  const [transformStyle, setTransformStyle] = useState('')

  function handleMouseMove(e) {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    
    // Get mouse coordinates relative to the card center
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    // Calculate rotation angles (max 15 degrees tilt)
    const rotateY = (x / (rect.width / 2)) * 12
    const rotateX = -(y / (rect.height / 2)) * 12
    
    setTransformStyle(`rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.02)`)
  }

  function handleMouseLeave() {
    setTransformStyle('')
  }

  return (
    <div className="page-wrap">
      <div className="section-block">
        <div className="hero-grid">
          {/* Left column — hero text */}
          <div className="hero-left">
            <ScrollReveal direction="down" duration={500}>
              <p className="eyebrow">Digital Architect</p>
              <h1 className="main-title">
                Klyde Joseph<br />Yabo
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} duration={600}>
              <p className="subtitle-hero">
                Passionate developer focused on building practical, elegant, and efficient solutions. 
                I specialize in workflow automation, real-time web applications, and broadcast systems telemetry.
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
              <div
                ref={cardRef}
                className="profile-card-3d glass"
                style={{ transform: transformStyle }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src="/ID.png"
                  alt="Klyde Joseph Yabo — Automation Specialist"
                  className="profile-img-3d"
                  style={{ transform: transformStyle ? 'translateZ(30px) scale(1.05)' : '' }}
                />
                <p className="profile-role" style={{ transform: transformStyle ? 'translateZ(20px)' : '' }}>
                  Automation Specialist
                </p>
                <span
                  className="hire-badge"
                  style={{ transform: transformStyle ? 'translateZ(15px)' : '' }}
                >
                  <span className="hire-dot" aria-hidden="true">●</span> ACTIVE FOR HIRE
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* SVG Wave Divider */}
      <svg className="section-divider-svg" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 24C120 42.7 240 61.3 360 61.3C480 61.3 600 42.7 720 30.7C840 18.7 960 14.7 1080 20.7C1200 26.7 1320 42.7 1440 56V74H0V24Z" fill="currentColor"/>
      </svg>

      {/* Categorized Skills Section */}
      <div className="section-block section-alt">
        <ScrollReveal direction="up" duration={600}>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="subtitle-hero" style={{ marginBottom: '40px' }}>
            A structured breakdown of technologies, methodologies, and platforms I employ to build performant products.
          </p>
        </ScrollReveal>

        <div className="skills-grid">
          {SKILLS.map((cat, index) => (
            <ScrollReveal direction="up" delay={index * 100} duration={600} key={cat.category}>
              <div className="skill-card glass">
                <div className="skill-card-header">
                  <span className="skill-card-icon" aria-hidden="true">{cat.icon}</span>
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
