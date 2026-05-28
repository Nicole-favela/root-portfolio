import { useState } from 'react'
import BootScreen from './components/BootScreen/BootScreen.jsx'
import Terminal from './components/Terminal/Terminal.jsx'
import Desktop from './components/Desktop/Desktop.jsx'

export default function App() {
  const [phase, setPhase] = useState('boot')

  return (
    <>
      <div className="scanlines" aria-hidden="true" />

      {phase === 'boot' && (
        <BootScreen onComplete={() => setPhase('terminal')} />
      )}

      {phase === 'terminal' && (
        <Terminal onComplete={() => setPhase('desktop')} />
      )}

      {phase === 'desktop' && (
        <Desktop />
      )}
    </>
  )
}