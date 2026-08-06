import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeProject = portfolio.projects[activeIndex] || portfolio.projects[0];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured AI & ML Projects"
      intro="Check out some of my machine learning & AI projects, meticulously crafted with focus and dedication."
    >
      <div className="project-showcase-container">
        {/* Left Column: Thumbnails Selector + Active Project Details */}
        <div className="project-showcase-left">
          {/* Project Thumbnails Row with Controls */}
          <div className="project-slider-wrapper">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="project-slider-arrow left"
              aria-label="Scroll project thumbnails left"
            >
              <FaChevronLeft />
            </button>

            <div ref={scrollRef} className="project-thumbs-row" aria-label="Select a project">
              {portfolio.projects.map((project, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`project-thumb-btn ${isActive ? 'is-active' : ''}`}
                    aria-label={`View ${project.title}`}
                  >
                    <img src={project.image} alt={project.title} />
                    <span>{project.title}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => scroll('right')}
              className="project-slider-arrow right"
              aria-label="Scroll project thumbnails right"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Connection Line Graphic */}
          <div className="project-connect-line" aria-hidden="true">
            <svg viewBox="0 0 300 24" fill="none" preserveAspectRatio="none">
              <path
                d="M20,2 L60,20 L290,20"
                stroke="#8b5cf6"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Active Project Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="active-project-details"
            >
              <h3>{activeProject.title}</h3>
              <p>{activeProject.description}</p>

              <div className="tag-row" aria-label={`${activeProject.title} technologies`}>
                {activeProject.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="result">{activeProject.results}</div>

              <div className="project-actions">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-link ghost"
                >
                  <FaGithub aria-hidden="true" />
                  GitHub
                </a>
                {activeProject.demoUrl && activeProject.demoUrl !== '#' && (
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-link primary"
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Large Interactive Showcase Frame */}
        <div className="project-showcase-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="project-showcase-frame"
            >
              <img
                src={activeProject.image}
                alt={`${activeProject.title} preview`}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
