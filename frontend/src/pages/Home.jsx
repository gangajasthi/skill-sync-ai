import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import StatsCard from '../components/StatsCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/Home.css'

const FEATURES = [
  {
    icon: '📄',
    title: 'Resume Analyzer',
    description: 'Upload your resume and get an instant AI breakdown of structure, clarity, and impact.',
  },
  {
    icon: '🎯',
    title: 'ATS Score',
    description: 'See exactly how applicant tracking systems read your resume before a recruiter does.',
  },
  {
    icon: '🧩',
    title: 'Skill Gap Detection',
    description: 'Compare your current skills against your target role and see what is missing.',
  },
  {
    icon: '🗺️',
    title: 'Learning Roadmap',
    description: 'Get a week-by-week plan of courses and projects tailored to close your skill gaps.',
  },
  {
    icon: '🎤',
    title: 'Mock Interview',
    description: 'Practice with an AI interviewer that scores your answers and tracks improvement.',
  },
  {
    icon: '💼',
    title: 'Job Matching',
    description: 'Discover roles that fit your real skill profile, ranked by match percentage.',
  },
]

const STEPS = [
  { step: '1', title: 'Upload Resume', desc: 'Drop your resume in any format and let SkillSync AI read it in seconds.' },
  { step: '2', title: 'AI Analysis', desc: 'Our model scores structure, keywords, and ATS compatibility.' },
  { step: '3', title: 'Skill Gap Detection', desc: 'We compare your skills against your target role.' },
  { step: '4', title: 'Roadmap', desc: 'Receive a personalized weekly and monthly learning plan.' },
  { step: '5', title: 'Interview', desc: 'Practice mock interviews with instant AI feedback.' },
  { step: '6', title: 'Jobs', desc: 'Get matched to roles that fit your improved skill profile.' },
]

const STATS = [
  { value: '500+', label: 'Students' },
  { value: '1000+', label: 'Resumes Analyzed' },
  { value: '95%', label: 'Success Rate' },
  { value: 'AI Powered', label: 'Fully Automated' },
]

const TESTIMONIALS = [
  {
    quote: 'SkillSync AI told me exactly which skills to learn before I applied anywhere else. My interview callback rate doubled.',
    name: 'Ananya Rao',
    role: 'Frontend Developer, Bengaluru',
    rating: 5,
    initials: 'AR',
  },
  {
    quote: 'The mock interview scoring felt more honest than any career coach I paid for. I walked into my real interview prepared.',
    name: 'Daniel Kim',
    role: 'Data Analyst, Seoul',
    rating: 5,
    initials: 'DK',
  },
  {
    quote: 'The roadmap broke a scary six-month goal into weekly tasks I actually finished. That structure made all the difference.',
    name: 'Priya Menon',
    role: 'Final Year Student, Chennai',
    rating: 4,
    initials: 'PM',
  },
]

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <Hero />

      <section className="section" id="features">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Features</span>
            <h2 className="section__title">Everything your job search was missing</h2>
            <p className="section__subtitle">
              Six AI-powered tools that work together, from your first resume upload to your first offer letter.
            </p>
          </div>
          <div className="features-grid">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted" id="how-it-works">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">How It Works</span>
            <h2 className="section__title">From resume to offer, in six steps</h2>
          </div>
          <div className="steps">
            {STEPS.map((s, i) => (
              <div className="step" key={s.step}>
                <div className="step__marker">{s.step}</div>
                <div className="step__content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                {i < STEPS.length - 1 && <div className="step__connector" aria-hidden="true"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((s) => (
              <StatsCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted" id="testimonials">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Testimonials</span>
            <h2 className="section__title">Job seekers who found their edge</h2>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta__inner">
          <h2>Ready to close your skill gap?</h2>
          <p>Start with a free resume analysis — no credit card, no commitment.</p>
          <button className="btn btn--primary btn--lg" onClick={() => navigate('/register')}>
            Get Started Free
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
