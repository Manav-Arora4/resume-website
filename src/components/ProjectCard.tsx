import { motion } from 'framer-motion';
import type { SyntheticEvent } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import type { Project } from '../data/portfolio';
import { GlassCard } from './GlassCard';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    if (image.dataset.fallbackApplied !== 'true') {
      image.dataset.fallbackApplied = 'true';
      image.src = project.fallbackImage;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
    >
      <GlassCard className="project-card">
        <img
          src={project.image}
          alt={`${project.title} project visual`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={handleImageError}
        />
        <div className="project-body">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tag-row" aria-label={`${project.title} technologies`}>
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <p className="result">{project.results}</p>
          <div className="project-actions">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
            <a href={project.demoUrl} aria-label={`${project.title} live demo`}>
              <FaExternalLinkAlt aria-hidden="true" />
              Live Demo
            </a>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
}
