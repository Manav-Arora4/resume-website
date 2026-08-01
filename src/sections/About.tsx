import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineer in training, builder by habit">
      <div className="about-grid">
        <GlassCard>
          {portfolio.about.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </GlassCard>
        <div className="timeline" aria-label="Career timeline">
          {portfolio.timeline.map((item) => (
            <GlassCard key={`${item.label}-${item.title}`} className="timeline-item">
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <strong>{item.meta}</strong>
              <p>{item.detail}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
