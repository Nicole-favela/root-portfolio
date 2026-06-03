import { useState, useEffect } from 'react'
import './Taskbar.css'

export default function Taskbar({ openApps, onAppClick, onAppBottomIconClick }) {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    function tick() {
      const now = new Date()
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
      setDate(now.toLocaleDateString([], { month: 'short', day: 'numeric' }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="taskbar">
      <div className="taskbar__left">
        <button className="taskbar__menu-btn" title="Applications">
          <span className="taskbar__kali-logo">⬡</span>
          <span className="taskbar__menu-link" onClick={onAppBottomIconClick}>
            Applications
          </span>
        </button>
      </div>

      <div className="taskbar__center">
        {openApps.map(app => (
          <button
            key={app.id}
            className="taskbar__app-btn"
            onClick={() => onAppClick(app.id)}
            title={app.label}
          >
            <span>{app.icon}</span>
            <span>{app.label}</span>
          </button>
        ))}
      </div>

      <div className="taskbar__tray">
        <span className="taskbar__tray-icon">▲</span>
        <span className="taskbar__tray-icon">♪</span>
        <div className="taskbar__clock">
          <span className="taskbar__time">{time}</span>
          <span className="taskbar__date">{date}</span>
        </div>
      </div>
    </div>
  )
}