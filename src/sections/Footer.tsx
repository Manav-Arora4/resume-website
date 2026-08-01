import { FaArrowUp } from 'react-icons/fa';
import { portfolio } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{portfolio.name}</strong>
        <p>Copyright © {new Date().getFullYear()} Manav Arora. All rights reserved.</p>
      </div>
      <div className="footer-links">
        {portfolio.social.map((item) => {
          const Icon = item.icon;
          return (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
              <Icon aria-hidden="true" />
            </a>
          );
        })}
        <a href="#home" aria-label="Back to top">
          <FaArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
