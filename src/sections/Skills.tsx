import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaLaptopCode, FaBrain, FaEye, FaDatabase, FaTools } from 'react-icons/fa';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

const categoryIcons: Record<string, any> = {
  Programming: FaCode,
  'Machine Learning': FaBrain,
  'Computer Vision': FaEye,
  'Web Development': FaLaptopCode,
  Databases: FaDatabase,
  Tools: FaTools,
};

const toolingPills = [
  'Git',
  'GitHub',
  'VS Code',
  'Google Colab',
  'Jupyter Notebook',
  'Power BI',
  'REST APIs',
  'Postman',
  'Vercel',
  'ONNX Export',
  'FastAPI',
  'Docker',
];

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = portfolio.skills || [];
  const activeCategory = categories[activeIndex] || categories[0];

  return (
    <Section
      id="skills"
      eyebrow="My Skills"
      title="Technical Toolkit & Expertise"
      intro="Explore my core technical capabilities grouped by category."
    >
      <div className="skills-tabbed-container">
        {/* Top Category Nav Tabs */}
        <div className="skills-tabs-bar" aria-label="Skill categories">
          {categories.map((cat, idx) => {
            const isActive = idx === activeIndex;
            const CatIcon = categoryIcons[cat.category] || FaCode;
            return (
              <button
                key={cat.category}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`skills-tab-btn ${isActive ? 'is-active' : ''}`}
              >
                <CatIcon aria-hidden="true" />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Content Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="skills-panel-box"
          >
            <h3 className="skills-panel-title">{activeCategory.category}</h3>
            <div className="skills-panel-grid">
              {activeCategory.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3, scale: 1.03 }}
                    transition={{ duration: 0.15 }}
                    className="skills-item-card"
                  >
                    <div className="skills-icon-circle">
                      {Icon ? <Icon aria-hidden="true" /> : <FaCode aria-hidden="true" />}
                    </div>
                    <span className="skills-item-name">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom AI & Developer Tooling Row */}
        <div className="skills-tooling-box">
          <h4 className="skills-tooling-title">AI & Developer Tooling</h4>
          <div className="skills-pills-row">
            {toolingPills.map((pill) => (
              <span key={pill} className="skills-pill-tag">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
