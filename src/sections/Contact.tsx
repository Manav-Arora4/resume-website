import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <div className="contact-grid">
        <GlassCard className="contact-links">
          {portfolio.contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon aria-hidden="true" />
                <span>
                  <strong>{item.label}</strong>
                  {item.value}
                </span>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {content}
              </a>
            ) : (
              <div key={item.label} className="contact-static">
                {content}
              </div>
            );
          })}
          <a href={portfolio.links.github} target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            <span>
              <strong>GitHub</strong>
              github.com/{portfolio.githubUsername}
            </span>
          </a>
        </GlassCard>

        <GlassCard className="static-contact-card">
          <div className="contact-cta-icon" aria-hidden="true">
            <FaEnvelope />
          </div>
          <h3>Open to opportunities</h3>
          <p>
            I'm currently looking for AI/ML internships and entry-level roles. Whether you have a project, a role, or just want to connect — feel free to reach out.
          </p>
          <div className="contact-cta-actions">
            <a
              className="button-link primary"
              href={`mailto:${portfolio.email}?subject=Opportunity%20for%20Manav%20Arora&body=Hi%20Manav,%0D%0A%0D%0A`}
            >
              <FaEnvelope aria-hidden="true" />
              Send an email
            </a>
            <a
              className="button-link ghost contact-linkedin"
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin aria-hidden="true" />
              Connect on LinkedIn
            </a>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
