import { motion } from 'framer-motion';
import type { Skill } from '../data/portfolio';
import { GlassCard } from './GlassCard';

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <motion.div whileHover={{ y: -3, scale: 1.02 }} transition={{ duration: 0.2 }}>
      <GlassCard className="skill-card">
        <div className="skill-title">
          {Icon ? <Icon aria-hidden="true" /> : null}
          <span>{skill.name}</span>
        </div>
      </GlassCard>
    </motion.div>
  );
}
