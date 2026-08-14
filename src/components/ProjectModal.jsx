import { useEffect, useRef } from 'react'

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    dialog.showModal()
    
    // Close modal when clicking on the backdrop
    const handleBackdropClick = (e) => {
      if (e.target === dialog) {
        onClose()
      }
    }
    
    dialog.addEventListener('click', handleBackdropClick)
    
    return () => {
      dialog.removeEventListener('click', handleBackdropClick)
    }
  }, [onClose])

  // Native dialog already handles Escape key to close, so we just listen to the native close event
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    
    const handleNativeClose = () => onClose()
    dialog.addEventListener('close', handleNativeClose)
    return () => dialog.removeEventListener('close', handleNativeClose)
  }, [onClose])

  // Prevent scrolling on body when dialog is open (native dialog doesn't always block body scroll natively depending on content)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  if (!project) return null

  return (
    <dialog ref={dialogRef} className="modal-dialog glass" aria-label={project.title}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-hero">
          {project.image ? (
            <img src={project.image} alt={project.title} loading="lazy" className="modal-hero-img" />
          ) : (
            <div className="modal-hero-placeholder">
              <span className="placeholder-icon">🚀</span>
              <span className="placeholder-text">{project.title}</span>
            </div>
          )}
          <div className="modal-hero-overlay">
            <span className="modal-tag">{project.tag}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-main-content">
            <section className="modal-section">
              <h3>Project Overview</h3>
              <p>{project.longDesc || project.desc}</p>
            </section>

            <section className="modal-section">
              <h3>Problem Statement</h3>
              <p>{project.problem || "Inefficient manual workflows or lack of real-time monitoring required an automated, reliable system to synchronize states, capture analytics, or alert users instantly."}</p>
            </section>

            <section className="modal-section">
              <h3>Solution</h3>
              <p>{project.solution || "Developed a modern, event-driven architecture utilizing optimized protocols (like OSC, WebSockets, or high-performance APIs) combined with a robust UI to deliver direct actions, sub-50ms sync, and reliable alerts."}</p>
            </section>

            <section className="modal-section">
              <h3>Key Features</h3>
              <ul className="modal-features-list">
                {(project.features || [
                  "Real-time event synchronization and state management",
                  "High contrast, recruiter-friendly telemetry visualizations",
                  "Modular design matching industry best practices",
                  "Automated logging and background tasks"
                ]).map((feat, index) => (
                  <li key={index}>{feat}</li>
                ))}
              </ul>
            </section>

            <section className="modal-section">
              <h3>Challenges Encountered &amp; Resolution</h3>
              <p>{project.challenges || "Managing low-latency network thresholds and cross-platform consistency. Resolved by leveraging lightweight JSON models, efficient throttling, and responsive CSS frameworks."}</p>
            </section>
          </div>

          <div className="modal-sidebar">
            <div className="modal-sidebar-card">
              <h4>Technologies Used</h4>
              <div className="modal-tech-list">
                {(project.tech || [project.tag]).map((tech) => (
                  <span className="tech-badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn-primary modal-action-btn"
              >
                GitHub Repo <span className="icon">→</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline modal-action-btn"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}
