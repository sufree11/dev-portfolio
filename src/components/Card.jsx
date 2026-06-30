import PropTypes from 'prop-types'
import './Card.css'

/**
 * Base card with cyberpunk hover effects.
 * Children receive the styled container.
 */
export default function Card({ children, className = '', tag = '' }) {
  return (
    <div className={`cyber-card ${className}`}>
      <span className="card-accent" aria-hidden="true" />
      <div className="card-main">
        {tag && (
          <span className="card-badge">
            <span className="card-badge-name">{tag}</span>
            <span className="card-badge-sub">TALK</span>
          </span>
        )}
        <div className="card-content">{children}</div>
        <span className="card-scanline" aria-hidden="true" />
      </div>
    </div>
  )
}

Card.propTypes = {
  children:  PropTypes.node.isRequired,
  className: PropTypes.string,
  tag:       PropTypes.string,
}
