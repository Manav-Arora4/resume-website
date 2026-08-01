import { FaGithub } from 'react-icons/fa';
import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

export function GitHubStats() {
  const isPlaceholder = portfolio.githubUsername.includes('your-github');
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${portfolio.githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=38bdf8&text_color=cbd5e1&icon_color=2dd4bf`;
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${portfolio.githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=38bdf8&text_color=cbd5e1`;
  const streakUrl = `https://streak-stats.demolab.com?user=${portfolio.githubUsername}&theme=transparent&hide_border=true&ring=2dd4bf&fire=fbbf24&currStreakLabel=38bdf8`;

  return (
    <Section id="github" eyebrow="GitHub" title="Contribution snapshot">
      {isPlaceholder ? (
        <GlassCard className="stats-placeholder">
          <FaGithub aria-hidden="true" />
          <p>Add your GitHub username in <strong>src/data/portfolio.ts</strong> to enable live GitHub stats cards.</p>
        </GlassCard>
      ) : (
        <div className="github-grid">
          <img src={statsUrl} alt="GitHub stats" loading="lazy" />
          <img src={langsUrl} alt="Most used languages" loading="lazy" />
          <img src={streakUrl} alt="GitHub contributions streak" loading="lazy" />
        </div>
      )}
    </Section>
  );
}
