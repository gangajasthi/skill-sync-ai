import { useNavigate } from 'react-router-dom'
import '../styles/Topbar.css'

function Topbar({ title, subtitle, onMenuClick, user }) {
  const navigate = useNavigate()

  return (
    <header className="topbar">
      <div className="topbar__left">
        <button className="topbar__menu-btn" aria-label="Open menu" onClick={onMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div>
          <h1 className="topbar__title">{title}</h1>
          {subtitle && <p className="topbar__subtitle">{subtitle}</p>}
        </div>
      </div>

      <div className="topbar__right">
        <div className="topbar__search">
          <span className="topbar__search-icon">⌕</span>
          <input type="text" placeholder="Search..." aria-label="Search" />
        </div>

        <button className="topbar__icon-btn" aria-label="Notifications">
          🔔
          <span className="topbar__badge"></span>
        </button>

       <button 
  className="topbar__profile" 
  onClick={() => navigate('/profile')}
>

  <span className="topbar__profile-avatar">

    {
      user?.name
      ?.split(" ")
      .map(word => word[0])
      .join("")
    }

  </span>


  <span className="topbar__profile-name">
    {user?.name}
  </span>


</button>
      </div>
    </header>
  )
}

export default Topbar
