import { FiArrowUpRight, FiGithub, FiLock } from 'react-icons/fi';
import { Section } from '../components/Section';
import { portfolio, type Project } from '../data/portfolio';

function ProjectLinks({ project }: { project: Project }) {
  if (project.confidential) {
    return (
      <p className="project-note">
        <FiLock aria-hidden="true" />
        Code is proprietary (under NDA)
      </p>
    );
  }

  return (
    <div className="project-links">
      {project.demoUrl ? (
        <a className="button button-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
          Live demo <FiArrowUpRight aria-hidden="true" />
        </a>
      ) : null}
      {project.githubUrl ? (
        <a className="button" href={project.githubUrl} target="_blank" rel="noreferrer">
          <FiGithub aria-hidden="true" /> Source
        </a>
      ) : null}
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects" label="Selected work" title="Projects">
      <div className="project-list">
        {portfolio.projects.map((project, index) => (
          <article key={project.title} className={`project reveal${project.image ? ' has-image' : ''}`}>
            <div className="project-text">
              <p className="project-index">
                {String(index + 1).padStart(2, '0')}
                {project.date ? <span>{project.date}</span> : null}
                {project.context ? <span>{project.context}</span> : null}
              </p>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>

              {project.metrics.length > 0 ? (
                <dl className="metrics">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt>{metric.label}</dt>
                      <dd>{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              <ul className="project-details">
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>

              <ul className="tags" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <ProjectLinks project={project} />
            </div>

            {project.image ? (
              <figure className="project-figure">
                <img src={project.image.src} alt={project.image.alt} loading="lazy" decoding="async" />
              </figure>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
