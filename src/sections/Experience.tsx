import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Practical AI engineering exposure">
      <div className="experience-grid">
        {portfolio.experience.map((item) => (
          <GlassCard key={`${item.company}-${item.role}`} className="experience-card">
            <FaBriefcase aria-hidden="true" />
            <div>
              <p>{item.period}</p>
              <h3>
                {item.role}, {item.company}
              </h3>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </GlassCard>
        ))}
        <GlassCard className="experience-card">
          <FaGraduationCap aria-hidden="true" />
          <div>
            <p>Education</p>
            <h3>{portfolio.education.school}</h3>
            <ul>
              <li>{portfolio.education.degree}</li>
              <li>{portfolio.education.major}</li>
              <li>{portfolio.education.gpa}</li>
            </ul>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
