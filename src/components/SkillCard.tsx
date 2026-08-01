import type { Skill } from '../data/portfolio';
import { GlassCard } from './GlassCard';

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <GlassCard className="skill-card">
      <div className="skill-title">
        {Icon ? <Icon aria-hidden="true" /> : <span className="skill-initial">{skill.name.slice(0, 1)}</span>}
        <span>{skill.name}</span>
      </div>
    </GlassCard>
  );
}
