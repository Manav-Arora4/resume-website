import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolio } from '../data/portfolio';

const navItems = [
  { label: 'About me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact me', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#home" aria-label="Go to top">
        <span>Manav</span>
        <span className="brand-dot">.ai</span>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="nav-socials">
        <a href={portfolio.links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <FaGithub aria-hidden="true" />
        </a>
        <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <FaLinkedin aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
