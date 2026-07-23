import { useState } from 'react'
import '../styles/JobCard.css'

function JobCard({ title, company, location, type, match, tags, postedAgo }) {
  const [saved, setSaved] = useState(false)

  return (
    <div className="job-card">
      <div className="job-card__top">
        <div className="job-card__logo">{company.charAt(0)}</div>
        <div className="job-card__match">{match}% match</div>
      </div>

      <h3 className="job-card__title">{title}</h3>
      <p className="job-card__company">{company} · {location}</p>

      <div className="job-card__tags">
        <span className="job-card__tag">{type}</span>
        {tags.map((tag) => (
          <span className="job-card__tag" key={tag}>{tag}</span>
        ))}
      </div>

      <div className="job-card__footer">
        <span className="job-card__posted">{postedAgo}</span>
        <div className="job-card__actions">
          <button
            className={`btn btn--ghost job-card__save ${saved ? 'job-card__save--active' : ''}`}
            onClick={() => setSaved((v) => !v)}
          >
            {saved ? 'Saved ✓' : 'Save'}
          </button>
          <button className="btn btn--primary">Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default JobCard
