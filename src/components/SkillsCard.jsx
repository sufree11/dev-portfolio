import PropTypes from 'prop-types'
import Card from './Card.jsx'
import './SkillsCard.css'

const ROMAN = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
const MAX_RANK = 10

export default function SkillsCard({ category, items = [] }) {
  return (
    <Card className="skills-card" tag="SKILLS">
      <div className="skills-category">
        <h4 className="skills-cat-title">{category}</h4>
        <ul className="skills-list">
          {items.map((skill, i) => {
            const rank = skill.level != null
              ? Math.min(MAX_RANK, Math.max(1, Math.ceil(skill.level / 10)))
              : 0
            const isMax = rank === MAX_RANK

            return (
              <li key={skill.name} className="skill-item">
                <div className={`skill-slab${isMax ? ' is-max' : ''}`}>
                  <span className="skill-numeral" aria-hidden="true">
                    {ROMAN[i] ?? i}
                  </span>
                  <div className="skill-slab-body">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>
              </li>
            )
          })}
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
