import { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'
import Background    from './components/Background.jsx'
import IntroCard     from './components/IntroCard.jsx'
import ProjectDeck   from './components/ProjectDeck.jsx'
import SkillsCard    from './components/SkillsCard.jsx'
import EducationCard from './components/EducationCard.jsx'
import projects      from './data/projects.js'
import skills        from './data/skills.js'
import education     from './data/education.js'
import SkillsBackground from './components/SkillsBackground.jsx'
import EducationBackground from './components/EducationBackground.jsx'
import Buttons from './components/Buttons.jsx';
import ProjectBackground from './components/ProjectBackground.jsx';
import './App.css'

export default function App() {
  const hasAnimatedRef = useRef(false)
  const snapLockRef = useRef(false)

  useEffect(() => {
    const getSections = () => Array.from(document.querySelectorAll('main .section'))

    const getCurrentSectionIdx = (sections) => {
      const y = window.scrollY
      let idx = 0

      for (let i = 0; i < sections.length; i += 1) {
        const currentTop = sections[i].offsetTop
        const nextTop = sections[i + 1]?.offsetTop ?? Number.POSITIVE_INFINITY
        if (y >= currentTop - 2 && y < nextTop - 2) {
          idx = i
          break
        }
      }

      return idx
    }

    const onWheel = (e) => {
      if (e.defaultPrevented) return
      if (Math.abs(e.deltaY) < 18) return

      const sections = getSections()
      if (sections.length === 0) return

      const direction = e.deltaY > 0 ? 1 : -1
      const currentIdx = getCurrentSectionIdx(sections)
      const targetIdx = Math.min(sections.length - 1, Math.max(0, currentIdx + direction))

      e.preventDefault()

      if (targetIdx === currentIdx || snapLockRef.current) return

      snapLockRef.current = true
      sections[targetIdx].scrollIntoView({ behavior: 'smooth', block: 'start' })

      window.setTimeout(() => {
        snapLockRef.current = false
      }, 620)
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', onWheel)
    }
  }, [])

  useEffect(() => {
    if (hasAnimatedRef.current) return
    hasAnimatedRef.current = true

    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 720,
    })

    timeline
      .add({
        targets: '.nav-shell',
        opacity: [0, 1],
        translateY: [18, 0],
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
        translateX: [-10, 0],
        delay: anime.stagger(90),
      }, '-=420')

    anime({
      targets: '.section-heading',
      opacity: [0, 1],
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
      // anime.js leaves an inline transform/opacity behind once the tween finishes,
      // which outranks the CSS hover rules (translateY lift, etc.) on these cards —
      // clear it so :hover styling from Card.css can take over again.
      complete: (anim) => {
        anim.animatables.forEach(({ target }) => {
          target.style.transform = ''
          target.style.opacity = ''
        })
      },
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
      <div className="layout persona-layout">

        <nav className="nav" aria-label="Primary navigation">
          <div className="nav-shell">
            <span className="nav-shell-triangle" aria-hidden="true" />
            <span className="nav-brand nav-brand--top">Menu</span>
          </div>

          <ul className="nav-links nav-menu-list">
            <li className="menu-item menu-item--heading">
              <a href="#about" className="menu-link">
                <span className="menu-link-inner" data-text="Heading">About</span>
              </a>
            </li>
            <li className="menu-item menu-item--command">
              <a href="#projects" className="menu-link">
                <span className="menu-link-inner" data-text="Command">Projects</span>
              </a>
            </li>
            <li className="menu-item menu-item--command">
              <a href="#skills" className="menu-link">
                <span className="menu-link-inner" data-text="Command">Skills</span>
              </a>
            </li>
            <li className="menu-item menu-item--logo">
              <a href="#education" className="menu-link">
                <span className="menu-link-inner" data-text="Logo">Education</span>
              </a>
            </li>
            <li className="menu-item menu-item--command">
              <a href={`${import.meta.env.BASE_URL}resume/mohammad-sufree.pdf`} download className="menu-link">
                <span className="menu-link-inner" data-text="Command">Resume</span>
              </a>
            </li>
          </ul>
        </nav>

        <main>
          <section id="about" className="section section--hero section--about" aria-label="Introduction">
            <Background />
            <h2 className="section-heading">
               About
            </h2>
            <div className="intro-spread-wrap">
              <IntroCard />
            </div>
          </section>

          <section id="projects" className="section section--solid-blue" aria-label="Projects">
            <ProjectBackground />
            <h2 className="section-heading">
               Projects
            </h2>
            <ProjectDeck projects={projects} />
          </section>

          <section id="skills" className="section section--skills" aria-label="Skills">
  <SkillsBackground />
  
  <div className="intro-spread-wrap">
    <h2 className="section-heading">
      Skills
    </h2>
    <div className="card-grid card-grid--skills">
      {skills.map((group) => (
        <SkillsCard
          key={group.category}
          category={group.category}
          items={group.items}
        />
      ))}
    </div>
  </div>
</section>

          <section id="education" className="section section--solid-blue" aria-label="Education">
            <EducationBackground />
            <h2 className="section-heading">Education
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
            &nbsp;Made with Love and Care (React + Vite) &nbsp;|&nbsp; sufree11 &nbsp;|&nbsp; 2026
            &nbsp;<span className="footer-bracket">]</span>
          </p>
        </footer>

      </div>
    </>
  )
}
