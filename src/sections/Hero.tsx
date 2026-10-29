import { FiArrowUpRight, FiFileText } from 'react-icons/fi';
import { portfolio } from '../data/portfolio';

export function Hero() {
  const [currentRole] = portfolio.experience;
  const { education } = portfolio;

  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="hero-kicker reveal">
          {portfolio.title} <span aria-hidden="true">·</span> {portfolio.location}
        </p>
        <h1 className="hero-title reveal">
          <span className="visually-hidden">{portfolio.name}. </span>
          {portfolio.headline}
        </h1>

        <div className="hero-grid">
          <div className="reveal">
            <p className="hero-intro">{portfolio.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                See selected work
              </a>
              <a className="button" href={portfolio.resumeUrl} target="_blank" rel="noreferrer">
                <FiFileText aria-hidden="true" />
                Résumé (PDF)
              </a>
            </div>
          </div>

          <dl className="hero-facts reveal">
            <div>
              <dt>Now</dt>
              <dd>
                {currentRole.role}, {currentRole.company}
                <span>{currentRole.period}</span>
              </dd>
            </div>
            <div>
              <dt>Studying</dt>
              <dd>
                Final year, B.Tech CS (AI &amp; ML)
                <span>
                  {education.school} · {education.grade}
                </span>
              </dd>
            </div>
            <div>
              <dt>Elsewhere</dt>
              <dd className="hero-links">
                <a href={portfolio.links.github} target="_blank" rel="noreferrer">
                  GitHub <FiArrowUpRight aria-hidden="true" />
                </a>
                <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <FiArrowUpRight aria-hidden="true" />
                </a>
                <a href={`mailto:${portfolio.email}`}>Email</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
