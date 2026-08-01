import { ProjectCard } from '../components/ProjectCard';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Applied machine learning work"
      intro="Each card is fed from the central portfolio data file, so screenshots, links, metrics, and copy can be replaced without touching the components."
    >
      <div className="projects-grid">
        {portfolio.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
