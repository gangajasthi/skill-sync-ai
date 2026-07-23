import { useMemo, useState } from 'react'
import DashboardLayout from '../components/DashboardLayout.jsx'
import JobCard from '../components/JobCard.jsx'
import '../styles/Jobs.css'

const JOBS = [
  { title: 'Frontend Engineer', company: 'Nimbus Labs', location: 'Remote', type: 'Full-time', match: 92, tags: ['React', 'TypeScript'], postedAgo: '2 days ago' },
  { title: 'Junior React Developer', company: 'Brightloop', location: 'Bengaluru, IN', type: 'Full-time', match: 88, tags: ['React', 'Redux'], postedAgo: '4 days ago' },
  { title: 'UI Engineer', company: 'Studio Vector', location: 'Remote', type: 'Contract', match: 85, tags: ['CSS', 'Design Systems'], postedAgo: '1 week ago' },
  { title: 'Product Engineer', company: 'Fintrack', location: 'Chennai, IN', type: 'Full-time', match: 81, tags: ['React', 'Node.js'], postedAgo: '3 days ago' },
  { title: 'Software Engineer Intern', company: 'Delta Systems', location: 'Hyderabad, IN', type: 'Internship', match: 78, tags: ['JavaScript', 'APIs'], postedAgo: '5 days ago' },
  { title: 'Frontend Developer', company: 'Wovenly', location: 'Remote', type: 'Full-time', match: 75, tags: ['React', 'GraphQL'], postedAgo: '1 week ago' },
]

const TYPES = ['All', 'Full-time', 'Contract', 'Internship']

function Jobs() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')

  const filtered = useMemo(() => {
    return JOBS.filter((job) => {
      const matchesQuery = `${job.title} ${job.company}`.toLowerCase().includes(query.toLowerCase())
      const matchesType = type === 'All' || job.type === type
      return matchesQuery && matchesType
    })
  }, [query, type])

  return (
    <DashboardLayout title="Job Recommendations" subtitle="Roles matched to your real skill profile.">
      <div className="jobs-page">
        <div className="jobs-toolbar">
          <div className="jobs-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search by title or company..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="jobs-filters">
            {TYPES.map((t) => (
              <button
                key={t}
                className={t === type ? 'jobs-filter jobs-filter--active' : 'jobs-filter'}
                onClick={() => setType(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <p className="jobs-count">{filtered.length} roles matched to your profile</p>

        <div className="jobs-grid">
          {filtered.map((job) => (
            <JobCard key={job.title + job.company} {...job} />
          ))}
          {filtered.length === 0 && (
            <p className="jobs-empty">No jobs match your search. Try a different keyword or filter.</p>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Jobs
