import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Auth.css'

function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    setError('')
    navigate('/dashboard')
  }

  return (
    <div className="auth">
      <div className="auth__glow auth__glow--one" aria-hidden="true"></div>
      <div className="auth__glow auth__glow--two" aria-hidden="true"></div>

      <Link to="/" className="auth__logo">
        <span className="auth__logo-mark">S</span>
        <span>SkillSync<span className="auth__logo-accent">AI</span></span>
      </Link>

      <div className="auth__card">
        <div className="auth__header">
          <h1>Create your account</h1>
          <p>Start closing your skill gaps in the next 5 minutes.</p>
        </div>

        <button className="btn btn--outline auth__google">
          <span className="auth__google-icon">G</span> Continue with Google
        </button>

        <div className="auth__divider"><span>or sign up with email</span></div>

        <form className="auth__form" onSubmit={handleSubmit}>
          <label className="auth__field">
            <span>Full Name</span>
            <input
              type="text"
              name="name"
              placeholder="Jordan Alvarez"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="auth__field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="auth__field">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <label className="auth__field">
            <span>Confirm Password</span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>

          {error && <p className="auth__error">{error}</p>}

          <button type="submit" className="btn btn--primary auth__submit">Register</button>
        </form>

        <p className="auth__footer-text">
          Already have an account? <Link to="/login" className="auth__link auth__link--strong">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
