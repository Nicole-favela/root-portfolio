export const USER_INFO = {
  name:     'Nicole Favela',
  role:     'Full Stack Engineer',
  location: 'El Paso , TX',
  
  github:   'https://github.com/Nicole-favela',
  linkedin: 'https://linkedin.com/in/nicole-favela-18aa81207',
  bio:  `I am a driven and detail-oriented Software Engineer with a passion for solving real-world problems through thoughtful, scalable technology. Having recently earned my M.S. in Computer Science, I bring a combination of strong technical foundation, hands-on engineering experience, and a builder’s mindset to every project I take on.

Previously, I served as Lead Software Engineer at Series, where I helped scale an early-stage startup from the ground up and contributed to its success in securing $3M+ in investment. My experience spans full-stack development, backend systems, cloud infrastructure, and building products from idea to deployment in fast-paced, collaborative environments.

I’m especially passionate about full-stack engineering, software engineering, AI engineering, backend development, and applied machine learning, and I’m motivated by opportunities to build impactful products that solve meaningful problems.

I’m currently seeking new opportunities in full-stack engineering, software engineering, and AI engineering, where I can continue learning, building, and contributing to innovative teams and products.`
}

export const SKILLS = {
  Languages:  ['Python', 'JavaScript', 'Java', 'TypeScript', 'SQL'],
  Frontend:   ['React', 'Next.js', 'Tailwind CSS', 'MUI'],
  Backend:    ['Node.js', 'FastAPI', 'Flask','Google Cloud Firestore','PostgreSQL', 'MongoDB', 'Pinecone', 'Pgvector'],
  DevOps:     ['Docker', 'AWS'],
  Security:   ['Burp Suite', 'Wireshark', 'Metasploit', 'nmap'],
}

export const PROJECTS = [
  {
    id: '1',
    name: 'Caldera CLI Agent',
    description: 'An AI powered red team assistant using MITRE CALDERA that allows for automated execution, monitoring, reporting, and analysis of red team operations through a CLI.',
    tech: ['Python', 'MITRE CALDERA API', 'Llama 3.1'],
    github: 'https://github.com/',
    demo: 'https://project-alpha.vercel.app',
    status: 'live',
  },
  {
    id: '2',
    name: 'Self-RAG Research Project',
    description: 'Another project — highlight the problem it solves or the impact it had.',
    tech: ['Python', 'FastAPI', 'Docker'],
    github: 'https://github.com/yourusername/project-beta',
    demo: null,
    status: 'live',
  },
  {
    id: '3',
    name: 'Pong Playing Atari Reinforcement Learning Agent',
    description: 'A reinforcement learning trained agent to play pong using Atari in gymnasium.',
    tech: ['Pytorch', 'Q-learning', 'Matplotlib', 'Gymnasium'],
    github: 'https://github.com/',
    demo: null,
    status: 'live',
  },
]

export const ACHIEVEMENTS = [
  { year: '2026', title: 'Phi Kappa Phi Member',  org: 'The Honor Society of Phi Kappa Phi' },
  { year: '2025', title: "HITEC Scholar",           org: 'HITEC global foundation' },
 
]

export const DESKTOP_ICONS = [
  { id: 'projects',     label: 'projects/',  icon: '📁', app: 'Projects'     },
  { id: 'bio',          label: 'bio.txt',    icon: '📄', app: 'Bio'          },
  { id: 'skills',       label: 'skills.md',  icon: '⚡', app: 'Skills'       },
  { id: 'resume',       label: 'resume.pdf', icon: '📋', app: 'Resume'       },
  { id: 'achievements', label: 'awards.txt', icon: '🏆', app: 'Achievements' },
  { id: 'contact',      label: 'contact.sh', icon: '✉️',  app: 'Contact'      },
]