import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#footer" },
];

function Navbar() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const id = href.replace('#', '')
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a
          href="#top"
          className="navbar__logo"
          onClick={(e) => handleAnchorClick(e, '#top')}
        >
          <span className="navbar__logo-mark">S</span>
          <span className="navbar__logo-text">SkillSync<span className="navbar__logo-accent">AI</span></span>
        </a>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__link"
              onClick={(e) => handleAnchorClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar__actions navbar__actions--mobile">
            <button className="btn btn--ghost" onClick={() => navigate('/login')}>Login</button>
            <button className="btn btn--primary" onClick={() => navigate('/register')}>Get Started</button>
          </div>
        </nav>

        <div className="navbar__actions navbar__actions--desktop">
          <button className="btn btn--ghost" onClick={() => navigate('/login')}>Login</button>
          <button className="btn btn--primary" onClick={() => navigate('/register')}>Get Started</button>
        </div>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
