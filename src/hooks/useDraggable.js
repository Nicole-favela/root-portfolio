import { useState, useEffect, useRef, useCallback } from 'react'

export function useDraggable(initialPos = { x: 100, y: 80 }) {
  const [pos, setPos] = useState(initialPos)
  const dragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })

  const onMouseDown = useCallback((e) => {
    dragging.current = true
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    }
    e.preventDefault()
  }, [pos])

  useEffect(() => {
    function onMove(e) {
      if (!dragging.current) return
      setPos({
        x: Math.max(0, e.clientX - offset.current.x),
        y: Math.max(0, e.clientY - offset.current.y),
      })
    }
    function onUp() { dragging.current = false }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return { pos, onMouseDown }
}