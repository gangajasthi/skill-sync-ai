import { useNavigate } from 'react-router-dom'
import '../styles/Hero.css'

function Hero() {
  const navigate = useNavigate()

  const scrollToFeatures = (e) => {
    e.preventDefault()
    const el = document.getElementById('features')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="top">
      <div className="hero__glow hero__glow--one" aria-hidden="true"></div>
      <div className="hero__glow hero__glow--two" aria-hidden="true"></div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__eyebrow">AI Career Copilot</span>
          <h1 className="hero__title">
            Turn your resume into a <span className="hero__title-accent">career roadmap</span>
          </h1>
          <p className="hero__subtitle">
            SkillSync AI reads your resume the way a hiring manager does — then tells you
            exactly which skills to build, what to practice, and which jobs to chase.
          </p>
          <div className="hero__cta-group">
            <button className="btn btn--primary btn--lg" onClick={() => navigate('/resume-analysis')}>
              Start Free Analysis
            </button>
            <button className="btn btn--outline btn--lg" onClick={scrollToFeatures}>
              Learn More
            </button>
          </div>

          <div className="hero__proof">
            <div className="hero__proof-avatars">
              <span className="avatar avatar--1"></span>
              <span className="avatar avatar--2"></span>
              <span className="avatar avatar--3"></span>
            </div>
            <p>Trusted by <strong>500+</strong> students landing offers faster</p>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero-card hero-card--main">
            <div className="hero-card__header">
              <span className="hero-card__dot"></span>
              <span className="hero-card__dot"></span>
              <span className="hero-card__dot"></span>
              <span className="hero-card__title">Resume_Analysis.ai</span>
            </div>

            <div className="hero-card__body">
              <div className="ats-gauge">
                <svg viewBox="0 0 120 120" className="ats-gauge__ring">
                  <circle cx="60" cy="60" r="50" className="ats-gauge__track" />
                  <circle cx="60" cy="60" r="50" className="ats-gauge__value" />
                </svg>
                <div className="ats-gauge__label">
                  <span className="ats-gauge__number">87</span>
                  <span className="ats-gauge__unit">ATS Score</span>
                </div>
              </div>

              <div className="hero-card__skills">
                <span className="skill-pill skill-pill--match">React</span>
                <span className="skill-pill skill-pill--match">SQL</span>
                <span className="skill-pill skill-pill--gap">Docker</span>
                <span className="skill-pill skill-pill--gap">System Design</span>
              </div>
            </div>
          </div>

          <div className="hero-card hero-card--float hero-card--roadmap">
            <span className="hero-card--roadmap__icon">✦</span>
            <div>
              <p className="hero-card--roadmap__title">Roadmap ready</p>
              <p className="hero-card--roadmap__sub">6-week plan generated</p>
            </div>
          </div>

          <div className="hero-card hero-card--float hero-card--match">
            <span className="hero-card--match__icon">92%</span>
            <p>Job match found</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
