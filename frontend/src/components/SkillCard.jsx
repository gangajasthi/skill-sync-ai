import '../styles/SkillCard.css'

function SkillCard({ name, level, status, courseLabel }) {
  const isGap = status === 'gap'

  return (
    <div className={`skill-card ${isGap ? 'skill-card--gap' : 'skill-card--match'}`}>
      <div className="skill-card__head">
        <span className="skill-card__name">{name}</span>
        <span className="skill-card__status">{isGap ? 'Missing' : 'Have it'}</span>
      </div>
      <div className="skill-card__bar">
        <div
          className="skill-card__bar-fill"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <div className="skill-card__foot">
        <span>{level}% proficiency</span>
        {courseLabel && <span className="skill-card__course">{courseLabel}</span>}
      </div>
    </div>
  )
}

export default SkillCard
