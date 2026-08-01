import { FaCertificate } from 'react-icons/fa';
import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications">
      <div className="cert-grid">
        {portfolio.certifications.map((cert) => (
          <GlassCard key={cert} className="cert-card">
            <FaCertificate aria-hidden="true" />
            <span>{cert}</span>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
