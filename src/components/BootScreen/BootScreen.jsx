import { useState, useEffect } from 'react'
import './BootScreen.css'

const BOOT_LINES = [
  { delay: 200,  text: '[    0.000000] Booting Kali GNU/Linux 2024.4 (6.11.2-amd64)' },
  { delay: 350,  text: '[    0.000000] Command line: BOOT_IMAGE=/vmlinuz root=/dev/mapper/kali--vg-root ro quiet splash' },
  { delay: 500,  text: '[    0.122304] ACPI: IRQ0 used by override.', status: 'ok' },
  { delay: 650,  text: '[    0.234891] PCI: Using configuration type 1 for base access', status: 'ok' },
  { delay: 800,  text: '[    0.501234] SCSI subsystem initialized', status: 'ok' },
  { delay: 950,  text: '[    0.912000] systemd[1]: Starting system initialization...', status: 'ok' },
  { delay: 1100, text: '[    1.102345] Starting Load Kernel Modules...', status: 'ok' },
  { delay: 1250, text: '[    1.340221] Starting Apply Kernel Variables...', status: 'ok' },
  { delay: 1400, text: '[    1.512000] Starting Network Time Synchronization...', status: 'ok' },
  { delay: 1600, text: '[    1.780000] Started D-Bus System Message Bus.', status: 'ok' },
  { delay: 1750, text: '[    1.890123] wlan0: renamed from wlp2s0', status: 'warn' },
  { delay: 1900, text: '[    2.001230] eth0: 1000Mbps Full Duplex', status: 'ok' },
  { delay: 2050, text: '[    2.210000] Starting Network Manager...', status: 'ok' },
  { delay: 2200, text: '[    2.330000] Started OpenSSH Server Daemon.', status: 'ok' },
  { delay: 2350, text: '[    2.456789] Starting Metasploit Framework Daemon...', status: 'ok' },
  { delay: 2500, text: '[    2.560000] tor.service: loaded', status: 'ok' },
  { delay: 2650, text: '[    2.780000] Reached target Graphical Interface.', status: 'ok' },
  { delay: 2800, text: '[    2.890000] systemd[1]: Startup finished in 2.890s.' },
]

const DRAGON_ASCII =
`        .:*:.
      .:*:*:*:.
    .:*:*:*:*:*:.
  ·:· KALI LINUX ·:·
    ':*:*:*:*:*:'
      ':*:*:*:'
        ':*:'
  @@@@@@@@@@@@@@@@@@
 @@@@@          @@@@@
@@@    ________    @@@
@@   /  ______  \\   @@
@@  |  /  __  \\  |  @@
@@  | |  /  \\  | |  @@
@@  | |  \\__/  | |  @@
@@  |  \\______/  |  @@
@@   \\__________/   @@
@@@                @@@
 @@@@@          @@@@@
  @@@@@@@@@@@@@@@@@@`

export default function BootScreen({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([])
  const [progress, setProgress] = useState(0)
  const [progLabel, setProgLabel] = useState('Initializing...')

  useEffect(() => {
    const timers = []

    BOOT_LINES.forEach((line, i) => {
      timers.push(setTimeout(() => {
        setVisibleLines(prev => [...prev, line])
        setProgress(Math.round(((i + 1) / BOOT_LINES.length) * 100))
        if (i === Math.floor(BOOT_LINES.length * 0.3))  setProgLabel('Loading modules...')
        if (i === Math.floor(BOOT_LINES.length * 0.6))  setProgLabel('Starting services...')
        if (i === Math.floor(BOOT_LINES.length * 0.85)) setProgLabel('Launching desktop...')
      }, line.delay))
    })

    timers.push(setTimeout(() => {
      onComplete()
    }, BOOT_LINES[BOOT_LINES.length - 1].delay + 600))

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <div className="boot">
      <div className="boot__logo">
        <pre className="boot__dragon">{DRAGON_ASCII}</pre>
        <p className="boot__kali-label">Kali Linux · Rolling · amd64</p>
      </div>

      <div className="boot__log">
        {visibleLines.map((line, i) => (
          <div key={i} className="boot__line" style={{ animationDelay: `${i * 0.02}s` }}>
            {line.status === 'ok'   && <span className="ok">[  OK  ]</span>}
            {line.status === 'fail' && <span className="fail">[ FAIL ]</span>}
            {line.status === 'warn' && <span className="warn">[ WARN ]</span>}
            {line.text}
          </div>
        ))}
      </div>

      <div className="boot__progress-wrap">
        <div className="boot__progress-label">
          <span>{progLabel}</span>
          <span>{progress}%</span>
        </div>
        <div className="boot__progress-bar">
          <div className="boot__progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}