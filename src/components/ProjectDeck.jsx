import { useState, useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Card from './Card.jsx'
import './ProjectDeck.css'

export default function ProjectDeck({ projects }) {
  const [activeIdx, setActiveIdx]   = useState(0)
  const [exitingIdx, setExitingIdx] = useState(null)
  const [exitDir, setExitDir]       = useState('left')
  const [stageMinHeight, setStageMinHeight] = useState(530)
  const [portraitMap, setPortraitMap] = useState({})
  const wheelLockRef                = useRef(false)
  const stageRef                    = useRef(null)

  const handleHeroImageLoad = useCallback((projectId, e) => {
    const img = e.currentTarget
    if (!img?.naturalWidth || !img?.naturalHeight) return

    // Treat only clearly vertical images as portrait to avoid jitter near square ratios.
    const isPortrait = img.naturalHeight / img.naturalWidth >= 1.08
    setPortraitMap((prev) => {
      if (prev[projectId] === isPortrait) return prev
      return { ...prev, [projectId]: isPortrait }
    })
  }, [])

  const canNext = activeIdx < projects.length - 1
  const canPrev = activeIdx > 0

  const navigate = useCallback((dir) => {
    if (exitingIdx !== null) return
    const newIdx = activeIdx + dir
    if (newIdx < 0 || newIdx >= projects.length) return

    setExitDir(dir > 0 ? 'left' : 'right')
    setExitingIdx(activeIdx)
    setTimeout(() => {
      setActiveIdx(newIdx)
      setExitingIdx(null)
    }, 440)
  }, [activeIdx, exitingIdx, projects.length])

  const jumpTo = useCallback((target) => {
    if (exitingIdx !== null || target === activeIdx) return
    setExitDir(target > activeIdx ? 'left' : 'right')
    setExitingIdx(activeIdx)
    setTimeout(() => {
      setActiveIdx(target)
      setExitingIdx(null)
    }, 440)
  }, [activeIdx, exitingIdx])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') navigate(1)
      if (e.key === 'ArrowLeft')  navigate(-1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [navigate])

  const handleWheel = useCallback((e) => {
    if (e.deltaY !== 0) {
      e.preventDefault()
    }

    if (wheelLockRef.current || exitingIdx !== null) return

    const absDelta = Math.abs(e.deltaY)
    if (absDelta < 12) return

    const dir = e.deltaY > 0 ? 1 : -1
    const atStart = dir < 0 && activeIdx === 0
    const atEnd = dir > 0 && activeIdx === projects.length - 1
    if (atStart || atEnd) return

    wheelLockRef.current = true
    navigate(dir)
    setTimeout(() => {
      wheelLockRef.current = false
    }, 470)
  }, [activeIdx, exitingIdx, navigate, projects.length])

  useEffect(() => {
    const stageEl = stageRef.current
    if (!stageEl) return

    // Non-passive listener is required so preventDefault actually blocks page scroll.
    stageEl.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      stageEl.removeEventListener('wheel', handleWheel)
    }
  }, [handleWheel])

  const measureTallestCard = useCallback(() => {
    const stageEl = stageRef.current
    if (!stageEl) return

    const cards = stageEl.querySelectorAll('.deck-card-wrapper .cyber-card')
    let tallest = 0

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect()
      if (rect.height > tallest) tallest = rect.height
    })

    if (tallest > 0) {
      // Extra breathing room prevents animated card transforms from clipping controls.
      setStageMinHeight(Math.ceil(tallest + 14))
    }
  }, [])

  useEffect(() => {
    const stageEl = stageRef.current
    if (!stageEl) return

    measureTallestCard()

    const images = stageEl.querySelectorAll('.project-hero-image')
    const onLoad = () => measureTallestCard()
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', onLoad)
      }
    })

    window.addEventListener('resize', measureTallestCard)

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', onLoad)
      })
      window.removeEventListener('resize', measureTallestCard)
    }
  }, [measureTallestCard, projects])

  const getCardPos = (idx) => {
    if (idx === exitingIdx) return `exit-${exitDir}`
    const diff = idx - activeIdx
    if (diff < 0)  return 'past'
    if (diff === 0) return 'active'
    if (diff === 1) return 'behind-1'
    if (diff === 2) return 'behind-2'
    return 'hidden'
  }

  return (
    <div className="project-deck">

      {/* Card stack */}
      <div
        className="deck-stage"
        role="region"
        aria-label="Projects deck"
        ref={stageRef}
        style={{ '--deck-stage-height': `${stageMinHeight}px` }}
      >
        {projects.map((proj, i) => {
          const pos = getCardPos(i)
          const isPortrait = Boolean(portraitMap[proj.id])
          return (
            <div
              key={proj.id}
              className="deck-card-wrapper"
              data-pos={pos}
              aria-hidden={pos !== 'active' ? 'true' : undefined}
            >
              <Card className={`project-card${isPortrait ? ' project-card--portrait' : ''}`} tag="PROJECT">
                <div className="project-hero" aria-hidden={proj.heroImage ? undefined : 'true'}>
                  {proj.heroImage ? (
                    <img
                      className="project-hero-image"
                      src={proj.heroImage}
                      alt={proj.heroAlt || `${proj.title} project preview`}
                      loading="lazy"
                      onLoad={(e) => handleHeroImageLoad(proj.id, e)}
                    />
                  ) : (
                    <div className="project-hero-fallback" />
                  )}
                </div>
                <div className="project-header">
                  <h3 className="project-title">{proj.title}</h3>
                  {proj.status && <span className="project-status">{proj.status}</span>}
                </div>
                {proj.year && <span className="project-year">{proj.year}</span>}
                <p className="project-desc">{proj.description}</p>
                {proj.tech?.length > 0 && (
                  <ul className="tech-stack" aria-label="Technologies used">
                    {proj.tech.map((t) => (
                      <li key={t} className="tech-pill">{t}</li>
                    ))}
                  </ul>
                )}
                <div className="project-links">
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                      Live&nbsp;↗
                    </a>
                  )}
                  {proj.repoUrl && (
                    <a href={proj.repoUrl} target="_blank" rel="noreferrer" className="project-link">
                      Source&nbsp;↗
                    </a>
                  )}
                </div>
              </Card>
            </div>
          )
        })}
      </div>

      {/* Controls row */}
      <div className="deck-controls">
        <button
          className="deck-btn deck-btn--prev"
          onClick={() => navigate(-1)}
          disabled={!canPrev || exitingIdx !== null}
          aria-label="Previous project"
        >
          ← PREV
        </button>

        <span className="deck-counter" aria-live="polite">
          <span className="deck-counter-current">{String(activeIdx + 1).padStart(2, '0')}</span>
          <span className="deck-counter-sep">/</span>
          <span className="deck-counter-total">{String(projects.length).padStart(2, '0')}</span>
        </span>

        <button
          className="deck-btn deck-btn--next"
          onClick={() => navigate(1)}
          disabled={!canNext || exitingIdx !== null}
          aria-label="Next project"
        >
          NEXT →
        </button>
      </div>

      {/* Timeline */}
      <div className="deck-timeline" role="tablist" aria-label="Jump to project">
        <div className="deck-tl-track" aria-hidden="true" />
        {projects.map((proj, i) => (
          <button
            key={proj.id}
            role="tab"
            aria-selected={i === activeIdx}
            className={`deck-timeline-node${i === activeIdx ? ' active' : ''}${i < activeIdx ? ' past' : ''}`}
            onClick={() => jumpTo(i)}
            title={proj.title}
          >
            <span className="deck-tl-dot" />
            <span className="deck-tl-label">{proj.year ?? proj.title}</span>
          </button>
        ))}
      </div>

    </div>
  )
}

ProjectDeck.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id:          PropTypes.string.isRequired,
    title:       PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech:        PropTypes.arrayOf(PropTypes.string),
    liveUrl:     PropTypes.string,
    repoUrl:     PropTypes.string,
    status:      PropTypes.string,
    year:        PropTypes.string,
    heroImage:   PropTypes.string,
    heroAlt:     PropTypes.string,
  })).isRequired,
}
