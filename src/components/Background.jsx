import { useEffect, useState } from 'react'
import introVideo from '../assets/vid/initialload.mp4'
import loopVideo from '../assets/vid/looped.mp4'
import useVideoVisibility from './useVideoVisibility.js'
import './Background.css'

export default function Background() {
  const [phase, setPhase] = useState('intro')
  const { containerRef, videoRef, isVisible } = useVideoVisibility()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (phase === 'loop') {
      video.currentTime = 0
    }

    if (isVisible) video.play().catch(() => {})
  }, [phase, isVisible])

  const handleEnded = () => {
    if (phase === 'intro') {
      setPhase('loop')
    }
  }

  const handleCanPlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isVisible) video.play().catch(() => {})
  }

  return (
    <div ref={containerRef} className="persona-bg" aria-hidden="true">
      <div className="persona-bg__wash" />
      <div className="persona-bg__halo persona-bg__halo--left" />
      <video
        ref={videoRef}
        className={`bg-video1 ${phase === 'loop' ? 'bg-video1--loop' : 'bg-video1--intro'} is-active`}
        src={phase === 'loop' ? loopVideo : introVideo}
        loop={phase === 'loop'}
        muted
        playsInline
        preload="metadata"
        onEnded={handleEnded}
        onCanPlay={handleCanPlay}
      />
      <div className="persona-bg__beam persona-bg__beam--top" />
      <div className="persona-bg__beam persona-bg__beam--bottom" />
        
    </div>
    
  )
}
