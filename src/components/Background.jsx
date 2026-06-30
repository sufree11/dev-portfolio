import { useEffect, useRef, useState } from 'react'
import introVideo from '../assets/vid/initialload.mp4'
import loopVideo from '../assets/vid/looped.mp4'
import './Background.css'

export default function Background() {
  const [phase, setPhase] = useState('intro')
  const introVideoRef = useRef(null)
  const loopVideoRef = useRef(null)
  const loopReadyRef = useRef(false)
  const introEndedRef = useRef(false)

  useEffect(() => {
    const playVideo = async (video) => {
      if (!video) return

      try {
        await video.play()
      } catch {
        // Autoplay can be blocked briefly on some browsers; the next
        // user-visible state change will re-attempt playback.
      }
    }

    playVideo(introVideoRef.current)

    const intro = introVideoRef.current
    const loop = loopVideoRef.current

    const startLoop = () => {
      if (!loop) return

      loop.currentTime = 0
      playVideo(loop)

      if (introEndedRef.current) {
        setPhase('loop')
      }
    }

    const handleIntroEnded = () => {
      introEndedRef.current = true
      setPhase('loop')

      if (loopReadyRef.current) {
        startLoop()
        return
      }

      if (loop) {
        loop.currentTime = 0
        loop.load()
      }
    }

    const handleLoopReady = () => {
      loopReadyRef.current = true

      if (introEndedRef.current) {
        startLoop()
      }
    }

    intro?.addEventListener('ended', handleIntroEnded)
    loop?.addEventListener('canplaythrough', handleLoopReady)
    loop?.addEventListener('loadeddata', handleLoopReady)

    if (loop) {
      loop.currentTime = 0
      loop.load()
      loop.play().catch(() => {})
    }

    return () => {
      intro?.removeEventListener('ended', handleIntroEnded)
      loop?.removeEventListener('canplaythrough', handleLoopReady)
      loop?.removeEventListener('loadeddata', handleLoopReady)
    }
  }, [])

  useEffect(() => {
    if (phase !== 'loop') return

    const loop = loopVideoRef.current
    if (!loop) return

    if (loopReadyRef.current) {
      loop.currentTime = 0.04
      loop.play().catch(() => {})
    }
  }, [phase])

  return (
    <div className="persona-bg" aria-hidden="true">
      <div className="persona-bg__wash" />
      <div className="persona-bg__halo persona-bg__halo--left" />
      <div className="persona-bg__halo persona-bg__halo--right" />
      <div className="persona-bg__slash persona-bg__slash--pink" />
      <div className="persona-bg__slash persona-bg__slash--blue" />
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
        className={`bg-video bg-video--loop ${phase === 'loop' ? 'is-active' : 'is-warm'}`}
        src={loopVideo}
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="persona-bg__overlay" />
      <div className="persona-bg__frame persona-bg__frame--top" />
      <div className="persona-bg__frame persona-bg__frame--bottom" />
      <div className="persona-bg__beam persona-bg__beam--top" />
      <div className="persona-bg__beam persona-bg__beam--bottom" />
    </div>
  )
}
