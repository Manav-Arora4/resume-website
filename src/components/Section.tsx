import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container section-grid">
        <header className="section-header reveal">
          <p className="section-label">{label}</p>
          <h2 id={`${id}-title`}>{title}</h2>
        </header>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}
