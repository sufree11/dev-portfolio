import PropTypes from 'prop-types'
import './Card.css'

/**
 * Base card with cyberpunk hover effects.
 * Children receive the styled container.
 */
export default function Card({ children, className = '', tag = '' }) {
  return (
    <div className={`cyber-card ${className}`}>
      {tag && <span className="card-tag">{tag}</span>}
      {children}
      <span className="card-scanline" aria-hidden="true" />
    </div>
  )
}

Card.propTypes = {
  children:  PropTypes.node.isRequired,
  className: PropTypes.string,
  tag:       PropTypes.string,
}
