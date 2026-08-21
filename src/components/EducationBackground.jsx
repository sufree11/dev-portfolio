import projectsVideo from '../assets/vid/bg-skills.mp4'
import useVideoVisibility from './useVideoVisibility.js'
import './Background.css'

export default function EducationBackground() {
  const { containerRef, videoRef } = useVideoVisibility()

  return (
    <div ref={containerRef} className="persona-bg" aria-hidden="true">
      <video
        ref={videoRef}
        className="bg-video4 is-active"
        src={projectsVideo}
        loop
        muted
        playsInline
        preload="metadata"
      />
    </div>
  )
}
