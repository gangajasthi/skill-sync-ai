import { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout.jsx'
import InterviewCard from '../components/InterviewCard.jsx'
import '../styles/MockInterview.css'

const CATEGORIES = [
  { icon: '💻', title: 'Frontend Development', description: 'React, JavaScript, and CSS fundamentals with live coding questions.', questionCount: 12, difficulty: 'Medium' },
  { icon: '🧠', title: 'Data Structures & Algorithms', description: 'Arrays, trees, graphs, and complexity analysis questions.', questionCount: 15, difficulty: 'Hard' },
  { icon: '🗣️', title: 'Behavioral', description: 'STAR-format questions about teamwork, conflict, and leadership.', questionCount: 8, difficulty: 'Easy' },
  { icon: '🏗️', title: 'System Design', description: 'Architecture, scaling, and trade-off discussion questions.', questionCount: 6, difficulty: 'Hard' },
]

const PAST_SCORES = [
  { date: 'Jul 18, 2026', category: 'Frontend Development', score: 82 },
  { date: 'Jul 10, 2026', category: 'Behavioral', score: 91 },
  { date: 'Jul 02, 2026', category: 'Data Structures & Algorithms', score: 68 },
  { date: 'Jun 24, 2026', category: 'Frontend Development', score: 74 },
]

function MockInterview() {
  const [selected, setSelected] = useState(null)

  return (
    <DashboardLayout title="Mock Interview" subtitle="Practice with AI and track your interview readiness.">
      <div className="mock-interview">
        <section>
          <h2 className="mi-section-title">Interview Categories</h2>
          <div className="mi-grid">
            {CATEGORIES.map((cat) => (
              <InterviewCard key={cat.title} {...cat} onStart={() => setSelected(cat.title)} />
            ))}
          </div>
        </section>

        {selected && (
          <div className="mi-active">
            <div>
              <p className="mi-active__label">Interview in progress</p>
              <p className="mi-active__title">{selected}</p>
            </div>
            <button className="btn btn--primary" onClick={() => setSelected(null)}>End Session</button>
          </div>
        )}

        <section className="mi-columns">
          <div className="mi-panel">
            <h2 className="mi-section-title">Past Scores</h2>
            <div className="mi-scores">
              {PAST_SCORES.map((entry) => (
                <div className="mi-score-row" key={entry.date + entry.category}>
                  <div>
                    <p className="mi-score-row__category">{entry.category}</p>
                    <p className="mi-score-row__date">{entry.date}</p>
                  </div>
                  <span className={`mi-score-badge ${entry.score >= 80 ? 'mi-score-badge--good' : entry.score >= 60 ? 'mi-score-badge--mid' : 'mi-score-badge--low'}`}>
                    {entry.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mi-panel">
            <h2 className="mi-section-title">Performance Graph</h2>
            <div className="mi-graph">
              {PAST_SCORES.slice().reverse().map((entry) => (
                <div className="mi-graph__col" key={entry.date}>
                  <div className="mi-graph__bar" style={{ height: `${entry.score}%` }}></div>
                  <span>{entry.date.slice(0, 6)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}

export default MockInterview
