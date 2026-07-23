import '../styles/InterviewCard.css'

function InterviewCard({ icon, title, description, questionCount, difficulty, onStart }) {
  return (
    <div className="interview-card">
      <div className="interview-card__icon">{icon}</div>
      <h3 className="interview-card__title">{title}</h3>
      <p className="interview-card__desc">{description}</p>

      <div className="interview-card__meta">
        <span>{questionCount} questions</span>
        <span className={`interview-card__difficulty interview-card__difficulty--${difficulty.toLowerCase()}`}>
          {difficulty}
        </span>
      </div>

      <button className="btn btn--primary interview-card__btn" onClick={onStart}>
        Start Interview
      </button>
    </div>
  )
}

export default InterviewCard
