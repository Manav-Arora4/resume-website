import {
  FaCss3Alt,
  FaEnvelope,
  FaFlask,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPython,
  FaReact
} from 'react-icons/fa';
import {
  SiDocker,
  SiFastapi,
  SiGit,
  SiGooglecolab,
  SiJupyter,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPytorch,
  SiRedis,
  SiRender,
  SiScikitlearn,
  SiSharp,
  SiTailwindcss,
  SiTensorflow,
  SiVercel
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import type { IconType } from 'react-icons';

const assetPath = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;
const unsplashPhoto = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=80`;

export type Skill = {
  name: string;
  level: number;
  icon?: IconType;
};

export type Project = {
  title: string;
  image: string;
  fallbackImage: string;
  description: string;
  technologies: string[];
  features: string[];
  results: string;
  githubUrl: string;
  demoUrl: string;
  disclaimer?: string;
};

// Update this one file to refresh copy, links, projects, skills, and stats across the site.
export const portfolio = {
  name: 'Manav Arora',
  title: 'AI & Machine Learning Student',
  intro:
    'AI/ML student focused on building intelligent systems in financial NLP, recommendation engines, and real-time inference. Experienced in building AI applications using LLMs, APIs, and modern backend technologies.',
  resumeUrl: assetPath('Manav_Arora_Resume_Latest.pdf'),
  resumeLinks: [
    { label: 'Latest Resume', href: assetPath('Manav_Arora_Resume_Latest.pdf') },
    { label: 'ATS Resume', href: assetPath('ManavArora_Resume.pdf') },
    { label: 'Gamified Resume Design', href: assetPath('Gamified_Resume_Design.zip') }
  ],
  email: 'manav-manu-arora@outlook.com',
  phone: '+91 8928986507',
  location: 'Navi Mumbai, Maharashtra',
  githubUsername: 'Manav-Arora4',
  links: {
    github: 'https://github.com/Manav-Arora4',
    linkedin: 'https://www.linkedin.com/in/manav-arora4'
  },
  about: [
    'AI & ML student at Atlas SkillTech University, Mumbai (Graduating in June 2027).',
    'Experienced in building production-style AI systems combining LLMs, financial NLP, OpenCV, YOLOv11, and edge deployment.',
    'Looking for AI/ML engineering, recommendation systems, and applied AI opportunities.'
  ],
  timeline: [
    {
      label: 'University',
      title: 'B.Tech in Computer Science, Artificial Intelligence & Machine Learning',
      meta: 'Atlas SkillTech University (Graduation: June 2027)',
      detail: 'Mumbai-based undergraduate program focused on AI/ML, software systems, and applied machine learning projects.'
    },
    {
      label: 'Internship',
      title: 'Plattr.io AI Intern',
      meta: 'May 2025 - July 2025',
      detail: 'Built an end-to-end financial analysis pipeline processing 10-Q filings with SEC-API, OpenAI, Anthropic, and 14 Flask REST APIs.'
    },
    {
      label: 'Open Source',
      title: 'OutPulse Machine Learning Engineer',
      meta: 'Dec 2024 - Feb 2025',
      detail: 'Trained and deployed a YOLOv11 cone detection model on 962 images and exported lightweight ONNX models for edge inference.'
    },
    {
      label: 'Current',
      title: 'Open to AI/ML Roles',
      meta: 'Full-Time & Internship Opportunities',
      detail: 'Actively seeking AI/ML engineering, recommendation systems, financial NLP, and applied machine learning roles.'
    }
  ],
  skills: [
    {
      category: 'Languages',
      items: [
        { name: 'Python', level: 92, icon: FaPython },
        { name: 'SQL', level: 82 },
        { name: 'C#', level: 72, icon: SiSharp },
        { name: 'JavaScript', level: 78, icon: FaJs }
      ]
    },
    {
      category: 'Machine Learning',
      items: [
        { name: 'Scikit-learn', level: 86, icon: SiScikitlearn },
        { name: 'NLP', level: 84 },
        { name: 'TensorFlow', level: 76, icon: SiTensorflow },
        { name: 'PyTorch', level: 78, icon: SiPytorch },
        { name: 'Recommendation Systems', level: 88 },
        { name: 'FAISS', level: 80 },
        { name: 'Computer Vision', level: 82, icon: SiOpencv },
        { name: 'Pandas', level: 88, icon: SiPandas },
        { name: 'NumPy', level: 86, icon: SiNumpy }
      ]
    },
    {
      category: 'Frameworks',
      items: [
        { name: 'FastAPI', level: 86, icon: SiFastapi },
        { name: 'Flask', level: 84, icon: FaFlask },
        { name: 'React', level: 78, icon: FaReact }
      ]
    },
    {
      category: 'Databases',
      items: [
        { name: 'PostgreSQL', level: 84, icon: SiPostgresql },
        { name: 'Redis', level: 80, icon: SiRedis },
        { name: 'MySQL', level: 78, icon: SiMysql },
        { name: 'MongoDB', level: 72, icon: SiMongodb }
      ]
    },
    {
      category: 'Cloud & Hosting',
      items: [
        { name: 'Vercel', level: 85, icon: SiVercel },
        { name: 'Render', level: 80, icon: SiRender },
        { name: 'Neon', level: 80 },
        { name: 'Upstash', level: 78 }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', level: 82, icon: SiGit },
        { name: 'Docker', level: 78, icon: SiDocker },
        { name: 'Power BI', level: 74 },
        { name: 'GitHub', level: 84, icon: FaGithub },
        { name: 'VS Code', level: 88, icon: TbBrandVscode },
        { name: 'Jupyter', level: 86, icon: SiJupyter }
      ]
    }
  ],
  projects: [
    {
      title: 'Steam Game Recommendation System',
      image: unsplashPhoto('photo-1612287230202-1ff1d85d1bdf'),
      fallbackImage: assetPath('project-recommendation.svg'),
      description:
        'Full-stack hybrid recommendation engine combining Bayesian Personalized Ranking (BPR), 384-dimensional FAISS embeddings, and MMR diversity reranking on 11M+ interactions across 50K+ games.',
      technologies: ['Python', 'FastAPI', 'React', 'FAISS', 'Redis', 'PostgreSQL', 'Render', 'Vercel', 'Upstash'],
      features: ['Steam OpenID authentication', '50K+ game catalog', 'MMR diversity reranking', 'Redis caching & ANN search', '11M+ interactions dataset'],
      results: 'Optimized inference through ANN search and Redis caching, achieving 17.8% HitRate@20 with sub-50ms response times; deployed full-stack with Neon PostgreSQL and Upstash Redis.',
      githubUrl: 'https://github.com/Manav-Arora4/game-recommendation-system',
      demoUrl: 'https://recommendation-btw-sand.vercel.app/'
    },
    {
      title: 'Financial Statement Analyzer',
      image: unsplashPhoto('photo-1551288049-bebda4e38f71'),
      fallbackImage: assetPath('project-financial.svg'),
      description:
        'Enterprise financial NLP & SEC 10-Q filing analysis pipeline engineered for Plattr.io, converting raw EDGAR disclosures into structured financial datasets (18 metadata fields, 14-field exports) and risk signals.',
      technologies: ['Flask', 'OpenAI API', 'Anthropic API', 'SEC-API', 'FMP API', 'Python'],
      features: ['45+ 10-Q filing pipeline', '14 REST API endpoints', 'Chunked LLM processing', '18 metadata & 14 export fields'],
      results: 'Engineered multi-stage ETL & LLM pipeline for Plattr.io (Proprietary / Under NDA), extracting structured metrics, company risks, and executive signals.',
      githubUrl: '',
      demoUrl: '',
      disclaimer: 'Enterprise Project for Plattr.io (Proprietary / Under NDA)'
    },
    {
      title: 'Project Airavat - YOLOv11 Cone Detection',
      image: assetPath('cone-detection.jpg'),
      fallbackImage: assetPath('project-vision.svg'),
      description:
        'Autonomous computer vision model developed for the International Space Drone Competition (ISDC) with OutPulse, detecting cones in image, webcam, and aerial video streams for real-time edge navigation.',
      technologies: ['YOLOv11', 'OpenCV', 'ONNX', 'Computer Vision', 'Edge AI', 'Python'],
      features: ['ISDC Drone Competition', '962 image dataset', '1,736 annotations', '100 epoch training', 'ONNX edge deployment'],
      results: 'Trained custom model over 100 epochs (batch size 16, 320x320 resolution) and exported ONNX format for efficient cross-platform embedded deployment.',
      githubUrl: 'https://github.com/Manav-Arora4/ProjectAiravat',
      demoUrl: ''
    },
    {
      title: 'NLP Based Phishing Detection System',
      image: unsplashPhoto('photo-1526374965328-7f61d4dc18c5'),
      fallbackImage: assetPath('project-nlp.svg'),
      description:
        'Machine learning and NLP classification pipeline designed to detect phishing and malicious emails on 164K+ emails using textual features, URL patterns, and HTML structure analysis.',
      technologies: ['Python', 'FastAPI', 'Scikit-learn', 'NLP', 'Naive Bayes', 'Browser Extension'],
      features: ['164K+ email dataset', '20K+ token vocabulary', 'Browser extension', 'Feedback-driven retraining pipelines'],
      results: 'Achieved 96.7% accuracy and 0.953 F1-score with low false positive rate (~1.9%) and sub-100ms inference with REST APIs and browser extension.',
      githubUrl: 'https://github.com/Manav-Arora4/PhishingDetector',
      demoUrl: ''
    },
    {
      title: 'Anime Recommendation System',
      image: unsplashPhoto('photo-1578632767115-351597cf2477'),
      fallbackImage: assetPath('project-recommendation.svg'),
      description:
        'Matrix factorization and collaborative filtering recommender system trained on MyAnimeList data with custom latent factor representations.',
      technologies: ['Recommendation Engine', 'Collaborative Filtering', 'NumPy', 'Matrix Factorization'],
      features: ['4.7K users', '500 items', '5K interactions', 'Serialized model inference'],
      results: 'Engineered 46-dimensional latent factors via gradient descent, achieving RMSE 0.1368 and MAE 0.1227 across 4.7K users and 500 items.',
      githubUrl: 'https://github.com/Manav-Arora4/CollborativeFilteringRecommender',
      demoUrl: ''
    },
    {
      title: 'FPS Prediction',
      image: unsplashPhoto('photo-1511512578047-dfb367046420'),
      fallbackImage: assetPath('project-regression.svg'),
      description:
        'Supervised machine learning regression model that predicts gaming frames per second (FPS) across diverse hardware configurations, resolution benchmarks, and graphics settings.',
      technologies: ['Regression', 'Machine Learning', 'Data Analysis', 'Scikit-learn'],
      features: ['Data cleaning', 'Exploratory analysis', 'Model training', 'Error analysis'],
      results: 'Trained regression models with data cleaning, feature encoding, and error analysis to provide accurate frame rate estimations.',
      githubUrl: 'https://github.com/Manav-Arora4/fpsPrediction',
      demoUrl: ''
    },
    {
      title: 'House Price Prediction',
      image: unsplashPhoto('photo-1560518883-ce09059eeffa'),
      fallbackImage: assetPath('project-housing.svg'),
      description:
        'End-to-end regression model for predicting residential real estate prices through rigorous data cleaning, multivariable feature engineering, and statistical modeling.',
      technologies: ['Regression', 'Feature Engineering', 'Data Visualization', 'Scikit-learn'],
      features: ['Missing value handling', 'Feature selection', 'Model evaluation', 'Visualization dashboard'],
      results: 'Analyzed key price drivers, handled missing values and outliers, and produced visual feature importance insights.',
      githubUrl: 'https://github.com/Manav-Arora4/housePricePrediction/tree/main',
      demoUrl: ''
    }
  ] satisfies Project[],
  experience: [
    {
      role: 'AI Intern',
      company: 'Plattr.io',
      period: 'May 2025 - July 2025',
      highlights: [
        'Built an end-to-end financial analysis pipeline using SEC-API, processing 10-Q filings and converting raw EDGAR data into structured datasets (18 metadata fields, 14-field exports).',
        'Engineered a multi-stage pipeline (querying, text extraction, chunking, transformation, LLM analysis) and developed 14 REST API endpoints for filings, insider trades, transcripts, and multi-mode analysis.',
        'Integrated OpenAI and Anthropic models with chunked processing, extracting structured financial insights including metrics, risks, and key company signals.'
      ]
    },
    {
      role: 'Machine Learning Engineer',
      company: 'OutPulse (Open-Source)',
      period: 'Dec 2024 - Feb 2025',
      highlights: [
        'Trained a YOLOv11-based object detection model on 962 images (1,736 annotations) for cone detection, using data augmentation and fine-tuning over 100 epochs (batch size 16, 320×320 resolution).',
        'Built real-time inference pipelines using OpenCV for webcam and video input, implementing real-time detection workflows from input frames to bounding box outputs.',
        'Deployed a lightweight model for edge-compatible inference and exported ONNX format for cross-platform deployment, enabling efficient integration into embedded systems.'
      ]
    }
  ],
  education: {
    school: 'Atlas SkillTech University',
    degree: 'Bachelor of Technology',
    major: 'Computer Science, Artificial Intelligence & Machine Learning',
    gpa: 'Graduation: June 2027'
  },
  certifications: [
    'Supervised Machine Learning: Regression and Classification - Stanford Online',
    'Advanced Learning Algorithms - Stanford Online'
  ],
  certificates: [
    {
      title: 'Advanced Learning Algorithms',
      issuer: 'DeepLearning.AI & Stanford Online',
      date: 'Nov 16, 2024',
      image: assetPath('cert-advanced-learning-algorithms.png'),
      verifyUrl: 'https://coursera.org/verify/O06W4KNY6QWU'
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'DeepLearning.AI & Stanford Online',
      date: 'Sep 9, 2024',
      image: assetPath('cert-supervised-machine-learning.png'),
      verifyUrl: 'https://coursera.org/verify/1ODCA1GHQ5NA'
    }
  ],
  contactItems: [
    { label: 'Email', value: 'manav-manu-arora@outlook.com', href: 'mailto:manav-manu-arora@outlook.com', icon: FaEnvelope },
    { label: 'Phone', value: '+91 8928986507', href: 'tel:+918928986507', icon: FaPhoneAlt },
    { label: 'Location', value: 'Navi Mumbai, Maharashtra', href: null, icon: FaMapMarkerAlt },
    { label: 'LinkedIn', value: 'linkedin.com/in/manav-arora4', href: 'https://www.linkedin.com/in/manav-arora4', icon: FaLinkedin }
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/Manav-Arora4', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manav-arora4', icon: FaLinkedin }
  ]
};
