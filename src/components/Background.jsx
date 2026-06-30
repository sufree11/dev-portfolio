import { useEffect, useRef } from 'react'
import './Background.css'

/**
 * Interactive cyberpunk grid background.
 * Renders a perspective-style dot-grid on a <canvas>.
 * A glowing radial field follows the mouse cursor.
 */
export default function Background() {
  const canvasRef = useRef(null)
  const mouseRef  = useRef({ x: -9999, y: -9999 })
  const rafRef    = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')

    // --- sizing ---
    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // --- mouse tracking ---
    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove)

    // --- grid config ---
    const COLS   = 48
    const ROWS   = 28
    const DOT_R  = 1.2   // base dot radius
    const GLOW_R = 220   // mouse influence radius
    const PRIMARY = '#181c3d' // background fill

    // --- draw loop ---
    const draw = () => {
      const W = canvas.width
      const H = canvas.height
      const { x: mx, y: my } = mouseRef.current

      // Clear
      ctx.fillStyle = PRIMARY
      ctx.fillRect(0, 0, W, H)

      const stepX = W / COLS
      const stepY = H / ROWS

      // Draw grid lines (faint)
      ctx.lineWidth   = 0.4
      ctx.strokeStyle = 'rgba(35,94,117,0.18)'

      // vertical
      for (let c = 0; c <= COLS; c++) {
        const x = c * stepX
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, H)
        ctx.stroke()
      }
      // horizontal
      for (let r = 0; r <= ROWS; r++) {
        const y = r * stepY
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(W, y)
        ctx.stroke()
      }

      // Draw intersection dots
      for (let c = 0; c <= COLS; c++) {
        for (let r = 0; r <= ROWS; r++) {
          const x = c * stepX
          const y = r * stepY

          const dx   = x - mx
          const dy   = y - my
          const dist = Math.sqrt(dx * dx + dy * dy)
          const norm = Math.max(0, 1 - dist / GLOW_R) // 0→1

          const radius = DOT_R + norm * 3.5

          // Color interpolation: secondary → accent based on proximity
          const r0 = 35,  g0 = 94,  b0 = 117  // secondary
          const r1 = 0,   g1 = 255, b1 = 231  // accent
          const ri = Math.round(r0 + (r1 - r0) * norm)
          const gi = Math.round(g0 + (g1 - g0) * norm)
          const bi = Math.round(b0 + (b1 - b0) * norm)
          const alpha = 0.25 + norm * 0.75

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${ri},${gi},${bi},${alpha})`
          ctx.fill()

          // Add a tiny glow halo near the cursor
          if (norm > 0.3) {
            const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 4)
            glowGradient.addColorStop(0, `rgba(0,255,231,${norm * 0.25})`)
            glowGradient.addColorStop(1, 'rgba(0,255,231,0)')
            ctx.beginPath()
            ctx.arc(x, y, radius * 4, 0, Math.PI * 2)
            ctx.fillStyle = glowGradient
            ctx.fill()
          }
        }
      }

      // Large cursor glow blob
      if (mx > 0 && my > 0) {
        const blob = ctx.createRadialGradient(mx, my, 0, mx, my, GLOW_R * 0.6)
        blob.addColorStop(0,   'rgba(35,94,117,0.12)')
        blob.addColorStop(0.6, 'rgba(0,255,231,0.04)')
        blob.addColorStop(1,   'rgba(0,0,0,0)')
        ctx.beginPath()
        ctx.arc(mx, my, GLOW_R * 0.6, 0, Math.PI * 2)
        ctx.fillStyle = blob
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />
}
