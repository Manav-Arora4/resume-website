import type { IconType } from 'react-icons';

type ButtonLinkProps = {
  href: string;
  children: string;
  icon?: IconType;
  variant?: 'primary' | 'secondary' | 'ghost';
  download?: boolean;
};

export function ButtonLink({ href, children, icon: Icon, variant = 'secondary', download }: ButtonLinkProps) {
  return (
    <a
      className={`button-link ${variant}`}
      href={href}
      download={download}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
    >
      {Icon ? <Icon aria-hidden="true" /> : null}
      <span>{children}</span>
    </a>
  );
}
