import { SkillCard } from '../components/SkillCard';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical toolkit"
      intro="Grouped by the areas most relevant to junior AI/ML engineering work."
    >
      <div className="skills-groups">
        {portfolio.skills.map((group) => (
          <section key={group.category} className="skill-group" aria-labelledby={`${group.category}-heading`}>
            <h3 id={`${group.category}-heading`}>{group.category}</h3>
            <div className="skill-grid">
              {group.items.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Section>
  );
}
