import { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Lottie from './SafeLottie'
import useLottieUrl from '../hooks/useLottieUrl'
import { NAV_ITEMS } from './navItems'

const LOTTIE_NAV_URL = 'https://assets5.lottiefiles.com/packages/lf20_fcfjwiyb.json'

export default function Sidebar() {
  const navAnimation = useLottieUrl(LOTTIE_NAV_URL)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function handleDownloadResume() {
    if (location.pathname === '/resume') {
      window.print()
    } else {
      navigate('/resume')
      setTimeout(() => window.print(), 400)
    }
  }

  // Close drawer when route changes
  useEffect(() => {
    setDrawerOpen(false)
  }, [location])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const SidebarContent = ({ onLinkClick, onDownload }) => (
    <>
      <div className="sidebar-lottie">
        {navAnimation && (
          <Lottie animationData={navAnimation} loop autoplay />
        )}
      </div>

      <ul className="nav-list">
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
              onClick={onLinkClick}
            >
              <span aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="sidebar-bottom">
        <hr className="sidebar-divider" />

        <button
          className="download-btn"
          onClick={onDownload}
        >
          📥 Download Resume
        </button>

        <p className="sidebar-footer-note">© {new Date().getFullYear()} Klyde Joseph Yabo</p>
      </div>
    </>
  )

  return (
    <>
      {/* Desktop / Tablet Sidebar */}
      <aside className="sidebar" aria-label="Main navigation">
        <SidebarContent onLinkClick={undefined} onDownload={handleDownloadResume} />
      </aside>

      {/* Mobile Hamburger Bar */}
      <div className="mobile-topbar" role="banner">
        <span className="brand">⚡ Klyde Joseph</span>
        <button
          className="hamburger-btn"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={drawerOpen}
        >
          <span className="ham-line" />
          <span className="ham-line" />
          <span className="ham-line" />
        </button>
      </div>

      {/* Mobile Off-Canvas Drawer */}
      {drawerOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}
      <aside
        className={`drawer-sidebar${drawerOpen ? ' drawer-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!drawerOpen}
      >
        <button
          className="drawer-close-btn"
          onClick={() => setDrawerOpen(false)}
          aria-label="Close navigation menu"
        >
          ✕
        </button>
        <SidebarContent onLinkClick={() => setDrawerOpen(false)} onDownload={() => { setDrawerOpen(false); handleDownloadResume() }} />
      </aside>
    </>
  )
}
