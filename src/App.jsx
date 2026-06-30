import { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'
import Background    from './components/Background.jsx'
import IntroCard     from './components/IntroCard.jsx'
import ProjectCard   from './components/ProjectCard.jsx'
import EducationCard from './components/EducationCard.jsx'
import projects      from './data/projects.js'
import education     from './data/education.js'
import './App.css'

export default function App() {
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (hasAnimatedRef.current) return
    hasAnimatedRef.current = true

    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 720,
    })

    timeline
      .add({
        targets: '.nav-brand, .menu-item',
        opacity: [0, 1],
        translateY: [18, 0],
        delay: anime.stagger(85),
      })
      .add({
        targets: '.intro-card',
        opacity: [0, 1],
        translateY: [36, 0],
        scale: [0.98, 1],
        rotate: [-1.4, -0.7],
      }, '-=260')
      .add({
        targets: '.intro-card > *',
        opacity: [0, 1],
        translateX: [-18, 0],
        delay: anime.stagger(90),
      }, '-=420')

    anime({
      targets: '.section-heading',
      opacity: [0, 1],
      translateX: [-28, 0],
      duration: 680,
      easing: 'easeOutExpo',
      delay: 420,
    })

    anime({
      targets: '.card-grid .cyber-card',
      opacity: [0, 1],
      translateY: [32, 0],
      rotate: [-1.3, 0],
      scale: [0.97, 1],
      delay: anime.stagger(85, { start: 540 }),
      duration: 700,
      easing: 'easeOutExpo',
    })

    anime({
      targets: '.footer',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      easing: 'easeOutExpo',
      delay: 900,
    })
  }, [])

  return (
    <>
      <Background />

      <div className="layout persona-layout">

        <nav className="nav" aria-label="Primary navigation">
          <span className="nav-brand nav-brand--top">
            <span className="nav-brand-mark" aria-hidden="true">P3R</span>
            <span className="nav-brand-text">Body Text And Menu</span>
          </span>

          <ul className="nav-links nav-menu-list">
            <li className="menu-item menu-item--heading">
              <a href="#about" className="menu-link" data-text="Heading">
                <span className="menu-link-inner" data-text="Heading">About</span>
              </a>
            </li>
            <li className="menu-item menu-item--command">
              <a href="#projects" className="menu-link" data-text="Command">
                <span className="menu-link-inner" data-text="Command">Projects</span>
              </a>
            </li>
            <li className="menu-item menu-item--logo">
              <a href="#education" className="menu-link" data-text="Logo">
                <span className="menu-link-inner" data-text="Logo">Education</span>
              </a>
            </li>
          </ul>

          <span className="nav-brand nav-brand--bottom">New Rodin Pro / Command</span>
        </nav>

        <main>
          <section id="about" className="section section--hero" aria-label="Introduction">
            <IntroCard />
          </section>

          <section id="projects" className="section" aria-label="Projects">
            <h2 className="section-heading">
              <span className="heading-prefix">01.</span> Projects
            </h2>
            <div className="card-grid">
              {projects.map((p) => (
                <ProjectCard key={p.id} {...p} />
              ))}
            </div>
          </section>

          <section id="education" className="section" aria-label="Education">
            <h2 className="section-heading">
              <span className="heading-prefix">02.</span> Education
            </h2>
            <div className="card-grid card-grid--edu">
              {education.map((e) => (
                <EducationCard key={e.id} {...e} />
              ))}
            </div>
          </section>

        </main>

        <footer className="footer">
          <p>
            <span className="footer-bracket">[</span>
            &nbsp;Made with React + Vite &nbsp;|&nbsp; sufree11
            &nbsp;<span className="footer-bracket">]</span>
          </p>
        </footer>

      </div>
    </>
  )
}
