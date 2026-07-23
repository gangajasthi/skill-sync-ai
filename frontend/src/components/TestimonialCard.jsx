import '../styles/TestimonialCard.css'

function TestimonialCard({ quote, name, role, rating, initials }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__stars" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? 'star star--filled' : 'star'}>★</span>
        ))}
      </div>
      <p className="testimonial-card__quote">“{quote}”</p>
      <div className="testimonial-card__profile">
        <span className="testimonial-card__avatar">{initials}</span>
        <div>
          <p className="testimonial-card__name">{name}</p>
          <p className="testimonial-card__role">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
