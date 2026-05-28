import { useRef } from 'react'
import { useDraggable } from '../../hooks/useDraggable.js'
import './Window.css'

let zCounter = 100

export default function Window({ title, children, onClose, initialPos, width = 640, height = 480 }) {
  const { pos, onMouseDown } = useDraggable(initialPos || {
    x: Math.random() * 160 + 60,
    y: Math.random() * 80 + 60,
  })
  const zRef = useRef(zCounter++)
  const windowRef = useRef(null)

  function bringToFront() {
    zRef.current = ++zCounter
    if (windowRef.current) windowRef.current.style.zIndex = zRef.current
  }

  return (
    <div
      ref={windowRef}
      className="win"
      style={{
        left: pos.x,
        top: pos.y,
        width,
        height,
        zIndex: zRef.current,
      }}
      onMouseDown={bringToFront}
    >
      <div className="win__titlebar" onMouseDown={onMouseDown}>
        <span className="win__dot win__dot--close" onClick={onClose} title="Close" />
        <span className="win__dot win__dot--min" title="Minimize" />
        <span className="win__dot win__dot--max" title="Maximize" />
        <span className="win__title">{title}</span>
      </div>

      <div className="win__body">
        {children}
      </div>
    </div>
  )
}