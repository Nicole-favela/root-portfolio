export const USER_INFO = {
  name:     'Nicole Favela',
  role:     'Full Stack Engineer',
  location: 'El Paso , TX',
  
  github:   'https://github.com/Nicole-favela',
  linkedin: 'https://linkedin.com/in/nicole-favela-18aa81207',
  bio:  `I am a driven and detail-oriented Software Engineer with a passion for solving real-world problems through thoughtful, scalable technology. Having recently earned my M.S. in Computer Science, I bring a combination of strong technical foundation, hands-on engineering experience, and a builder’s mindset to every project I take on.

Previously, I served as Lead Software Engineer at Series, where I helped scale an early-stage startup from the ground up and contributed to its success in securing $3M+ in investment. My experience spans full-stack development, backend systems, cloud infrastructure, and building products from idea to deployment in fast-paced, collaborative environments.

I’m especially passionate about full-stack engineering, software engineering, AI engineering, backend development, and applied machine learning, and I’m motivated by opportunities to build impactful products that solve meaningful problems.

I’m currently seeking new opportunities in full-stack engineering, software engineering, and AI engineering, where I can continue learning, building, and contributing to innovative teams and products.`,
  short_about: `I'm currently working at a start-up that intersects mental health and technology. I'm also a recent graduate from the University of Texas at El Paso. What motivates me is the opportunity to make a positive impact through technology. `,
  
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
    motivation: 'This was born out of a desire to make red team operations more efficient and accessible, and to explore the intersection of AI and cybersecurity.',
    tech: ['Python', 'MITRE CALDERA API', 'Llama 3.1'],
    github: 'https://github.com/',
    demo: 'https://project-alpha.vercel.app',
    status: 'live',
    img: null
  },
  {
    id: '2',
    name: 'Self-RAG Research Project',
    description: 'Another project',
    motivation: 'This project was motivated by a desire to explore the capabilities of Retrieval Augmented Generation (RAG) and the possible improvements that could make responses more accurate and contextually relevant.',
    tech: ['Python', 'FastAPI', 'Docker'],
    github: 'https://github.com/yourusername/project-beta',
    demo: null,
    status: 'live',
    img: null
  },
  {
    id: '3',
    name: 'Pong Playing Atari Reinforcement Learning Agent',
    description: 'A reinforcement learning trained agent to play pong using Atari in gymnasium.',
    motivation: 'This project was motivated by the desire to apply reinforcement learning and specifically Q-learning to classic atari games to explore the capabilities and limitations.',
    tech: ['Pytorch', 'Q-learning', 'Matplotlib', 'Gymnasium'],
    github: 'https://github.com/',
    demo: null,
    status: 'live',
    img: null
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
  { id: 'photos',      label: 'photos/', icon: '🖼️',  app: 'Photos'      },
]