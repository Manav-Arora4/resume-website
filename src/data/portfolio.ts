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
    'AI/ML student focused on building end-to-end systems in machine learning, computer vision, NLP, and recommendation engines.',
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
    'AI & ML student at Atlas SkillTech University, graduating in May 2027.',
    'Experienced in production-style pipelines that combine LLMs, REST APIs, financial data, OpenCV, YOLOv11, and edge deployment.',
    'Looking for AI/ML internship and entry-level opportunities in machine learning, computer vision, NLP, recommendation systems, and applied AI.'
  ],
  timeline: [
    {
      label: 'University',
      title: 'B.Tech in Computer Science with Machine Learning and AI',
      meta: 'Atlas SkillTech University',
      detail: 'Mumbai-based undergraduate program focused on AI/ML, software systems, and applied machine learning projects.'
    },
    {
      label: 'Internship',
      title: 'Plattr.io AI Intern',
      meta: 'May 2025 - July 2025',
      detail: 'Built a financial analysis pipeline processing 45+ SEC 10-Q filings with OpenAI, Anthropic, SEC-API, and Flask REST APIs.'
    },
    {
      label: 'Open Source',
      title: 'OutPulse Software Engineer',
      meta: 'Dec 2024 - Feb 2025',
      detail: 'Trained and deployed a YOLOv11 cone detection model on 962 images and exported lightweight ONNX models for edge inference.'
    },
    {
      label: 'Current',
      title: 'Open to AI/ML Roles',
      meta: 'Full-Time & Internship Opportunities',
      detail: 'Actively seeking AI/ML engineering, computer vision, NLP, and applied machine learning roles.'
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
        'Full-stack hybrid recommendation engine for 50K+ Steam games combining BPR Matrix Factorization, FAISS sentence embeddings, playtime confidence, and MMR diversity re-ranking.',
      technologies: ['FastAPI', 'Next.js', 'BPR Matrix Factorization', 'FAISS', 'SentenceTransformers', 'PostgreSQL', 'Redis'],
      features: ['Steam OpenID login', '50.8K game catalog', 'MMR diversity re-ranking', 'Explainable recommendations', '5-fold CV evaluation'],
      results: 'Achieved 17.32% Hit Rate @ 20 and 12.14% catalog coverage across 1.47M test users under strict leak-free 5-fold cross-validation.',
      githubUrl: 'https://github.com/Manav-Arora4/game-recommendation-system',
      demoUrl: 'https://recommendation-btw-sand.vercel.app/'
    },
    {
      title: 'Financial Statement Analyzer',
      image: unsplashPhoto('photo-1551288049-bebda4e38f71'),
      fallbackImage: assetPath('project-financial.svg'),
      description:
        'Enterprise financial NLP & SEC 10-Q filing analysis pipeline engineered for Plattr.io, converting raw EDGAR disclosures into structured financial data, risk signals, and executive summaries.',
      technologies: ['OpenAI API', 'Anthropic API', 'Flask', 'SEC-API', 'Financial Modeling Prep', 'Python'],
      features: ['45+ filing pipeline', '14 REST endpoints', 'Chunked LLM processing', 'Financial signal extraction'],
      results: 'Built for Plattr.io (Proprietary / Under NDA). Processed 45+ 10-Q filings, extracting structured metrics, financial risks, and corporate signals.',
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
      results: 'Trained custom 5.5MB model and exported to ONNX format, achieving robust real-time cone detection on low-power edge hardware for drone navigation.',
      githubUrl: 'https://github.com/Manav-Arora4/ProjectAiravat',
      demoUrl: ''
    },
    {
      title: 'Phishing Email Detection',
      image: unsplashPhoto('photo-1526374965328-7f61d4dc18c5'),
      fallbackImage: assetPath('project-nlp.svg'),
      description:
        'Machine learning and NLP classification pipeline designed to detect phishing and malicious emails using textual features, URL patterns, and HTML structure analysis.',
      technologies: ['NLP', 'Scikit-learn', 'Naive Bayes', 'REST API', 'Feature Engineering'],
      features: ['164K+ email dataset', '20K+ token vocabulary', 'Browser extension', 'Feedback-driven retraining'],
      results: 'Achieved 96.7% accuracy, 0.953 F1-score, about 1.9% false positive rate, and sub-100ms inference time.',
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
        'Built an end-to-end financial analysis pipeline using SEC-API and LLM-powered analysis across 45+ 10-Q filings.',
        'Developed 14 REST API endpoints for filings, insider trades, transcripts, and multi-mode financial analysis.',
        'Integrated OpenAI and Anthropic models with chunked processing for documents up to about 8MB.',
        'Extracted structured metrics, risks, and key company signals from raw financial filings.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'OutPulse',
      period: 'Dec 2024 - Feb 2025',
      highlights: [
        'Trained a YOLOv11 cone detection model on 962 images with 1,736 annotations using augmentation and fine-tuning.',
        'Built OpenCV real-time inference workflows for webcam and video input.',
        'Deployed a lightweight model around 5.5MB and exported ONNX for cross-platform edge inference.',
        'Placed 14th out of 40 international teams at the International Space Drone Competition with OutPulse.'
      ]
    }
  ],
  education: {
    school: 'Atlas SkillTech University',
    degree: 'Bachelor of Technology',
    major: 'Computer Science with Machine Learning and AI',
    gpa: 'Graduation: May 2027'
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
