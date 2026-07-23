import { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout.jsx'
import '../styles/Profile.css'

const SKILLS = ['React', 'JavaScript', 'HTML/CSS', 'Git', 'REST APIs', 'Figma']
const CERTIFICATES = [
  { title: 'Meta Frontend Developer Professional Certificate', issuer: 'Meta · Coursera', date: 'Mar 2026' },
  { title: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', date: 'Jan 2026' },
]

function Profile() {
  const [tab, setTab] = useState('overview')

  return (
    <DashboardLayout title="Profile" subtitle="Manage your career profile and account settings.">
      <div className="profile-page">
        <div className="profile-hero">
          <div className="profile-hero__avatar">PM</div>
          <div className="profile-hero__info">
            <h2>Priya Menon</h2>
            <p>Aspiring Frontend Developer · Chennai, India</p>
            <div className="profile-hero__tags">
              <span>500+ community</span>
              <span>87 ATS Score</span>
              <span>4 Certificates</span>
            </div>
          </div>
          <button className="btn btn--outline">Edit Profile</button>
        </div>

        <div className="profile-tabs">
          {['overview', 'skills', 'certificates', 'resume', 'settings'].map((t) => (
            <button
              key={t}
              className={tab === t ? 'profile-tab profile-tab--active' : 'profile-tab'}
              onClick={() => setTab(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {tab === 'overview' && (
          <div className="profile-card">
            <h3>About</h3>
            <p className="profile-about">
              Final-year Computer Science student passionate about building accessible, performant
              web interfaces. Currently focused on closing skill gaps in TypeScript and system design
              ahead of full-time interviews.
            </p>
            <div className="profile-grid">
              <div><span>Email</span><p>priya.menon@example.com</p></div>
              <div><span>Phone</span><p>+91 98765 43210</p></div>
              <div><span>Location</span><p>Chennai, Tamil Nadu, IN</p></div>
              <div><span>Target Role</span><p>Frontend Developer</p></div>
            </div>
          </div>
        )}

        {tab === 'skills' && (
          <div className="profile-card">
            <h3>Skills</h3>
            <div className="profile-skill-pills">
              {SKILLS.map((skill) => (
                <span key={skill} className="profile-skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        )}

        {tab === 'certificates' && (
          <div className="profile-card">
            <h3>Certificates</h3>
            <div className="profile-cert-list">
              {CERTIFICATES.map((cert) => (
                <div className="profile-cert" key={cert.title}>
                  <div className="profile-cert__icon">🏅</div>
                  <div>
                    <p className="profile-cert__title">{cert.title}</p>
                    <p className="profile-cert__meta">{cert.issuer} · {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'resume' && (
          <div className="profile-card">
            <h3>Resume</h3>
            <div className="profile-resume">
              <div className="profile-resume__icon">📄</div>
              <div>
                <p className="profile-resume__title">Priya_Menon_Resume.pdf</p>
                <p className="profile-resume__meta">Last updated Jul 21, 2026 · 214 KB</p>
              </div>
              <button className="btn btn--outline">Replace</button>
            </div>
          </div>
        )}

        {tab === 'settings' && (
          <div className="profile-card">
            <h3>Settings</h3>
            <div className="profile-settings">
              <label className="profile-setting-row">
                <span>Email notifications for job matches</span>
                <input type="checkbox" defaultChecked />
              </label>
              <label className="profile-setting-row">
                <span>Weekly progress summary email</span>
                <input type="checkbox" defaultChecked />
              </label>
              <label className="profile-setting-row">
                <span>Make profile visible to recruiters</span>
                <input type="checkbox" />
              </label>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default Profile
