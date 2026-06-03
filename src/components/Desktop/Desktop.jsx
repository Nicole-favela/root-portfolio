import { useState } from 'react'
import Window from '../Window/Window.jsx'
import Taskbar from '../Taskbar/Taskbar.jsx'
import { DESKTOP_ICONS } from '../../data/data.js'
import { Bio, Skills, Projects, Achievements, Contact, Resume } from '../apps/apps.jsx'
import './Desktop.css'

const APP_MAP = { Bio, Skills, Projects, Achievements, Contact, Resume }

const WINDOW_SIZES = {
  Projects:     { width: 680, height: 520 },
  Skills:       { width: 560, height: 480 },
  Bio:          { width: 520, height: 380 },
  Achievements: { width: 480, height: 380 },
  Contact:      { width: 460, height: 320 },
  Resume:       { width: 420, height: 280 },
  Photos:       { width: 800, height: 600 },
}

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState([])
  const [page, setPage] = useState('desktop')

  function handleAppClick() {
    //set page to regular view
    setPage('applications')
  }

  function openApp(iconId) {
    const icon = DESKTOP_ICONS.find(i => i.id === iconId)
    if (!icon) return
    if (openWindows.find(w => w.id === iconId)) return
    setOpenWindows(prev => [...prev, { ...icon, instanceId: Date.now() }])
  }

  function closeWindow(iconId) {
    setOpenWindows(prev => prev.filter(w => w.id !== iconId))
  }
  function handleBackToDesktop() {
    setPage('desktop')
  }

  return (
    <div className="desktop">
        {page === 'applications' ? (
        <div className="applications-view">
          <button className="applications-back" onClick={handleBackToDesktop}>
            ← Back to desktop
          </button>
          <h1>Applications</h1>
          <div className="applications-grid">
            {DESKTOP_ICONS.map(icon => (
              <button
                key={icon.id}
                className="applications-item"
                onClick={() => openApp(icon.id)}
              >
                <span>{icon.icon}</span>
                <span>{icon.label}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
    <>
      <div className="desktop__grid" aria-hidden="true" />
        <div className="desktop__overlay" aria-hidden="true" /> 

      <div className="desktop__watermark" aria-hidden="true">
        <span>KALI</span>
        <span>LINUX</span>
      </div>

      <div className="desktop__icons">
        {DESKTOP_ICONS.map((icon, i) => (
          <button
            key={icon.id}
            className="desktop__icon"
            onDoubleClick={() => openApp(icon.id)}
            style={{ animationDelay: `${i * 0.06}s` }}
            title={`Double-click to open ${icon.label}`}
          >
            <span className="desktop__icon-emoji">{icon.icon}</span>
            <span className="desktop__icon-label">{icon.label}</span>
          </button>
        ))}
      </div>

      {openWindows.map(win => {
        const AppComponent = APP_MAP[win.app]
        const size = WINDOW_SIZES[win.app] || { width: 560, height: 440 }
        return (
          <Window
            key={win.instanceId}
            title={`${win.icon} ${win.label}`}
            onClose={() => closeWindow(win.id)}
            width={size.width}
            height={size.height}
          >
            {AppComponent ? <AppComponent /> : <p>Coming soon.</p>}
          </Window>
        )
      })}
       {openWindows.length === 0 && (
        <div className="desktop__hint">double-click an icon to open</div>
      )}
      </>
    )}

      <Taskbar
        openApps={openWindows}
        onAppClick={(id) => {}}
        onAppBottomIconClick={handleAppClick}
      />

     
    </div>
  )
}