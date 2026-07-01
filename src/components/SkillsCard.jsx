import PropTypes from 'prop-types'
import Card from './Card.jsx'
import './SkillsCard.css'

export default function SkillsCard({ category, items = [] }) {
  return (
    <Card className="skills-card" tag="SKILLS">
      <div className="skills-category">
        <h4 className="skills-cat-title">{category}</h4>
        <ul className="skills-list">
          {items.map((skill) => (
            <li key={skill.name} className="skill-item">
              <div className="skill-row">
                <span className="skill-name">{skill.name}</span>
                {skill.level != null && (
                  <span className="skill-pct">{skill.level}%</span>
                )}
              </div>
              {skill.level != null && (
                <div className="skill-bar-wrap" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100}>
                  <div
                    className="skill-bar-fill"
                    style={{ '--skill-level': `${skill.level}%` }}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

SkillsCard.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.number,
  })),
}
