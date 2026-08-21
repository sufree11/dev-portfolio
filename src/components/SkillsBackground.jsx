import skillsVideo from '../assets/vid/bg-projects.mp4'
import useVideoVisibility from './useVideoVisibility.js'
import './Background.css'

export default function SkillsBackground() {
  const { containerRef, videoRef } = useVideoVisibility()

  return (
    <div ref={containerRef} className="persona-bg" aria-hidden="true">
      <video
        ref={videoRef}
        className="bg-video2 is-active"
        src={skillsVideo}
        loop
        muted
        playsInline
        preload="metadata"
      />
    </div>
  )
}