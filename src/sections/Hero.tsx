import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown, FaCheck, FaCopy, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ButtonLink } from '../components/ButtonLink';
import { portfolio } from '../data/portfolio';

const dynamicSpecialties = [
  '⚡ Financial NLP & LLM Pipelines',
  '🎯 Real-Time Edge Vision & YOLOv11',
  '🔥 High-Throughput Recommendation Engines',
  '🚀 Production-Grade AI Applications'
];

export function Hero() {
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSpecialtyIndex((prev) => (prev + 1) % dynamicSpecialties.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="home" className="hero">
      {/* Animated Ambient Glow & Particle Orbs */}
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />
      <div className="hero-ambient-particles" aria-hidden="true">
        <span className="particle p1" />
        <span className="particle p2" />
        <span className="particle p3" />
        <span className="particle p4" />
      </div>

      <div className="hero-content">
        {/* Status Pill & Dynamic Specialty Cycling */}
        <div className="hero-top-badges">
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="status-badge"
          >
            <span className="pulse-dot" />
            <span>Open to AI/ML Opportunities</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={specialtyIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="specialty-rotator-badge"
            >
              <span>{dynamicSpecialties[specialtyIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          <span className="hero-greeting">Hi, I am </span>
          <br />
          <span className="hero-name-bracket">&#123;</span>
          <span className="hero-name-text">{portfolio.name}</span>
          <span className="hero-name-bracket">&#125;</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
        >
          {portfolio.title}
        </motion.h2>

        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
        >
          {portfolio.intro}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
        >
          <ButtonLink href={portfolio.resumeUrl} variant="primary" icon={FaDownload} download>
            Download CV
          </ButtonLink>
          <ButtonLink href="#projects" variant="ghost" icon={FaArrowDown}>
            View Projects
          </ButtonLink>
          <ButtonLink href={portfolio.links.github} icon={FaGithub} variant="ghost">
            GitHub
          </ButtonLink>
          <ButtonLink href={portfolio.links.linkedin} icon={FaLinkedin} variant="ghost">
            LinkedIn
          </ButtonLink>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="button-link ghost hero-copy-email-btn"
            title="Copy email to clipboard"
          >
            {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
            <span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
          </button>
        </motion.div>
      </div>

      <motion.div
        className="hero-portrait-wrapper"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="hero-portrait-backdrop" aria-hidden="true" />
        <div className="hero-portrait-card">
          <div className="hero-avatar-circle">
            <div className="hero-avatar-placeholder">MA</div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-slate-100 m-0">{portfolio.name}</h3>
            <p className="text-xs text-purple-400 m-0 mt-1 font-mono">B.Tech CS (AI & ML) @ Atlas</p>
          </div>
          <div className="hero-stats-list">
            <div className="hero-stat-item">
              <span>Focus</span>
              <strong>Applied AI</strong>
            </div>
            <div className="hero-stat-item">
              <span>Shipped</span>
              <strong>{portfolio.projects.length} Production Systems</strong>
            </div>
            <div className="hero-stat-item">
              <span>Status</span>
              <strong className="text-emerald-400">Available for Roles</strong>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
