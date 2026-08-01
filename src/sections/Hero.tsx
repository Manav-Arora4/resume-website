import { motion } from 'framer-motion';
import { FaArrowDown, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ButtonLink } from '../components/ButtonLink';
import { portfolio } from '../data/portfolio';

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">
          Portfolio / AI & ML
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
          {portfolio.name}
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
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
          <ButtonLink href="#projects" variant="primary" icon={FaArrowDown}>
            View Projects
          </ButtonLink>
          <ButtonLink href={portfolio.resumeUrl} icon={FaDownload} download>
            Download Resume
          </ButtonLink>
          <ButtonLink href={portfolio.links.github} icon={FaGithub} variant="ghost">
            GitHub
          </ButtonLink>
          <ButtonLink href={portfolio.links.linkedin} icon={FaLinkedin} variant="ghost">
            LinkedIn
          </ButtonLink>
        </motion.div>
        <motion.div
          className="resume-links"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          aria-label="Resume download options"
        >
          {portfolio.resumeLinks.map((resume) => (
            <a key={resume.label} href={resume.href} download>
              <FaDownload aria-hidden="true" />
              {resume.label}
            </a>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="hero-panel"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.18, duration: 0.55 }}
        aria-label="Portfolio highlights"
      >
        <div>
          <span>Focus</span>
          <strong>Applied ML</strong>
        </div>
        <div>
          <span>Projects</span>
          <strong>{portfolio.projects.length}+ shipped</strong>
        </div>
        <div>
          <span>Current</span>
          <strong>Open to AI/ML roles</strong>
        </div>
      </motion.div>
    </section>
  );
}
