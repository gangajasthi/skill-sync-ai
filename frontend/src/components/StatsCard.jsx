import '../styles/StatsCard.css'

function StatsCard({ value, label }) {
  return (
    <div className="stats-card">
      <span className="stats-card__value">{value}</span>
      <span className="stats-card__label">{label}</span>
    </div>
  )
}

export default StatsCard
