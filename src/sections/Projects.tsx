import { ProjectCard } from '../components/ProjectCard';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured AI & ML Projects"
      intro="Check out some of my machine learning & AI projects, meticulously crafted with focus and dedication."
    >
      <div className="projects-grid">
        {portfolio.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
