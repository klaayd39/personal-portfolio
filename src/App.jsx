import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react'
import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import Footer from './components/Footer'
import ScrollToTopFAB from './components/ScrollToTopFAB'
import { Analytics } from '@vercel/analytics/react'

const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const Resume = lazy(() => import('./pages/Resume'))
const Contact = lazy(() => import('./pages/Contact'))

// ScrollToTop Utility
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Sidebar />
      <MobileNav />

      <main className="main-content">
        <div className="page-wrap">
          <Suspense fallback={<div className="page-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', opacity: 0.4 }}></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>

          <Footer />
        </div>
      </main>
      <ScrollToTopFAB />
      <Analytics />
    </div>
  )
}
