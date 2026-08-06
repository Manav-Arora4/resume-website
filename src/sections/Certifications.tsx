import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Certifications() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const items = portfolio.certificates || [];
  const focusedCert = items[focusedIndex] || items[0];

  const handlePrev = () => {
    setFocusedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    setFocusedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  return (
    <Section
      id="certificates"
      eyebrow="Certificates"
      title="Certifications & Credentials"
      intro="Check out some of my Certificates, ranging from Supervised Machine Learning to Advanced Learning Algorithms."
    >
      <div className="cert-focus-container">
        {/* Navigation Controls */}
        <div className="cert-nav-controls">
          <button
            type="button"
            onClick={handlePrev}
            className="cert-nav-btn"
            aria-label="Previous Certificate"
          >
            <FaChevronLeft />
          </button>
          <span className="cert-nav-counter">
            {focusedIndex + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={handleNext}
            className="cert-nav-btn"
            aria-label="Next Certificate"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Interactive Certificate Cards Carousel View */}
        <div className="cert-carousel-wrapper">
          {items.map((cert, index) => {
            const isFocused = index === focusedIndex;
            return (
              <motion.div
                key={cert.title}
                onClick={() => setFocusedIndex(index)}
                className={`cert-focus-card ${isFocused ? 'is-focused' : 'is-dimmed'}`}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                  opacity: isFocused ? 1 : 0.6,
                  scale: isFocused ? 1.05 : 0.88,
                  zIndex: isFocused ? 10 : 2,
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="cert-card-img-box">
                  <img src={cert.image} alt={cert.title} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Connection Line with Node Dots */}
        <div className="cert-node-line-wrapper" aria-hidden="true">
          <svg viewBox="0 0 600 30" fill="none" preserveAspectRatio="none">
            <path
              d="M20,15 C150,15 250,15 300,15 C350,15 450,15 580,15"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.5"
            />
            <circle cx="300" cy="15" r="7" fill="#7c3aed" stroke="#c084fc" strokeWidth="2" />
          </svg>
        </div>

        {/* Focused Certificate Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={focusedCert.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3 }}
            className="cert-details-card"
          >
            <div className="cert-details-header">
              <FaAward className="cert-details-icon" />
              <div>
                <h3>{focusedCert.title}</h3>
                <p className="cert-details-meta">
                  {focusedCert.issuer} &bull; <span className="text-purple-400">{focusedCert.date}</span>
                </p>
              </div>
            </div>

            {focusedCert.verifyUrl && (
              <a
                href={focusedCert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="button-link primary cert-verify-btn"
              >
                <FaExternalLinkAlt aria-hidden="true" />
                Verify Certificate
              </a>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
