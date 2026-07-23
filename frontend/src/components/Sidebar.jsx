import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/Sidebar.css'

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Dashboard', icon: '🏠' },
  { to: '/resume-analysis', label: 'Resume Analysis', icon: '📄' },
  { to: '/skill-gap', label: 'Skill Gap', icon: '🧩' },
  { to: '/roadmap', label: 'Roadmap', icon: '🗺️' },
  { to: '/mock-interview', label: 'Mock Interview', icon: '🎤' },
  { to: '/jobs', label: 'Jobs', icon: '💼' },
  { to: '/profile', label: 'Profile', icon: '👤' },
]

function Sidebar({ open, onClose }) {
  const navigate = useNavigate()

  return (
    <>
      {open && <div className="sidebar__scrim" onClick={onClose} aria-hidden="true"></div>}
      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <div className="sidebar__logo" onClick={() => navigate('/')}>
          <span className="sidebar__logo-mark">S</span>
          <span className="sidebar__logo-text">SkillSync<span className="sidebar__logo-accent">AI</span></span>
        </div>

        <nav className="sidebar__nav">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`}
              onClick={onClose}
            >
              <span className="sidebar__link-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar__footer">
          <div className="sidebar__upgrade">
            <p className="sidebar__upgrade-title">Go Premium</p>
            <p className="sidebar__upgrade-sub">Unlock unlimited mock interviews</p>
            <button className="btn btn--primary sidebar__upgrade-btn">Upgrade</button>
          </div>
          <button className="sidebar__logout" onClick={() => navigate('/login')}>
            <span>⎋</span> Logout
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
