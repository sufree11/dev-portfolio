import { useEffect, useRef, useState } from 'react'
import introVideo from '../assets/vid/initialload.mp4'
import loopVideo from '../assets/vid/looped.mp4'
import './Background.css'

export default function Background() {
  const [phase, setPhase] = useState('intro')
  const introVideoRef = useRef(null)
  const loopVideoRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const playVideo = async (video) => {
      if (!video) return

      try {
        await video.play()
        startedRef.current = true
      } catch {
        startedRef.current = false
      }
    }

    playVideo(introVideoRef.current)

    const intro = introVideoRef.current
    const loop = loopVideoRef.current

    const handleIntroEnded = () => {
      setPhase('loop')
      if (loop) {
        loop.currentTime = 0
        playVideo(loop)
      }
    }

    const handleLoopCanPlay = () => {
      if (phase === 'loop' && !startedRef.current) {
        playVideo(loop)
      }
    }

    intro?.addEventListener('ended', handleIntroEnded)
    loop?.addEventListener('canplay', handleLoopCanPlay)

    return () => {
      intro?.removeEventListener('ended', handleIntroEnded)
      loop?.removeEventListener('canplay', handleLoopCanPlay)
    }
  }, [])

  useEffect(() => {
    if (phase !== 'loop') return

    const loop = loopVideoRef.current
    if (!loop) return

    loop.currentTime = 0
    loop.play().catch(() => {})
  }, [phase])

  return (
    <div className="persona-bg" aria-hidden="true">
      <video
        ref={introVideoRef}
        className={`bg-video bg-video--intro ${phase === 'intro' ? 'is-active' : ''}`}
        src={introVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <video
        ref={loopVideoRef}
        className={`bg-video bg-video--loop ${phase === 'loop' ? 'is-active' : ''}`}
        src={loopVideo}
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="persona-bg__overlay" />
      <div className="persona-bg__frame persona-bg__frame--top" />
      <div className="persona-bg__frame persona-bg__frame--bottom" />
      <div className="persona-bg__flash" />
    </div>
  )
}
