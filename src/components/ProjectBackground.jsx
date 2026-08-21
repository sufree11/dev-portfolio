import eduVideo from '../assets/vid/bg-edu.mp4'
import useVideoVisibility from './useVideoVisibility.js'
import './Background.css'

export default function ProjectBackground() {
  const { containerRef, videoRef } = useVideoVisibility()

  return (
    <div ref={containerRef} className="persona-bg" aria-hidden="true">
      <video
        ref={videoRef}
        className="bg-video3 is-active"
        src={eduVideo}
        loop
        muted
        playsInline
        preload="metadata"
      />
    </div>
  )
}