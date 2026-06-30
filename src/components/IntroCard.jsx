import Card from './Card.jsx'
import './IntroCard.css'

export default function IntroCard() {
  return (
    <Card className="intro-card" tag="PROFILE">
      <p className="intro-greeting">LEADER / XI-11</p>
      <h1 className="intro-name">Sufree Shahni</h1>
      <p className="intro-title"><span aria-hidden="true">{'// '}</span>Full-Stack Developer &amp; Engineer</p>
      <p className="intro-bio">
        <span className="highlight">"Memento Mori."</span> <br />
        Remember you will die. <br />
        Time never waits. <br />
        It delivers all equally to the same end.
      </p>
      <div className="intro-links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <span className="intro-link-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.36 6.84 9.72.5.1.68-.22.68-.5 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .08 1.52 1.05 1.52 1.05.88 1.56 2.31 1.11 2.87.85.09-.66.34-1.11.62-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.31 9.31 0 0 1 12 6.88c.85 0 1.7.12 2.5.36 1.9-1.33 2.75-1.05 2.75-1.05.54 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.33 4.8-4.56 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.48-.01 2.82 0 .27.18.6.69.5A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2z" />
            </svg>
          </span>
          <span>GitHub</span>
        </a>
        <span className="divider">|</span>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <span className="intro-link-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <path d="M19 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H5.66V9.73h2.68v8.61zM7 8.55a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.79h-2.67v-4.19c0-1-.02-2.29-1.39-2.29-1.4 0-1.62 1.09-1.62 2.21v4.27H9.99V9.73h2.56v1.17h.04c.36-.68 1.23-1.4 2.53-1.4 2.7 0 3.22 1.79 3.22 4.11v4.73z" />
            </svg>
          </span>
          <span>LinkedIn</span>
        </a>
        <span className="divider">|</span>
        <a href="mailto:you@example.com">
          <span className="intro-link-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2zm0 4.1-8 5-8-5V6l8 5 8-5v2.1z" />
            </svg>
          </span>
          <span>Email</span>
        </a>
      </div>
      <div className="intro-status">
        <span className="status-dot" />
        <span>Needing internship</span>
      </div>
    </Card>
  )
}
