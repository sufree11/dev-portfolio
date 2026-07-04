import { useEffect, useRef } from 'react'
import skillsVideo from '../assets/vid/bg-projects.mp4'
import './Background.css'

export default function SkillsBackground() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.play().catch(() => {})
  }, [])

  return (
    <div className="persona-bg" aria-hidden="true">
      <video
        ref={videoRef}
        className="bg-video3 is-active"
        src={skillsVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    </div>
  )
}