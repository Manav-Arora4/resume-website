import { motion } from 'framer-motion';
import type { Skill } from '../data/portfolio';
import { GlassCard } from './GlassCard';

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;
  const level = skill.level || 80;

  return (
    <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}>
      <GlassCard className="skill-card">
        <div className="skill-card-top">
          <div className="skill-title">
            {Icon ? <Icon aria-hidden="true" /> : <span className="skill-initial">{skill.name.slice(0, 1)}</span>}
            <span>{skill.name}</span>
          </div>
          <span className="skill-level-text">{level}%</span>
        </div>
        <div className="skill-progress-bar">
          <motion.div
            className="skill-progress-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </GlassCard>
    </motion.div>
  );
}
