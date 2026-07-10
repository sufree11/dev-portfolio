import { useEffect, useRef } from 'react'
import eduVideo from '../assets/vid/bg-edu.mp4'
import './Background.css'

export default function ProjectBackground() {
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
        src={eduVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    </div>
  )
}