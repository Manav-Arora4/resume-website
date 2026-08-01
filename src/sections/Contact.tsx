import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build intelligent systems">
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
          <h3>Static-site friendly contact</h3>
          <p>
            GitHub Pages does not run a backend for forms, so this contact button opens an email draft directly.
          </p>
          <a
            className="button-link primary"
            href={`mailto:${portfolio.email}?subject=Portfolio%20Opportunity%20for%20Manav%20Arora&body=Hi%20Manav,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20connect%20about...`}
          >
            <FaEnvelope aria-hidden="true" />
            Email Me
          </a>
        </GlassCard>
      </div>
    </Section>
  );
}
