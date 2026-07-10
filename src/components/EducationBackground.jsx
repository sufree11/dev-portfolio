import { useEffect, useRef } from 'react'
import projectsVideo from '../assets/vid/bg-skills.mp4'
import './Background.css'

export default function EducationBackground() {
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
        className="bg-video4 is-active"
        src={projectsVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    </div>
  )
}
