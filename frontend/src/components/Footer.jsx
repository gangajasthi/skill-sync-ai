import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark">S</span>
            <span>SkillSync<span className="footer__logo-accent">AI</span></span>
          </div>
          <p className="footer__tagline">
            The AI career copilot that turns resumes into roadmaps and interviews into offers.
          </p>
          <div className="footer__socials">
            <a href="#top" aria-label="LinkedIn" className="footer__social">in</a>
            <a href="#top" aria-label="Twitter" className="footer__social">𝕏</a>
            <a href="#top" aria-label="Instagram" className="footer__social">◎</a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/resume-analysis">Resume AI</Link></li>
            <li><Link to="/roadmap">Learning Roadmap</Link></li>
            <li><Link to="/mock-interview">Mock Interview</Link></li>
            <li><Link to="/jobs">Job Matching</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li>support@skillsync.ai</li>
            <li>+1 (415) 555-0148</li>
            <li>San Francisco, CA</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} SkillSync AI. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#top">Privacy Policy</a>
          <a href="#top">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
