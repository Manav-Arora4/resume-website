import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Experience() {
  const { education } = portfolio;

  return (
    <Section id="experience" label="Experience" title="Where I’ve worked">
      <ol className="timeline">
        {portfolio.experience.map((item) => (
          <li key={`${item.company}-${item.role}`} className="timeline-item reveal">
            <p className="timeline-period">
              {item.period}
              <span>{item.location}</span>
            </p>
            <div>
              <h3>
                {item.role} <span>· {item.company}</span>
              </h3>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <ul className="tags" aria-label="Tech stack">
                {item.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
        <li className="timeline-item reveal">
          <p className="timeline-period">{education.period}</p>
          <div>
            <h3>
              Education <span>· {education.school}</span>
            </h3>
            <p>{education.degree}</p>
            <p>{education.grade}</p>
          </div>
        </li>
      </ol>
    </Section>
  );
}
