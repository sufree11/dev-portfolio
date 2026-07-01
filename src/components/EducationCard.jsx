import PropTypes from 'prop-types'
import Card from './Card.jsx'
import './EducationCard.css'

/**
 * @param {{
 *   institution: string,
 *   degree: string,
 *   field?: string,
 *   period: string,
 *   gpa?: string,
 *   achievements?: string[],
 * }} props
 */
export default function EducationCard({ institution, degree, field, period, gpa, achievements = [] }) {
  return (
    <Card className="edu-card" tag="EDU">
      <div className="edu-header">
        <h3 className="edu-institution">{institution}</h3>
        <span className="edu-period">{period}</span>
      </div>
      <p className="edu-degree">
        {degree}{field && <span className="edu-field"> — {field}</span>}
      </p>
      {gpa && <p className="edu-gpa">Results: <span className="highlight-val">{gpa}</span></p>}
      {achievements.length > 0 && (
        <ul className="edu-achievements">
          {achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      )}
    </Card>
  )
}

EducationCard.propTypes = {
  institution:  PropTypes.string.isRequired,
  degree:       PropTypes.string.isRequired,
  field:        PropTypes.string,
  period:       PropTypes.string.isRequired,
  gpa:          PropTypes.string,
  achievements: PropTypes.arrayOf(PropTypes.string),
}
