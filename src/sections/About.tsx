import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="Background & Focus">
      <div className="about-grid">
        <div className="ide-window">
          <div className="ide-header">
            <div className="ide-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="ide-title">manav_arora.py</span>
          </div>
          <div className="ide-body">
            <div className="code-line">
              <span className="line-num">1</span>
              <span className="code-content">
                <span className="code-keyword">class</span> <span className="text-purple-300 font-bold">AIMLStudent</span>:
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">2</span>
              <span className="code-content pl-4">
                <span className="code-keyword">def</span> <span className="text-blue-400">__init__</span>(self):
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">3</span>
              <span className="code-content pl-8">
                self.name = <span className="code-string">"{portfolio.name}"</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">4</span>
              <span className="code-content pl-8">
                self.university = <span className="code-string">"{portfolio.education.school}"</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">5</span>
              <span className="code-content pl-8">
                self.degree = <span className="code-string">"{portfolio.education.degree} ({portfolio.education.major})"</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">6</span>
              <span className="code-content pl-8">
                self.status = <span className="code-string">"Graduation: June 2027 | Open for AI/ML Roles"</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">7</span>
              <span className="code-content pl-4">
                <span className="code-comment"># {portfolio.about[1]}</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">8</span>
              <span className="code-content pl-4">
                <span className="code-comment"># {portfolio.about[2]}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="timeline" aria-label="Career timeline">
          {portfolio.timeline.map((item) => (
            <GlassCard key={`${item.label}-${item.title}`} className="timeline-item">
              <div className="timeline-item-header">
                <span className="timeline-label">{item.label}</span>
                <strong>{item.meta}</strong>
              </div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
