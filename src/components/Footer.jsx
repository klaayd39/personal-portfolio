import { Link, useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()

  function handleDownloadResume() {
    navigate('/resume')
    setTimeout(() => window.print(), 400)
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer-modern">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-content">
        <div className="footer-cta-section">
          <h2 className="footer-cta-title">Let's build something together.</h2>
          <p className="footer-cta-text">
            I am currently open to new roles, collaborations, or discussing workflow automation strategies.
          </p>
          <div className="footer-actions">
            <Link to="/contact" className="btn-primary">
              Get in Touch <span className="icon">→</span>
            </Link>
            <button onClick={handleDownloadResume} className="btn-outline">
              📥 Download Resume
            </button>
          </div>
        </div>

        <div className="footer-bottom-grid">
          <div className="footer-info">
            <span className="footer-brand">⚡ Klyde Joseph</span>
            <p className="footer-role">Software Automation Engineer</p>
          </div>

          <div className="footer-links">
            <a href="mailto:klydejosephy@gmail.com" className="footer-link-item">
              📧 Email
            </a>
            <a href="https://github.com/klaayd39" target="_blank" rel="noreferrer" className="footer-link-item">
              💻 GitHub
            </a>
            <a href="https://www.linkedin.com/in/klyde-joseph-yabo-a38286373/" target="_blank" rel="noreferrer" className="footer-link-item">
              🔗 LinkedIn
            </a>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            ▲ Top
          </button>
        </div>

        <div className="footer-copyright">
          © {new Date().getFullYear()} — Klyde Joseph Yabo. Built for high performance & modern aesthetics.
        </div>
      </div>
    </footer>
  )
}
