import { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout.jsx'
import ResumeUploader from '../components/ResumeUploader.jsx'
import '../styles/ResumeAnalysis.css'

const STRENGTHS = [
  'Clear, quantified impact statements in your experience section',
  'Consistent formatting and strong keyword density for Frontend Developer roles',
  'Well-structured project section with links to live demos',
]

const WEAKNESSES = [
  'Missing a dedicated skills section for ATS keyword scanning',
  'No measurable outcomes in your internship bullet points',
  'Resume length runs slightly over one page',
]

const SUGGESTIONS = [
  'Add a "Technical Skills" section listing React, TypeScript, and testing tools explicitly',
  'Quantify your internship contributions, e.g. "reduced page load time by 30%"',
  'Trim your objective statement to two lines to save space for experience',
]

function ResumeAnalysis() {
  const [analyzed, setAnalyzed] = useState(true)

  return (
    <DashboardLayout title="Resume Analysis" subtitle="Upload your resume to get an instant AI-powered breakdown.">
      <div className="resume-analysis">
        <section className="ra-panel">
          <h2 className="ra-panel__title">Upload Resume</h2>
          <ResumeUploader onAnalyze={() => setAnalyzed(true)} />
        </section>

        {analyzed && (
          <section className="ra-result">
            <div className="ra-result__score">
              <div className="ra-gauge">
                <svg viewBox="0 0 120 120" className="ra-gauge__ring">
                  <circle cx="60" cy="60" r="50" className="ra-gauge__track" />
                  <circle cx="60" cy="60" r="50" className="ra-gauge__value" />
                </svg>
                <div className="ra-gauge__label">
                  <span className="ra-gauge__number">87</span>
                  <span className="ra-gauge__unit">ATS Score</span>
                </div>
              </div>
              <div className="ra-result__summary">
                <h2>Strong resume, a few quick wins away from great</h2>
                <p>
                  Your resume passes most ATS filters for Frontend Developer roles. Addressing the
                  suggestions below could push your score above 95.
                </p>
              </div>
            </div>

            <div className="ra-columns">
              <div className="ra-card ra-card--strength">
                <h3>Strengths</h3>
                <ul>
                  {STRENGTHS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="ra-card ra-card--weakness">
                <h3>Weaknesses</h3>
                <ul>
                  {WEAKNESSES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="ra-card ra-card--suggestion">
                <h3>Suggestions</h3>
                <ul>
                  {SUGGESTIONS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
    </DashboardLayout>
  )
}

export default ResumeAnalysis
