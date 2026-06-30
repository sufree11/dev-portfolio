import Background    from './components/Background.jsx'
import IntroCard     from './components/IntroCard.jsx'
import ProjectCard   from './components/ProjectCard.jsx'
import EducationCard from './components/EducationCard.jsx'
import projects      from './data/projects.js'
import education     from './data/education.js'
import './App.css'

export default function App() {
  return (
    <>
      {/* Interactive canvas background */}
      <Background />

      <div className="layout">

        {/* ── Navigation ── */}
        <nav className="nav" aria-label="Primary navigation">
          <span className="nav-brand"><span aria-hidden="true">{'// '}</span>portfolio</span>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
          </ul>
        </nav>

        <main>

          {/* ── Hero / Intro ── */}
          <section id="about" className="section section--hero" aria-label="Introduction">
            <IntroCard />
          </section>

          {/* ── Projects ── */}
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

          {/* ── Education ── */}
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

        {/* ── Footer ── */}
        <footer className="footer">
          <p>
            <span className="footer-bracket">[</span>
            &nbsp;Built with React + Vite &nbsp;|&nbsp; sufree11
            &nbsp;<span className="footer-bracket">]</span>
          </p>
        </footer>

      </div>
    </>
  )
}
