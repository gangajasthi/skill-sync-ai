import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout.jsx'
import '../styles/Dashboard.css'

const QUICK_ACTIONS = [
  { icon: '📄', label: 'Analyze Resume', to: '/resume-analysis' },
  { icon: '🧩', label: 'Check Skill Gap', to: '/skill-gap' },
  { icon: '🎤', label: 'Start Mock Interview', to: '/mock-interview' },
  { icon: '💼', label: 'Browse Jobs', to: '/jobs' },
]

const ACTIVITY = [
  { icon: '📄', text: 'Resume analyzed — ATS score improved to 87', time: '2 hours ago' },
  { icon: '🎤', text: 'Completed Mock Interview: Frontend Developer', time: 'Yesterday' },
  { icon: '🗺️', text: 'Roadmap milestone "React Advanced" marked complete', time: '2 days ago' },
  { icon: '💼', text: 'Applied to Frontend Engineer at Nimbus Labs', time: '3 days ago' },
]

function Dashboard() {
  const navigate = useNavigate()

  return (
    <DashboardLayout title="Welcome back, Priya" subtitle="Here's how your career journey is progressing.">
      <div className="dash-grid">
        <div className="dash-card dash-card--score">
          <p className="dash-card__label">ATS Score</p>
          <p className="dash-card__value">87<span>/100</span></p>
          <p className="dash-card__trend dash-card__trend--up">▲ 6 pts this week</p>
        </div>
        <div className="dash-card dash-card--gap">
          <p className="dash-card__label">Skills Matched</p>
          <p className="dash-card__value">12<span>/16</span></p>
          <p className="dash-card__trend">4 gaps remaining</p>
        </div>
        <div className="dash-card dash-card--interview">
          <p className="dash-card__label">Interview Readiness</p>
          <p className="dash-card__value">78<span>%</span></p>
          <p className="dash-card__trend dash-card__trend--up">▲ 12% since last practice</p>
        </div>
        <div className="dash-card dash-card--jobs">
          <p className="dash-card__label">Job Matches</p>
          <p className="dash-card__value">9<span> new</span></p>
          <p className="dash-card__trend">Avg. match 84%</p>
        </div>
      </div>

      <div className="dash-columns">
        <section className="dash-panel">
          <div className="dash-panel__header">
            <h2>Quick Actions</h2>
          </div>
          <div className="quick-actions">
            {QUICK_ACTIONS.map((action) => (
              <button key={action.label} className="quick-action" onClick={() => navigate(action.to)}>
                <span className="quick-action__icon">{action.icon}</span>
                <span>{action.label}</span>
              </button>
            ))}
          </div>

          <div className="dash-panel__header dash-panel__header--spaced">
            <h2>Career Progress</h2>
            <span className="dash-panel__tag">Last 6 weeks</span>
          </div>
          <div className="chart-dummy">
            {[40, 55, 48, 68, 74, 87].map((val, i) => (
              <div className="chart-dummy__bar" key={i} style={{ height: `${val}%` }}>
                <span>{val}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="dash-panel dash-panel--side">
          <div className="dash-panel__header">
            <h2>Profile Summary</h2>
          </div>
          <div className="profile-summary">
            <span className="profile-summary__avatar">PM</span>
            <p className="profile-summary__name">Priya Menon</p>
            <p className="profile-summary__role">Aspiring Frontend Developer</p>
            <div className="profile-summary__bar">
              <div className="profile-summary__bar-fill" style={{ width: '72%' }}></div>
            </div>
            <p className="profile-summary__complete">Profile 72% complete</p>
            <button className="btn btn--outline profile-summary__btn" onClick={() => navigate('/profile')}>
              Complete Profile
            </button>
          </div>

          <div className="dash-panel__header dash-panel__header--spaced">
            <h2>Recent Activity</h2>
          </div>
          <ul className="activity-list">
            {ACTIVITY.map((item) => (
              <li key={item.text}>
                <span className="activity-list__icon">{item.icon}</span>
                <div>
                  <p>{item.text}</p>
                  <span>{item.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
