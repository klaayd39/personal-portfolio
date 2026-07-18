import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <MobileNav />

      <main className="main-content">
        <div className="page-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <footer className="site-footer">
            © {new Date().getFullYear()} — Klyde Joseph Yabo
          </footer>
        </div>
      </main>
    </div>
  )
}
