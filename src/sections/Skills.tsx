import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Skills() {
  return (
    <Section id="skills" label="Toolkit" title="Skills">
      <dl className="skills">
        {portfolio.skills.map((group) => (
          <div key={group.category} className="skill-group reveal">
            <dt>{group.category}</dt>
            <dd>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
