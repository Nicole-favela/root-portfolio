import { useState, useEffect, useRef } from 'react'
import './Terminal.css'

const USER = 'nicole'
const HOST = 'kali'
const PATH = '~'

const MOTD = [
  { type: 'accent',  text: '┌──────────────────────────────────────────────────────────┐' },
  { type: 'accent',  text: '│                  Kali GNU/Linux Rolling                   │' },
  { type: 'accent',  text: '│                     Welcome!                              │' },
  { type: 'accent',  text: '└──────────────────────────────────────────────────────────┘' },
  { type: 'output',  text: '' },
  { type: 'output',  text: `Last login: ${new Date().toDateString()} from 127.0.0.1` },
  { type: 'output',  text: '' },
]

const HELP_TEXT = [
  { type: 'cyan',   text: 'Available commands:' },
  { type: 'output', text: '  whoami    — print current user' },
  { type: 'output', text: '  ls        — list directory contents' },
  { type: 'output', text: '  cat bio   — read bio file' },
  { type: 'output', text: '  startx    — launch desktop environment' },
  { type: 'output', text: '  clear     — clear terminal' },
  { type: 'output', text: '  help      — show this message' },
  { type: 'output', text: '' },
]

const LS_OUTPUT = [
  { type: 'output', text: 'total 48' },
  { type: 'cyan',   text: 'drwxr-xr-x  projects/   bio.txt   resume.pdf   skills.md   gallery/' },
  { type: 'output', text: '' },
]
const BIO_OUTPUT = [
  { type: 'success', text: '# bio.txt' },
  { type: 'output',  text: '' },
  { type: 'output',  text: 'Name    : Nicole' },
  { type: 'output',  text: 'Role    : Full Stack Engineer | M.S. in Comp Sci' },
  { type: 'output',  text: 'Stack   : React · Node · Python ·  AWS' },
  { type: 'output',  text: 'Passion : Building the future bit by bit.' },
  { type: 'output',  text: '' },
  { type: 'pink',    text: '> Type "startx" to launch my portfolio desktop.' },
  { type: 'output',  text: '' },
]
const STARTX_OUTPUT = [
  { type: 'output',  text: '' },
  { type: 'output',  text: 'Starting X.Org server...' },
  { type: 'success', text: '[  OK  ] X server started on :0' },
  { type: 'output',  text: 'Loading XFCE desktop environment...' },
  { type: 'success', text: '[  OK  ] Window manager (xfwm4) started' },
  { type: 'success', text: '[  OK  ] Panel (xfce4-panel) started' },
  { type: 'success', text: '[  OK  ] Desktop (xfdesktop) loaded' },
  { type: 'output',  text: '' },
  { type: 'pink',    text: '✦  Launching portfolio...' },
  { type: 'output',  text: '' },
]
function Prompt() {
  return (
    <span>
      <span className="prompt-user">{USER}</span>
      <span className="prompt-at">@</span>
      <span className="prompt-host">{HOST}</span>
      <span className="prompt-colon">:</span>
      <span className="prompt-path">{PATH}</span>
      <span className="prompt-sym">$ </span>
    </span>
  )
}



export default function Terminal({ onComplete }) {
    const [lines, setLines] = useState([])
    const [input, setInput] = useState('')
    const [history, setHistory] = useState([])
    const [histIdx, setHistIdx] = useState(-1)
    const [locked, setLocked] = useState(false)

    const bodyRef = useRef(null)
    const inputRef = useRef(null)
    function appendLines(newLines, callback){
        setLines(prev => [
            ...prev,
            {type: 'prompt', cmd: input},
            ...newLines,
        ])
        if (callback){
            setTimeout(callback, newLines.length * 80 + 200)
        }
    }
    function handleCommand(cmd){
        const trimmed_cmd = cmd.trim().toLowerCase()
        setHistory(prev => [cmd, ...prev])
        setHistIdx(-1)
        if (trimmed_cmd === 'clear'){
            setLines([])
            setInput('')
            return
        }

        if (trimmed_cmd === 'whoami'){
            appendLines([{type: 'output', text: USER}])

        }
        else if (trimmed_cmd === 'ls'){
            appendLines(LS_OUTPUT)
        }
        else if (trimmed_cmd === 'cat bio' || trimmed_cmd === 'cat bio.txt') {
            appendLines(BIO_OUTPUT)
        }
        else if (trimmed_cmd === 'startx') {
            setLocked(true)
            appendLines(STARTX_OUTPUT, () => onComplete())
        }
        else {
            appendLines([{type: 'error', text: `Command not found: ${cmd} - try 'help` }])
        }
    }

    function handleKey(e) {
        if (e.key === 'Enter'){
            handleCommand(input.trim())
        }
        else if (e.key === 'ArrowUp'){
            e.preventDefault()
            const idx = Math.min(histIdx +1, history.length -1) // bounds checking
            setHistIdx(idx) //set cur history index
            setInput(history[idx] || '') //make this the input
        }
        else if (e.key === 'ArrowDown'){
            e.preventDefault()
            const idx = Math.max(histIdx -1, -1) // bounds checking
            setHistIdx(idx) //set cur history index
            setInput(idx === -1 ? '' : history[idx]) //make this the input (empty if idx is -1)

        }
    }
    return(
        <div className="term">
            <div className="term__window">
                <div className="term__titlebar">
                <span className="term__dot term__dot--close" />
                <span className="term__dot term__dot--min" />
                <span className="term__dot term__dot--max" />
                <span className="term__title">{USER}s_portfolio@{HOST}: {PATH}</span>
                </div>
            <div className="term__body" >
                {lines.map((line, i) => 
                  line.type == 'prompt' ? (
                    <div key={i} className='term__line term_line--prompt'>
                        <Prompt />
                        <span className='prompt-cmd'>{line.cmd}</span>
                    </div>
                  ) : (
                    <div key={i} className={`term__line term_line--${line.type}`}>
                        {line.text}
                    </div>
                  )
                )}

            </div>
            {!locked && (
                <div className = 'term__input-row'>
                    <span className='term__prompt-prefix'><Prompt/></span>
                    <input
                        ref={inputRef}
                        className='term__input'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKey}
                        autoFocus
                        spellCheck={false}
                        autoComplete='off'
                    />
                </div>
            )}

            </div>
        </div>
    )

}