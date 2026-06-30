import { useEffect, useRef, useState } from 'react'
import introVideo from '../assets/vid/initialload.mp4'
import loopVideo from '../assets/vid/looped.mp4'
import './Background.css'

export default function Background() {
  const [phase, setPhase] = useState('intro')
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.play().catch(() => {})
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (phase === 'loop') {
      video.currentTime = 0
    }

    video.play().catch(() => {})
  }, [phase])

  const handleEnded = () => {
    if (phase === 'intro') {
      setPhase('loop')
    }
  }

  const handleCanPlay = () => {
    const video = videoRef.current
    if (!video) return

    video.play().catch(() => {})
  }

  return (
    <div className="persona-bg" aria-hidden="true">
      <div className="persona-bg__wash" />
      <div className="persona-bg__halo persona-bg__halo--left" />
      <div className="persona-bg__halo persona-bg__halo--right" />
      <div className="persona-bg__slash persona-bg__slash--pink" />
      <div className="persona-bg__slash persona-bg__slash--blue" />
      <video
        ref={videoRef}
        className={`bg-video ${phase === 'loop' ? 'bg-video--loop' : 'bg-video--intro'} is-active`}
        src={phase === 'loop' ? loopVideo : introVideo}
        autoPlay
        loop={phase === 'loop'}
        muted
        playsInline
        preload="auto"
        onEnded={handleEnded}
        onCanPlay={handleCanPlay}
      />
      <div className="persona-bg__overlay" />
      <div className="persona-bg__frame persona-bg__frame--top" />
      <div className="persona-bg__frame persona-bg__frame--bottom" />
      <div className="persona-bg__beam persona-bg__beam--top" />
      <div className="persona-bg__beam persona-bg__beam--bottom" />
    </div>
  )
}
