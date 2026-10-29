import { useEffect, useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

type CopyState = 'idle' | 'copied' | 'failed';

export function Contact() {
  const [copyState, setCopyState] = useState<CopyState>('idle');

  useEffect(() => {
    if (copyState === 'idle') return;
    const timer = window.setTimeout(() => setCopyState('idle'), 2000);
    return () => window.clearTimeout(timer);
  }, [copyState]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setCopyState('copied');
    } catch {
      setCopyState('failed');
    }
  };

  return (
    <Section id="contact" label="Contact" title="Let’s talk">
      <div className="contact reveal">
        <p className="contact-lead">{portfolio.availability} The fastest way to reach me is email.</p>

        <div className="contact-email">
          <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
          <button type="button" className="icon-button" onClick={copyEmail} aria-label="Copy email address">
            {copyState === 'copied' ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
          </button>
          <span className="copy-status" role="status">
            {copyState === 'copied' ? 'Copied' : copyState === 'failed' ? 'Couldn’t copy — select it instead' : ''}
          </span>
        </div>

        <ul className="contact-links">
          <li>
            <span>Phone</span>
            <a href={portfolio.phoneHref}>{portfolio.phone}</a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
              in/manav-arora4
            </a>
          </li>
          <li>
            <span>GitHub</span>
            <a href={portfolio.links.github} target="_blank" rel="noreferrer">
              Manav-Arora4
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}
