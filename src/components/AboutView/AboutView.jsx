import { useState, useEffect } from 'react'
import { USER_INFO, SKILLS, PROJECTS } from '../../data/data.js'
import './AboutView.css'


const ROLES = [
  'Software Engineer',
  'Full Stack Engineer Intern',
  'Ex-Series Lead Software Engineer',
  'Ex-CTO',
  
]
const TOP_STACK = ['React', 'Python',  'AWS', 'GCP','PostgreSQL', 'TypeScript', 'Linux', 'Node JS', 'FASTAPI', 'Pinecone']

const ACTIVITY = [
  { text: 'da2f821 (HEAD -> main, origin/main) update portfolio with recent wins', time: '2m ago' },
  { text: 'bee885 Update README.md with installation instructions', time: '1h ago' },
  { text: '831fee6 Add grad picture to profile', time: '1d ago' },
  { text: 'a1c2e3f initial commit', time: '3d ago' },
  
]
export default function AboutView({ photoSrc }) {
  const [roleText, setRoleText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  // Typewriter effect for roles
  useEffect(() => {
    const current = ROLES[roleIdx]

    if (!deleting && charIdx < current.length) {
      const t = setTimeout(() => {
        setRoleText(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      }, 65)
      return () => clearTimeout(t)
    }

    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(t)
    }

    if (deleting && charIdx > 0) {
      const t = setTimeout(() => {
        setRoleText(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      }, 35)
      return () => clearTimeout(t)
    }

    if (deleting && charIdx === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % ROLES.length)
    }
  }, [charIdx, deleting, roleIdx])

  return (
    <div className="about">

      {/* ── Top section: photo + identity ── */}
      <div className="about__top">

        {/* Photo */}
        <div className="about__photo-wrap">
          {photoSrc ? (
            <img src={photoSrc} alt="Profile" className="about__photo" />
          ) : (
            <div className="about__photo-placeholder">
              <span>👤</span>
              <span>photo.jpg</span>
            </div>
          )}
          <span className="about__photo-status">available for work</span>
        </div>

        {/* Identity */}
        <div className="about__identity">
          <p className="about__prompt-line">
            <span className="prompt-user">{USER_INFO.name.toLowerCase().replace(' ', '')}</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">portfolio</span>
            <span className="prompt-sym">:~$ </span>
            <span className="prompt-cmd">whoami</span>
          </p>

          <h1 className="about__name">
            {USER_INFO.name.split(' ')[0]}{' '}
            <span>{USER_INFO.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="about__role">
            {roleText}
            <span className="about__role-cursor" />
          </p>

          <div className="about__meta">
            <div className="about__meta-line">
              <span className="key">location</span>
              <span className="val">{USER_INFO.location}</span>
            </div>
            <div className="about__meta-line">
              <span className="key">email</span>
              <span className="val">{USER_INFO.email}</span>
            </div>
            <div className="about__meta-line">
              <span className="key">status</span>
              <span className="val" style={{ color: 'var(--kali-green)' }}>
                open to opportunities
              </span>
            </div>
          </div>

          {/* Social buttons- TODO add later */}
          {/* <div className="about__socials">

              href={USER_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="about__social-btn github"
            >
              <span>⬡</span> GitHub
            </a>
            
              href={USER_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="about__social-btn linkedin"
            >
              <span>in</span> LinkedIn
            </a>
            
              href={`mailto:${USER_INFO.email}`}
              className="about__social-btn email"
            >
              <span>✉</span> Email
            </a>
            
              href=""
              target="_blank"
              rel="noreferrer"
              className="about__social-btn resume"
            >
              <span>↓</span> Resume
            </a>
          </div> */}
        </div>
      </div>

      <hr className="about__divider" />

      {/* ── Bottom cards grid ── */}
      <div className="about__grid">

        {/* About / mission */}
        <div className="about__card">
          <p className="about__card-title">
            <span>$ </span>cat about.txt
          </p>
          <p className="about__mission">
            {USER_INFO.short_about.split('\n').map((line, i) => (
              <span key={i}>
                {line.split(/(elegant|clean|reliable|design|engineering)/gi).map((part, j) =>
                  /elegant|clean|reliable|design|engineering/i.test(part)
                    ? <em key={j}>{part}</em>
                    : part
                )}
                <br />
              </span>
            ))}
          </p>
        </div>

        {/* Stack */}
        <div className="about__card">
          <p className="about__card-title">
            <span>$ </span>cat stack.json
          </p>
          <div className="about__stack">
            {TOP_STACK.map((s, i) => (
              <span key={s} className={`about__pill ${i < 3 ? 'hot' : ''}`}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div className="about__card">
          <p className="about__card-title">
            <span>$ </span>git log --oneline
          </p>
          <div className="about__activity">
            {ACTIVITY.map((a, i) => (
              <div key={i} className="about__activity-item">
                <span className="about__activity-dot">▸</span>
                <span className="about__activity-text">{a.text}</span>
                <span className="about__activity-time">{a.time}</span>
              </div>
            ))}
          </div>
        </div>
     
      </div>
           {/* ── Projects ── */}
      <p className="about__section-header">ls -la projects/</p>

      <div className="about__projects">
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}



function ProjectCard({ project }) {
  return (
    <div className="proj">

      {/* image */}
      <div className="proj__img-wrap">
        {project.image ? (
          <img src={project.image} alt={project.name} className="proj__img" />
        ) : (
          <div className="proj__img-placeholder">
            <span>📁</span>
            <span>no preview</span>
          </div>
        )}
        <span className={`proj__status-badge ${project.status}`}>
          {project.status === 'live' ? '● live' : '◐ in progress'}
        </span>
      </div>

      {/* content */}
      <div className="proj__content">

        <div className="proj__header">
          <span className="proj__name">{project.name}</span>
        </div>

        <p className="proj__desc">{project.description}</p>

        <div className="proj__tech">
          {project.tech.map(t => (
            <span key={t} className="proj__tech-tag">{t}</span>
          ))}
        </div>

        {project.motivation && (
          <p className="proj__motivation">{project.motivation}</p>
        )}
{/* TODO: ADD LINKS LATER */}
        {/* <div className="proj__links">
          {project.github && (
            
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="proj__link github"
            >
              ⬡ github
            </a>
          )}
          {project.demo && (
            
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="proj__link demo"
            >
              ↗ live demo
            </a>
          )}
        </div> */}

      </div>
    </div>
  )
}

