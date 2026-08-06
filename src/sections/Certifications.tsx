import { FaCertificate } from 'react-icons/fa';
import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Certifications() {
  return (
    <Section
      id="certificates"
      eyebrow="Certificates"
      title="Certifications & Credentials"
      intro="Official certifications from Stanford Online and DeepLearning.AI in Machine Learning and Advanced Algorithms."
    >
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
