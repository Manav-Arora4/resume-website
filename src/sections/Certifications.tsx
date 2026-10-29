import { FiArrowUpRight } from 'react-icons/fi';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Certifications() {
  return (
    <Section id="certificates" label="Coursework" title="Certificates">
      <ul className="cert-list">
        {portfolio.certificates.map((cert) => (
          <li key={cert.verifyUrl} className="cert reveal">
            <a href={cert.verifyUrl} target="_blank" rel="noreferrer">
              <img src={cert.image} alt="" loading="lazy" decoding="async" />
              <span className="cert-text">
                <span className="cert-title">{cert.title}</span>
                <span className="cert-meta">
                  {cert.issuer} · {cert.date}
                </span>
                <span className="cert-verify">
                  Verify on Coursera <FiArrowUpRight aria-hidden="true" />
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
