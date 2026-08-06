import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolio } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="fiber-wave-wrapper" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0 C150,90 350,-40 500,60 C650,140 850,20 1200,60 L1200,120 L0,120 Z"
            fill="url(#wave-gradient-1)"
            opacity="0.3"
          />
          <path
            d="M0,30 C200,110 450,10 650,80 C850,150 1050,40 1200,80 L1200,120 L0,120 Z"
            fill="url(#wave-gradient-2)"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="footer-content">
        <div>
          <h3 className="text-xl font-bold text-slate-100 mb-2">Follow me at :</h3>
          <div className="footer-socials">
            <a href={portfolio.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub aria-hidden="true" />
            </a>
            <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin aria-hidden="true" />
            </a>
            <a href={`mailto:${portfolio.email}`} aria-label="Email">
              <FaEnvelope aria-hidden="true" />
            </a>
            <a href="#home" aria-label="Back to top">
              <FaArrowUp aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="text-right text-sm text-slate-400">
          <p className="m-0 text-slate-300 font-semibold">{portfolio.phone}</p>
          <p className="m-0 text-slate-300 font-semibold">{portfolio.email}</p>
          <p className="m-0 text-purple-400">{portfolio.location}</p>
        </div>
      </div>

      <div className="w-full text-center mt-8 pt-4 border-t border-purple-900/30 text-xs text-slate-500">
        Copyright © {new Date().getFullYear()} Manav Arora. All rights reserved.
      </div>
    </footer>
  );
}
