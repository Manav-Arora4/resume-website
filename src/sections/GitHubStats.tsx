import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { GlassCard } from '../components/GlassCard';
import { Section } from '../components/Section';
import { portfolio } from '../data/portfolio';

const STATS_HOSTS = [
  'https://github-readme-stats-fast.vercel.app',
  'https://github-readme-stats-eight-theta.vercel.app',
  'https://github-readme-stats.vercel.app'
];

export function GitHubStats() {
  const isPlaceholder = portfolio.githubUsername.includes('your-github');
  const [statsHostIndex, setStatsHostIndex] = useState(0);
  const [langsHostIndex, setLangsHostIndex] = useState(0);
  const [statsFailed, setStatsFailed] = useState(false);
  const [langsFailed, setLangsFailed] = useState(false);
  const [streakFailed, setStreakFailed] = useState(false);

  const username = portfolio.githubUsername;
  const statsHost = STATS_HOSTS[statsHostIndex] || STATS_HOSTS[0];
  const langsHost = STATS_HOSTS[langsHostIndex] || STATS_HOSTS[0];

  const statsUrl = `${statsHost}/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=38bdf8&text_color=cbd5e1&icon_color=2dd4bf`;
  const langsUrl = `${langsHost}/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=38bdf8&text_color=cbd5e1`;
  const streakUrl = `https://streak-stats.demolab.com?user=${username}&theme=transparent&hide_border=true&ring=2dd4bf&fire=fbbf24&currStreakLabel=38bdf8`;

  const handleStatsError = () => {
    if (statsHostIndex < STATS_HOSTS.length - 1) {
      setStatsHostIndex((prev) => prev + 1);
    } else {
      setStatsFailed(true);
    }
  };

  const handleLangsError = () => {
    if (langsHostIndex < STATS_HOSTS.length - 1) {
      setLangsHostIndex((prev) => prev + 1);
    } else {
      setLangsFailed(true);
    }
  };

  return (
    <Section id="github" eyebrow="GitHub" title="Contribution snapshot">
      {isPlaceholder ? (
        <GlassCard className="stats-placeholder">
          <FaGithub aria-hidden="true" />
          <p>
            Add your GitHub username in <strong>src/data/portfolio.ts</strong> to enable live GitHub stats cards.
          </p>
        </GlassCard>
      ) : (
        <div className="github-grid">
          {!statsFailed ? (
            <img
              src={statsUrl}
              alt="GitHub stats"
              loading="lazy"
              onError={handleStatsError}
            />
          ) : (
            <GlassCard className="stats-placeholder">
              <FaGithub aria-hidden="true" />
              <div>
                <strong>{username}'s GitHub Activity</strong>
                <p>
                  <a href={portfolio.links.github} target="_blank" rel="noopener noreferrer">
                    View profile on GitHub
                  </a>
                </p>
              </div>
            </GlassCard>
          )}

          {!langsFailed ? (
            <img
              src={langsUrl}
              alt="Most used languages"
              loading="lazy"
              onError={handleLangsError}
            />
          ) : null}

          {!streakFailed ? (
            <img
              src={streakUrl}
              alt="GitHub contributions streak"
              loading="lazy"
              onError={() => setStreakFailed(true)}
            />
          ) : null}
        </div>
      )}
    </Section>
  );
}

