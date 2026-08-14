import { Helmet } from 'react-helmet-async';
import { useState, useEffect, useRef } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import ProjectModal from '../components/ProjectModal'

import { PROJECTS } from '../data/projects'

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

  const handleCategoryChange = (category) => {
    if (!document.startViewTransition) {
      setActiveCategory(category)
      return
    }
    document.startViewTransition(() => {
      setActiveCategory(category)
    })
  }

  const handleMouseMove = (e, cardElement) => {
    if (!cardElement) return
    const rect = cardElement.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // For 3D tilt
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -10 // max 10 deg tilt
    const rotateY = ((x - centerX) / centerX) * 10
    
    cardElement.style.setProperty('--mouse-x', `${x}px`)
    cardElement.style.setProperty('--mouse-y', `${y}px`)
    cardElement.style.setProperty('--rotate-x', `${rotateX}deg`)
    cardElement.style.setProperty('--rotate-y', `${rotateY}deg`)
  }

  const handleMouseLeave = (cardElement) => {
    if (!cardElement) return
    cardElement.style.setProperty('--rotate-x', '0deg')
    cardElement.style.setProperty('--rotate-y', '0deg')
  }

  return (
    <div className="page-wrap">
      <Helmet>
        <title>Projects | Klyde Joseph Yabo</title>
      </Helmet>
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
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {loading ? (
        <div className="project-grid" style={{ marginTop: '2rem' }}>
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div className="card-skeleton glass" key={idx}>
              <div className="skeleton-image-wrap shimmer" />
              <div className="skeleton-content">
                <div className="skeleton-tag shimmer" />
                <div className="skeleton-title shimmer" />
                <div className="skeleton-line shimmer" />
                <div className="skeleton-line shimmer" style={{ width: '80%' }} />
                <div className="skeleton-line shimmer" style={{ width: '60%', marginBottom: '1.25rem' }} />
                
                <div className="skeleton-badges">
                  <div className="skeleton-badge shimmer" />
                  <div className="skeleton-badge shimmer" />
                  <div className="skeleton-badge shimmer" />
                </div>
                
                <div className="skeleton-actions">
                  <div className="skeleton-btn shimmer" />
                  <div className="skeleton-btn shimmer" />
                </div>
              </div>
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
              <article 
                className="project-card glass"
                style={{ viewTransitionName: `project-${project.title.replace(/[^a-zA-Z0-9]/g, '-')}` }}
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              >
                <div className="project-card-image-wrap">
                  {project.image ? (
                    <img src={project.image} loading="lazy" alt={project.title} className="project-card-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="modal-hero-placeholder">
                      <span className="placeholder-icon">🚀</span>
                    </div>
                  )}
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
