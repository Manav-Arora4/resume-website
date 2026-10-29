const assetPath = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  title: string;
  summary: string;
  context?: string;
  date?: string;
  image?: { src: string; alt: string };
  metrics: Metric[];
  details: string[];
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  confidential?: boolean;
};

export type Role = {
  role: string;
  company: string;
  period: string;
  location: string;
  stack: string[];
  highlights: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verifyUrl: string;
};

// Update this one file to refresh copy, links, projects, skills, and certificates across the site.
export const portfolio = {
  name: 'Manav Arora',
  title: 'AI & Machine Learning Engineer',
  location: 'Navi Mumbai, India',
  headline: 'I build machine learning systems that make it to production.',
  intro:
    'Final-year B.Tech student in Computer Science (AI & ML), currently building an automated short-form video pipeline as an AI Agent Intern at Qenix Labs. Before that I built an LLM pipeline that turns SEC filings into structured financial data at Plattr.io, and a YOLOv11 detector for an autonomous drone team. I work across the stack: model training, backend APIs and deployment.',
  availability: 'Open to full-time roles in applied ML, LLM systems and recommender systems from June 2027.',
  resumeUrl: assetPath('Manav_Arora_Resume_Latest.pdf'),
  email: 'manav-manu-arora@outlook.com',
  phone: '+91 89289 86507',
  phoneHref: 'tel:+918928986507',
  links: {
    github: 'https://github.com/Manav-Arora4',
    linkedin: 'https://www.linkedin.com/in/manav-arora4'
  },
  experience: [
    {
      role: 'AI Agent Intern',
      company: 'Qenix Labs',
      period: 'Oct 2026 – present',
      location: 'Mumbai',
      stack: ['FastAPI', 'Redis', 'PostgreSQL', 'Next.js', 'FFmpeg', 'OpenRouter'],
      highlights: [
        'Building an end-to-end pipeline for 60-second vertical videos (Shorts, Reels, TikTok): trend research, script, video and voice generation, FFmpeg assembly with captions, automated QA and a human review gate before publishing.',
        'Designed a Redis-backed job queue and worker service on FastAPI and PostgreSQL, with a Next.js dashboard, running multi-stage jobs across 3 video models, 3 image models and S3-compatible storage.',
        'Engineered a multi-provider LLM layer with automatic failover across 3 models and cost-optimised defaults, keeping a finished Short at about $0.50.',
        'Built an idea-analysis module that scores concepts on projected RPM, competition and ROI, plus a competitor-video teardown tool that extracts a retention blueprint and writes an original script from it, across 4 content niches.'
      ]
    },
    {
      role: 'AI Intern',
      company: 'Plattr.io',
      period: 'May – Jul 2025',
      location: 'Remote',
      stack: ['Flask', 'OpenAI API', 'Anthropic API', 'FMP API'],
      highlights: [
        'Built an end-to-end pipeline on SEC-API that turns raw EDGAR 10-Q filings into structured datasets (18 metadata fields, 14-field exports).',
        'Designed the multi-stage flow (query, extraction, chunking, transformation, LLM analysis) and shipped 14 Flask REST endpoints for filings, insider trades, transcripts and analysis.',
        'Integrated OpenAI and Anthropic models with chunked processing to extract metrics, risks and company signals.'
      ]
    },
    {
      role: 'Machine Learning Engineer',
      company: 'OutPulse (open source)',
      period: 'Dec 2024 – Feb 2025',
      location: 'Mumbai',
      stack: ['YOLOv11', 'OpenCV', 'ONNX', 'LiDAR'],
      highlights: [
        'Trained a YOLOv11 cone detector on 962 images / 1,736 annotations with augmentation and fine-tuning over 100 epochs.',
        'Built a real-time OpenCV inference pipeline for webcam and video input, reaching 0.77 mAP50 and 0.89 precision on validation data.',
        'Exported to ONNX for edge deployment, so inference runs across embedded systems without a cloud dependency.',
        'College-funded team at the International Space Drone Competition (ISDC), placing 14th of 50.'
      ]
    }
  ] satisfies Role[],
  education: {
    school: 'Atlas SkillTech University, Mumbai',
    degree: 'B.Tech, Computer Science — Artificial Intelligence & Machine Learning',
    grade: 'CGPA 7.7 / 10',
    period: '2023 – Jun 2027'
  },
  projects: [
    {
      title: 'Steam game recommender',
      date: 'Jul 2026',
      summary:
        'A full-stack hybrid recommender for Steam: Bayesian Personalized Ranking blended with 384-dim FAISS embeddings and MMR re-ranking for diversity, trained on 11M+ interactions across 50K+ games.',
      image: {
        src: assetPath('project-game-recommendation.png'),
        alt: 'The recommender’s “For You” page showing ranked game picks with match percentages'
      },
      metrics: [
        { value: '17.8%', label: 'HitRate@20' },
        { value: '<50 ms', label: 'response time' },
        { value: '11M+', label: 'interactions' }
      ],
      details: [
        'Steam sign-in and library sync, so recommendations come from what you actually own.',
        'ANN search plus Redis caching keeps responses under 50 ms.',
        'Deployed on Render and Vercel with Neon Postgres and Upstash Redis.'
      ],
      stack: ['Python', 'FastAPI', 'FAISS', 'React', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com/Manav-Arora4/game-recommendation-system',
      demoUrl: 'https://recommendation-btw-sand.vercel.app/'
    },
    {
      title: 'Financial statement analyzer',
      context: 'Built at Plattr.io',
      summary:
        'An LLM pipeline that reads SEC 10-Q filings and produces structured financial datasets and risk signals, exposed through a REST API.',
      metrics: [
        { value: '45+', label: '10-Q filings processed' },
        { value: '14', label: 'REST endpoints' },
        { value: '18', label: 'metadata fields' }
      ],
      details: [
        'Chunked LLM processing across OpenAI and Anthropic models to stay inside context limits.',
        'Pulls filings, insider trades and earnings transcripts from SEC-API and FMP.'
      ],
      stack: ['Python', 'Flask', 'OpenAI', 'Anthropic', 'SEC-API'],
      confidential: true
    },
    {
      title: 'Project Airavat — cone detection',
      context: 'ISDC, with OutPulse — placed 14th of 50',
      summary:
        'A YOLOv11 model that detects traffic cones in images, webcam feeds and aerial video so a drone can navigate in real time.',
      image: {
        src: assetPath('cone-detection.jpg'),
        alt: 'Model output on a street scene with seven cones detected at 0.91–0.98 confidence'
      },
      metrics: [
        { value: '0.77', label: 'mAP50 (validation)' },
        { value: '0.89', label: 'precision' },
        { value: '14th / 50', label: 'ISDC placing' }
      ],
      details: [
        'Trained on 962 images with 1,736 annotations, using augmentation and fine-tuning over 100 epochs.',
        'Exported to ONNX so inference runs on-board, with no cloud dependency.'
      ],
      stack: ['Python', 'YOLOv11', 'OpenCV', 'ONNX', 'LiDAR'],
      githubUrl: 'https://github.com/Manav-Arora4/ProjectAiravat'
    },
    {
      title: 'Phishing email detector',
      date: 'Mar 2026',
      summary:
        'An NLP classifier for phishing emails that uses text, URL patterns and HTML structure, served through a FastAPI backend and a browser extension.',
      metrics: [
        { value: '96.7%', label: 'accuracy' },
        { value: '0.953', label: 'F1 score' },
        { value: '~1.9%', label: 'false-positive rate' }
      ],
      details: [
        'Trained on 164K+ emails with a 20K-token vocabulary.',
        'Sub-100 ms inference, with a feedback loop for retraining.'
      ],
      stack: ['Python', 'scikit-learn', 'FastAPI', 'Naive Bayes'],
      githubUrl: 'https://github.com/Manav-Arora4/PhishingDetector'
    },
    {
      title: 'FPS prediction',
      summary:
        'A regression model that estimates in-game frame rate from hardware configuration, resolution and graphics settings.',
      metrics: [],
      details: ['Covers data cleaning, feature encoding, model comparison and error analysis.'],
      stack: ['Python', 'scikit-learn', 'pandas'],
      githubUrl: 'https://github.com/Manav-Arora4/fpsPrediction'
    }
  ] satisfies Project[],
  skills: [
    { category: 'LLMs & RAG', items: ['LangChain', 'FAISS', 'Hugging Face', 'OpenAI API', 'Anthropic API', 'OpenRouter'] },
    {
      category: 'ML & AI',
      items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'NLP', 'Computer vision', 'Recommender systems', 'YOLO', 'OpenCV']
    },
    { category: 'Backend', items: ['FastAPI', 'Flask', 'React', 'Next.js', 'FFmpeg'] },
    { category: 'Languages', items: ['Python', 'SQL', 'C#', 'JavaScript'] },
    { category: 'Databases', items: ['PostgreSQL', 'Redis', 'MongoDB', 'MySQL'] },
    { category: 'Cloud & DevOps', items: ['Docker', 'Git', 'ONNX Runtime', 'Vercel', 'Render', 'Neon', 'Upstash'] },
    { category: 'Data & analytics', items: ['pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Jupyter'] }
  ] satisfies SkillGroup[],
  certificates: [
    {
      title: 'Advanced Learning Algorithms',
      issuer: 'DeepLearning.AI & Stanford Online',
      date: 'Nov 2024',
      image: assetPath('cert-advanced-learning-algorithms.png'),
      verifyUrl: 'https://coursera.org/verify/O06W4KNY6QWU'
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'DeepLearning.AI & Stanford Online',
      date: 'Sep 2024',
      image: assetPath('cert-supervised-machine-learning.png'),
      verifyUrl: 'https://coursera.org/verify/1ODCA1GHQ5NA'
    }
  ] satisfies Certificate[]
};
