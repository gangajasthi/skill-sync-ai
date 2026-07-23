import { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout.jsx'
import RoadmapCard from '../components/RoadmapCard.jsx'
import '../styles/LearningRoadmap.css'

const WEEKLY_PLAN = [
  { period: 'Week 1', title: 'TypeScript Fundamentals', status: 'done', tasks: ['Complete TypeScript basics course', 'Convert one React component to TS', 'Read the official handbook chapters 1-3'] },
  { period: 'Week 2', title: 'Testing with Jest & RTL', status: 'done', tasks: ['Write unit tests for 3 components', 'Learn mocking and snapshot testing', 'Add tests to your portfolio project'] },
  { period: 'Week 3', title: 'Docker for Frontend Devs', status: 'active', tasks: ['Containerize your React app', 'Write a Dockerfile and docker-compose file', 'Deploy locally with Docker'] },
  { period: 'Week 4', title: 'System Design Basics', status: 'upcoming', tasks: ['Study client-server architecture', 'Learn caching and load balancing basics', 'Design a mock URL shortener'] },
]

const MONTHLY_PLAN = [
  { period: 'Month 1', title: 'Core Technical Foundations', status: 'done', tasks: ['TypeScript, Testing, and Docker fundamentals', 'Rebuild portfolio project using new skills'] },
  { period: 'Month 2', title: 'System Design & Advanced React', status: 'active', tasks: ['System design fundamentals', 'Advanced React patterns (context, performance)'] },
  { period: 'Month 3', title: 'Interview Readiness', status: 'upcoming', tasks: ['Daily mock interviews', 'Mock system design rounds', 'Apply to 20+ matched roles'] },
]

function LearningRoadmap() {
  const [view, setView] = useState('weekly')
  const plan = view === 'weekly' ? WEEKLY_PLAN : MONTHLY_PLAN
  const completed = plan.filter((p) => p.status === 'done').length

  return (
    <DashboardLayout title="Learning Roadmap" subtitle="Your personalized path to closing every skill gap.">
      <div className="roadmap-page">
        <div className="roadmap-toolbar">
          <div className="roadmap-toggle">
            <button
              className={view === 'weekly' ? 'roadmap-toggle__btn roadmap-toggle__btn--active' : 'roadmap-toggle__btn'}
              onClick={() => setView('weekly')}
            >
              Weekly Plan
            </button>
            <button
              className={view === 'monthly' ? 'roadmap-toggle__btn roadmap-toggle__btn--active' : 'roadmap-toggle__btn'}
              onClick={() => setView('monthly')}
            >
              Monthly Plan
            </button>
          </div>
          <div className="roadmap-progress">
            <span>{completed}/{plan.length} milestones complete</span>
            <div className="roadmap-progress__bar">
              <div
                className="roadmap-progress__fill"
                style={{ width: `${(completed / plan.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="roadmap-timeline">
          {plan.map((item) => (
            <RoadmapCard key={item.period} {...item} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default LearningRoadmap
