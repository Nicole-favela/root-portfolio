import { useState } from 'react'
import BootScreen from './components/BootScreen/BootScreen.jsx'
import Terminal from './components/Terminal/Terminal.jsx'
import Desktop from './components/Desktop/Desktop.jsx'

const alreadyBooted = sessionStorage.getItem('booted') === 'true' //uses the session storage to determine whether to show boot screen or skip to desktop so only closing tab and reopening shows boot screen again
export default function App() {
  const [phase, setPhase] = useState(alreadyBooted ? 'desktop' : 'boot')
  
  function handleBootComplete() {
    sessionStorage.setItem('booted', 'true')
    setPhase('terminal') //set next phase to see
  }

  function handleTerminalComplete() {
    setPhase('desktop') //swap to desktop view after terminal
  }

  return (
    <>
      <div className="scanlines" aria-hidden="true" />

      {phase === 'boot' && (
        <BootScreen onComplete={handleBootComplete} />
      )}

      {phase === 'terminal' && (
        <Terminal onComplete={handleTerminalComplete} />
      )}

      {phase === 'desktop' && (
        <Desktop />
      )}
    </>
  )
}