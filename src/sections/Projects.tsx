import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub, FaLock } from 'react-icons/fa';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeThumbRef = useRef<HTMLButtonElement>(null);

  const isFirstMount = useRef(true);

  const projects = portfolio.projects;
  const activeProject = projects[activeIndex] || projects[0];

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (activeThumbRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const element = activeThumbRef.current;
      const elementLeft = element.offsetLeft;
      const elementWidth = element.offsetWidth;
      const containerWidth = container.offsetWidth;
      container.scrollTo({
        left: elementLeft - containerWidth / 2 + elementWidth / 2,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
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
              onClick={handlePrev}
              className="project-slider-arrow left"
              aria-label="Previous project"
            >
              <FaChevronLeft />
            </button>

            <div ref={scrollRef} className="project-thumbs-row" aria-label="Select a project">
              {projects.map((project, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={project.title}
                    ref={isActive ? activeThumbRef : null}
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
              onClick={handleNext}
              className="project-slider-arrow right"
              aria-label="Next project"
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
                {activeProject.disclaimer ? (
                  <div className="project-disclaimer-pill" title="Proprietary code under NDA">
                    <FaLock aria-hidden="true" />
                    <span>{activeProject.disclaimer}</span>
                  </div>
                ) : (
                  activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button-link ghost"
                    >
                      <FaGithub aria-hidden="true" />
                      GitHub Repo
                    </a>
                  )
                )}
                {activeProject.demoUrl && activeProject.demoUrl !== '#' && activeProject.demoUrl !== '' && (
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
