import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact me" title="Get in touch">
      <div className="cta-banner-section">
        <GlassCard className="cta-banner-card">
          <h2>Let's start something great together</h2>
          <p>
            I'm currently seeking AI/ML engineering, computer vision, NLP, and data science roles. Feel free to reach out for opportunities or collaborations.
          </p>
          <a
            className="button-link primary"
            href={`mailto:${portfolio.email}?subject=Opportunity%20for%20Manav%20Arora&body=Hi%20Manav,%0D%0A%0D%0A`}
          >
            <FaEnvelope aria-hidden="true" />
            Get in touch
          </a>
        </GlassCard>
      </div>

      <div className="contact-grid">
        <GlassCard className="contact-links">
          <a href={`mailto:${portfolio.email}`}>
            <FaEnvelope aria-hidden="true" />
            <span>
              <strong>Email</strong>
              {portfolio.email}
            </span>
          </a>
          <a href={`tel:${portfolio.phone}`}>
            <FaPhoneAlt aria-hidden="true" />
            <span>
              <strong>Phone</strong>
              {portfolio.phone}
            </span>
          </a>
          <div className="contact-static">
            <FaMapMarkerAlt aria-hidden="true" />
            <span>
              <strong>Location</strong>
              {portfolio.location}
            </span>
          </div>
        </GlassCard>

        <GlassCard className="contact-links">
          <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin aria-hidden="true" />
            <span>
              <strong>LinkedIn</strong>
              linkedin.com/in/manav-arora4
            </span>
          </a>
          <a href={portfolio.links.github} target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            <span>
              <strong>GitHub</strong>
              github.com/{portfolio.githubUsername}
            </span>
          </a>
        </GlassCard>
      </div>
    </Section>
  );
}
