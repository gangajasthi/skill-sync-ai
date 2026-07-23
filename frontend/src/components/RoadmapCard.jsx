import '../styles/RoadmapCard.css'

function RoadmapCard({ period, title, tasks, status }) {
  return (
    <div className={`roadmap-card roadmap-card--${status}`}>
      <div className="roadmap-card__marker">
        {status === 'done' ? '✓' : status === 'active' ? '●' : ''}
      </div>
      <div className="roadmap-card__body">
        <span className="roadmap-card__period">{period}</span>
        <h3 className="roadmap-card__title">{title}</h3>
        <ul className="roadmap-card__tasks">
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RoadmapCard
