export const USER_INFO = {
  name:     'Nicole',
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
    github: 'https://github.com/Nicole-favela/caldera-shell',
    demo: null,
    status: 'live',
    img: null
  },
  {
    id: '2',
    name: 'Self-RAG Research Project',
    description: 'A graduate school level project that applies a lightweight self-RAG implementation based heavily on a research paper from 2023 to improve on traditional dumb retrieval RAG.',
    motivation: 'This project was motivated by a desire to explore the capabilities of Retrieval Augmented Generation (RAG) and the possible improvements that could make responses more accurate and contextually relevant especially in fields such as finance or medicine where correctness is crucial.',
    tech: ['Python', 'FAISS', 'Ollama', 'Llama 3.1', 'all-MiniLM-L6-v2 embedding model'],
    github: 'https://github.com/Nicole-favela/dl-self-rag-project',
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
    github: 'https://github.com/Nicole-favela/reinforcement-learning-arcade',
    demo: 'https://www.youtube.com/watch?v=z04-U1CQrXk',
    status: 'live',
    img: null
  },
   {
    id: '4',
    name: 'Spotify clone application',
    description: 'Listen to music, view playlists, music library, even search by song/artist. Built using React, Node, spotify API, spotify-web-api-node, and MUI components.',
    motivation: 'This was a passion project was motivated by my love of music and the desire to apply my full stack engineering skills to build a functional spotify clone taylored to my music library.',
    tech: ['React', 'Node js', 'MUI', 'spotify API', 'spotify-web-api-node'],
    github: 'https://github.com/Nicole-favela/SpotifyClone',
    demo: 'https://www.dropbox.com/scl/fi/61yxjbnc5uqddot3z29jp/spotify_clone_demo.MP4?rlkey=svn3wpsaw2afvumwf3sx9nmb2&e=1&dl=0',
    status: 'live',
    img: null
  },
  {
    id: '5',
    name: 'Full Stack Netflix Clone',
    description: `built with the MERN stack and incorporates user authentication using JWT and cookies for a seamless login and registration experience. Leveraging the TMDb API, the application mirrors the Netflix layout and design while utilizing React Player to stream movie trailers. The platform keeps track of users' recently viewed trailers and allows them to curate a personalized 'My List' with the ability to add or remove movies. Additionally, users can access their account details and log out through a dedicated profile page.`,
    motivation: 'The motivation behind this was to create another fully deployed and functional full stack application that incorporates my love of movies and tv.',
    tech: ['React', 'Node js', 'MUI', 'TMDb API', 'Mongodb', 'React Player', 'JWT', 'Cookies'],
    github: 'https://github.com/Nicole-favela/Netflix-clone',
    demo: 'https://streammoviesapp.onrender.com/login',
    status: 'live',
    img: null
  }
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