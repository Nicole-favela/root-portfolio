import { USER_INFO, SKILLS, PROJECTS, ACHIEVEMENTS } from '../../data/data.js'

export function Bio() {
  return (
    <div>
      <h2>$ cat bio.txt</h2>
      <p style={{ marginBottom: '1rem' }}>{USER_INFO.bio}</p>
      <h3>// contact</h3>
      <p>email    <a href={`mailto:${USER_INFO.email}`}>{USER_INFO.email}</a></p>
      <p>github   <a href={USER_INFO.github} target="_blank" rel="noreferrer">{USER_INFO.github}</a></p>
      <p>linkedin <a href={USER_INFO.linkedin} target="_blank" rel="noreferrer">{USER_INFO.linkedin}</a></p>
    </div>
  )
}

export function Skills() {
  return (
    <div>
      <h2>$ cat skills.md</h2>
      {Object.entries(SKILLS).map(([cat, list]) => (
        <div key={cat} style={{ marginBottom: '1rem' }}>
          <h3>## {cat}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
            {list.map(skill => (
              <span key={skill} style={{
                background: 'var(--kali-surface2)',
                border: '1px solid var(--kali-border)',
                borderRadius: '4px',
                padding: '2px 10px',
                fontSize: '0.75rem',
                color: 'var(--kali-purple)',
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function Projects() {
  return (
    <div>
      <h2>$ ls -la projects/</h2>
      {PROJECTS.map(p => (
        <div key={p.id} style={{
          marginBottom: '1.25rem',
          padding: '0.75rem 1rem',
          background: 'var(--kali-surface2)',
          border: '1px solid var(--kali-border)',
          borderRadius: '6px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ color: 'var(--kali-cyan)', fontWeight: 500 }}>{p.name}</span>
            <span style={{
              fontSize: '0.65rem',
              padding: '1px 7px',
              borderRadius: '10px',
              background: p.status === 'live' ? 'rgba(57,255,20,0.12)' : 'rgba(160,32,240,0.15)',
              color: p.status === 'live' ? 'var(--kali-green)' : 'var(--kali-purple)',
              border: `1px solid ${p.status === 'live' ? 'rgba(57,255,20,0.3)' : 'var(--kali-border)'}`,
            }}>
              {p.status}
            </span>
          </div>
          <p style={{ marginBottom: '8px', fontSize: '0.78rem' }}>{p.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '8px' }}>
            {p.tech.map(t => (
              <span key={t} style={{
                fontSize: '0.68rem',
                padding: '1px 7px',
                background: 'rgba(160,32,240,0.1)',
                border: '1px solid var(--kali-border)',
                borderRadius: '3px',
                color: 'var(--kali-text-dim)',
              }}>
                {t}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', fontSize: '0.75rem' }}>
            {p.github && <a href={p.github} target="_blank" rel="noreferrer">⬡ github</a>}
            {p.demo   && <a href={p.demo}   target="_blank" rel="noreferrer">↗ live demo</a>}
          </div>
        </div>
      ))}
    </div>
  )
}

export function Achievements() {
  return (
    <div>
      <h2>$ cat awards.txt</h2>
      {ACHIEVEMENTS.map((a, i) => (
        <div key={i} style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start',
          padding: '0.6rem 0',
          borderBottom: '1px solid var(--kali-surface2)',
        }}>
          <span style={{ color: 'var(--kali-text-dim)', minWidth: '40px', fontSize: '0.75rem' }}>
            {a.year}
          </span>
          <div>
            <span style={{ color: 'var(--kali-cyan)', display: 'block' }}>{a.title}</span>
            <span style={{ color: 'var(--kali-text-dim)', fontSize: '0.75rem' }}>{a.org}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export function Contact() {
  return (
    <div>
      <h2>$ ./contact.sh</h2>
      <p style={{ color: 'var(--kali-green)', marginBottom: '1rem' }}>
        # Initializing secure channel...
      </p>
      <p>Interested in working together? Reach out:</p>
      <br />
      <p><span style={{ color: 'var(--kali-purple)' }}>email</span>    {' → '}<a href={`mailto:${USER_INFO.email}`}>{USER_INFO.email}</a></p>
      <p><span style={{ color: 'var(--kali-purple)' }}>github</span>   {' → '}<a href={USER_INFO.github} target="_blank" rel="noreferrer">{USER_INFO.github}</a></p>
      <p><span style={{ color: 'var(--kali-purple)' }}>linkedin</span> {' → '}<a href={USER_INFO.linkedin} target="_blank" rel="noreferrer">{USER_INFO.linkedin}</a></p>
      <br />
      <p style={{ color: 'var(--kali-text-dim)', fontSize: '0.75rem' }}>
        I typically respond within 24 hours. ✦
      </p>
    </div>
  )
}

export function Resume() {
  return (
    <div className="resume">
      <h2>$ open resume.pdf</h2>
      <p style={{ marginBottom: '1rem', color: 'var(--kali-text-dim)' }}>
        View and download my resume at the dropbox link below
      </p>

      <a
        href="https://www.dropbox.com/scl/fo/eep3zeycha11h554og8ic/ALyoCN80iKOjg27SZUFuhn8?rlkey=uedtvtd69t34s7k834k3gi0pe&st=ify05ck7&dl=0"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-block',
          padding: '8px 20px',
          background: 'rgba(160,32,240,0.15)',
          border: '1px solid var(--kali-purple-dim)',
          borderRadius: '5px',
          color: 'var(--kali-purple)',
          fontSize: '0.8rem',
          textDecoration: 'none',
        }}
      >
        View Resume
      </a>
    </div>
  )
}