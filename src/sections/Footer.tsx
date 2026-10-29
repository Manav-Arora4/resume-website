import { portfolio } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {portfolio.name}
        </p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
