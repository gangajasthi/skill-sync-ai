import DashboardLayout from '../components/DashboardLayout.jsx'
import SkillCard from '../components/SkillCard.jsx'
import '../styles/SkillGap.css'

const CURRENT_SKILLS = [
  { name: 'React', level: 88, status: 'match' },
  { name: 'JavaScript (ES6+)', level: 82, status: 'match' },
  { name: 'HTML & CSS', level: 90, status: 'match' },
  { name: 'Git & GitHub', level: 75, status: 'match' },
  { name: 'REST APIs', level: 70, status: 'match' },
]

const MISSING_SKILLS = [
  { name: 'TypeScript', level: 20, status: 'gap', courseLabel: 'TypeScript Fundamentals' },
  { name: 'Docker', level: 10, status: 'gap', courseLabel: 'Docker for Frontend Devs' },
  { name: 'System Design', level: 15, status: 'gap', courseLabel: 'System Design Basics' },
  { name: 'Testing (Jest)', level: 25, status: 'gap', courseLabel: 'Testing React Apps' },
]

function SkillGap() {
  return (
    <DashboardLayout title="Skill Gap Analysis" subtitle="Compared against Frontend Developer role requirements.">
      <div className="skill-gap">
        <section className="sg-section">
          <div className="sg-section__header">
            <h2>Current Skills</h2>
            <span className="sg-section__count">{CURRENT_SKILLS.length} skills matched</span>
          </div>
          <div className="sg-grid">
            {CURRENT_SKILLS.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </section>

        <section className="sg-section">
          <div className="sg-section__header">
            <h2>Missing Skills</h2>
            <span className="sg-section__count sg-section__count--gap">{MISSING_SKILLS.length} gaps found</span>
          </div>
          <div className="sg-grid">
            {MISSING_SKILLS.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </section>

        <section className="sg-recommend">
          <h2>Recommended Courses</h2>
          <div className="sg-recommend__grid">
            {MISSING_SKILLS.map((skill) => (
              <div className="sg-recommend__card" key={skill.name}>
                <div className="sg-recommend__icon">🎓</div>
                <div>
                  <p className="sg-recommend__title">{skill.courseLabel}</p>
                  <p className="sg-recommend__sub">Closes gap in {skill.name}</p>
                </div>
                <button className="btn btn--outline sg-recommend__btn">View</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}

export default SkillGap
