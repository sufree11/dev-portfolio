import { useState } from 'react'
import Card from './Card.jsx'
import './IntroCard.css'

export default function IntroCard() {
  const [expanded, setExpanded] = useState(false)

  const contactIcons = {
    GitHub: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.36 6.84 9.72.5.1.68-.22.68-.5 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .08 1.52 1.05 1.52 1.05.88 1.56 2.31 1.11 2.87.85.09-.66.34-1.11.62-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.31 9.31 0 0 1 12 6.88c.85 0 1.7.12 2.5.36 1.9-1.33 2.75-1.05 2.75-1.05.54 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.33 4.8-4.56 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.48-.01 2.82 0 .27.18.6.69.5A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
    LinkedIn: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M19 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H5.66V9.73h2.68v8.61zM7 8.55a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.79h-2.67v-4.19c0-1-.02-2.29-1.39-2.29-1.4 0-1.62 1.09-1.62 2.21v4.27H9.99V9.73h2.56v1.17h.04c.36-.68 1.23-1.4 2.53-1.4 2.7 0 3.22 1.79 3.22 4.11v4.73z" />
      </svg>
    ),
    Instagram: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  }

  const secondaryCards = [
    {
      id: 'languages',
      label: 'Languages',
      kind: 'languages',
      items: ['Chinese', 'Malay', 'English'],
    },
    {
      id: 'quote',
      label: 'Quote',
      kind: 'quote',
      value: 'Memento Mori. Remember you will die. Time never waits. It delivers all equally to the same end.',
    },
    {
      id: 'contacts',
      label: 'Contacts',
      kind: 'contacts',
      contacts: [
        { label: 'GitHub', href: 'https://github.com/sufree11' },
        { label: 'LinkedIn', href: 'www.linkedin.com/in/sufree-shahni' },
        { label: 'Instagram', href: 'https://www.instagram.com/sufreeshahnii/' },
      ],
    },
  ]

  const handleMainCardClick = (e) => {
    if (e.target.closest('a')) return
    setExpanded((prev) => !prev)
  }

  const handleMainCardKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setExpanded((prev) => !prev)
    }
  }

  return (
    <div className={`intro-card-stack${expanded ? ' expanded' : ''}`}>
      {secondaryCards.map((card, idx) => (
        <div className="intro-secondary-card" key={card.id} style={{ '--secondary-index': idx }}>
          <Card className="intro-secondary-card-inner" tag={card.label}>
            <div className="intro-secondary-content">
              <h3 className="intro-secondary-title">{card.label}</h3>

              {card.kind === 'languages' && (
                <ul className="intro-secondary-list intro-secondary-list--languages">
                  {card.items.map((item) => (
                    <li key={item} className="intro-secondary-list-item">{item}</li>
                  ))}
                </ul>
              )}

              {card.kind === 'quote' && (
                <blockquote className="intro-secondary-quote">
                  <p>{card.value}</p>
                </blockquote>
              )}

              {card.kind === 'contacts' && (
                <ul className="intro-secondary-links">
                  {card.contacts.map((contact) => (
                    <li key={contact.label}>
                      <a href={contact.href} target="_blank" rel="noreferrer">
                        <span className="intro-secondary-link-icon" aria-hidden="true">
                          {contactIcons[contact.label]}
                        </span>
                        {contact.label} 
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Card>
        </div>
      ))}

      <div
        className="intro-main-clickzone"
        onClick={handleMainCardClick}
        onKeyDown={handleMainCardKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
      >
        <Card className="intro-card" tag="PROFILE">
          <span className="intro-click-indicator">{expanded ? 'TUCK!' : 'SPREAD!'}</span>
          <p className="intro-greeting">FILE 1 / XI-11</p>
          <h1 className="intro-name"> Sufree </h1>
          <h2 className="intro-name2"> Shahni </h2><br />
          <p className="intro-title"><span aria-hidden="true">{'> '}</span>Full-Stack Developer <br />{'> '} Software Engineer</p>
          <p className="intro-bio">
            <span className="highlight">"Who Am I?"</span> <br />
            Up-and-Coming software developer focused on building high-efficiency app platforms. <br />
            <span className="highlight">"How?"</span> <br />
            By focusing on user experience and performance, aiming to build platforms that last. 
          </p>
          <div className="intro-status">
            <span className="status-dot" />
            <span>Seeking internship</span>
          </div>
        </Card>
      </div>
    </div>
  )
}
