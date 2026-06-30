import PropTypes from 'prop-types'
import Card from './Card.jsx'
import './ProjectCard.css'

/**
 * @param {{
 *   title: string,
 *   description: string,
 *   tech: string[],
 *   liveUrl?: string,
 *   repoUrl?: string,
 *   status?: string,
 * }} props
 */
export default function ProjectCard({ title, description, tech = [], liveUrl, repoUrl, status }) {
  return (
    <Card className="project-card" tag="PROJECT">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        {status && <span className="project-status">{status}</span>}
      </div>
      <p className="project-desc">{description}</p>
      {tech.length > 0 && (
        <ul className="tech-stack" aria-label="Technologies used">
          {tech.map((t) => (
            <li key={t} className="tech-pill">{t}</li>
          ))}
        </ul>
      )}
      <div className="project-links">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noreferrer" className="project-link">
            Live&nbsp;↗
          </a>
        )}
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noreferrer" className="project-link">
            Source&nbsp;↗
          </a>
        )}
      </div>
    </Card>
  )
}

ProjectCard.propTypes = {
  title:       PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech:        PropTypes.arrayOf(PropTypes.string),
  liveUrl:     PropTypes.string,
  repoUrl:     PropTypes.string,
  status:      PropTypes.string,
}
