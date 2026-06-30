import Card from './Card.jsx'
import './IntroCard.css'

export default function IntroCard() {
  return (
    <Card className="intro-card" tag="[ INIT ]">
      <p className="intro-greeting">Hello, World.</p>
      <h1 className="intro-name">Your Name</h1>
      <p className="intro-title"><span aria-hidden="true">{'// '}</span>Full-Stack Developer &amp; Engineer</p>
      <p className="intro-bio">
        {/* ── Edit this paragraph with your own introduction ── */}
        A passionate developer who crafts high-performance systems at the intersection
        of code and creativity. Based in <span className="highlight">[Location]</span>,
        open to <span className="highlight">[Opportunities]</span>.
      </p>
      <div className="intro-links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        <span className="divider">|</span>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        <span className="divider">|</span>
        <a href="mailto:you@example.com">Email</a>
      </div>
      <div className="intro-status">
        <span className="status-dot" />
        <span>Available for hire</span>
      </div>
    </Card>
  )
}
