import Card from './Card.jsx'
import './IntroCard.css'

export default function IntroCard() {
  return (
    <Card className="intro-card" tag="PROFILE">
      <p className="intro-greeting">PLAYER FILE / XI-11</p>
      <h1 className="intro-name">Sufree Shahni</h1>
      <p className="intro-title"><span aria-hidden="true">{'// '}</span>Full-Stack Developer &amp; Engineer</p>
      <p className="intro-bio">
        A developer who builds polished interfaces and dependable systems with a strong
        focus on motion, clarity, and performance. Based in <span className="highlight">[Location]</span>,
        available for <span className="highlight">[Opportunities]</span>.
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
