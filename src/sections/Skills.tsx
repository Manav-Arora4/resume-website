import { SkillCard } from '../components/SkillCard';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="My Skills"
      title="Technical toolkit & expertise"
      intro="Core machine learning frameworks, computer vision libraries, web systems, and data tools."
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
