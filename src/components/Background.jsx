import { useEffect, useRef } from 'react'
import './Background.css'

/**
 * Interactive paper-like background.
 * Creates a textured canvas with grain/fibers and a mouse-reactive
 * highlight + shadow bloom to simulate moving over scrapbook paper.
 */
export default function Background() {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999, tx: -9999, ty: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: false })

    const patternCanvas = document.createElement('canvas')
    patternCanvas.width = 220
    patternCanvas.height = 220
    const pCtx = patternCanvas.getContext('2d')

    const spots = Array.from({ length: 18 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.08 + Math.random() * 0.2,
      alpha: 0.02 + Math.random() * 0.05,
    }))

    // --- sizing ---
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      mouseRef.current.tx = e.clientX
      mouseRef.current.ty = e.clientY
      if (mouseRef.current.x < 0) {
        mouseRef.current.x = e.clientX
        mouseRef.current.y = e.clientY
      }
    }
    const onMouseLeave = () => {
      mouseRef.current.tx = -9999
      mouseRef.current.ty = -9999
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseout', onMouseLeave)

    const drawPattern = () => {
      pCtx.fillStyle = '#d9c8a6'
      pCtx.fillRect(0, 0, patternCanvas.width, patternCanvas.height)

      const img = pCtx.getImageData(0, 0, patternCanvas.width, patternCanvas.height)
      const data = img.data

      for (let i = 0; i < data.length; i += 4) {
        const jitter = (Math.random() - 0.5) * 24
        data[i] += jitter
        data[i + 1] += jitter * 0.85
        data[i + 2] += jitter * 0.6
      }

      pCtx.putImageData(img, 0, 0)

      pCtx.globalAlpha = 0.08
      pCtx.strokeStyle = '#8d7a5f'
      pCtx.lineWidth = 0.65

      for (let i = 0; i < 95; i++) {
        const x = Math.random() * patternCanvas.width
        const y = Math.random() * patternCanvas.height
        const len = 4 + Math.random() * 11
        const angle = (-22 + Math.random() * 44) * (Math.PI / 180)

        pCtx.beginPath()
        pCtx.moveTo(x, y)
        pCtx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len)
        pCtx.stroke()
      }

      pCtx.globalAlpha = 1
    }

    drawPattern()
    const paperPattern = ctx.createPattern(patternCanvas, 'repeat')

    const draw = () => {
      const W = canvas.width
      const H = canvas.height

      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.11
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.11

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      ctx.fillStyle = '#d3bf98'
      ctx.fillRect(0, 0, W, H)

      if (paperPattern) {
        ctx.globalAlpha = 0.72
        ctx.fillStyle = paperPattern
        ctx.fillRect(0, 0, W, H)
        ctx.globalAlpha = 1
      }

      if (mx > 0 && my > 0) {
        const pressLight = ctx.createRadialGradient(mx, my, 10, mx, my, 250)
        pressLight.addColorStop(0, 'rgba(255, 250, 236, 0.52)')
        pressLight.addColorStop(0.55, 'rgba(255, 244, 214, 0.16)')
        pressLight.addColorStop(1, 'rgba(255, 244, 214, 0)')

        ctx.beginPath()
        ctx.arc(mx, my, 250, 0, Math.PI * 2)
        ctx.fillStyle = pressLight
        ctx.fill()

        const embossShadow = ctx.createRadialGradient(mx + 20, my + 16, 20, mx + 20, my + 16, 260)
        embossShadow.addColorStop(0, 'rgba(108, 66, 42, 0.22)')
        embossShadow.addColorStop(1, 'rgba(108, 66, 42, 0)')

        ctx.beginPath()
        ctx.arc(mx + 20, my + 16, 260, 0, Math.PI * 2)
        ctx.fillStyle = embossShadow
        ctx.fill()
      }

      spots.forEach((spot) => {
        const sx = spot.x * W
        const sy = spot.y * H
        const sr = spot.r * Math.min(W, H)
        const s = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr)
        s.addColorStop(0, `rgba(92, 59, 39, ${spot.alpha})`)
        s.addColorStop(1, 'rgba(92, 59, 39, 0)')
        ctx.fillStyle = s
        ctx.beginPath()
        ctx.arc(sx, sy, sr, 0, Math.PI * 2)
        ctx.fill()
      })

      const vignette = ctx.createRadialGradient(W * 0.5, H * 0.45, H * 0.1, W * 0.5, H * 0.45, H * 0.95)
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)')
      vignette.addColorStop(1, 'rgba(20, 10, 6, 0.42)')
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, W, H)

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseout', onMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />
}
