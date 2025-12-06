import type { FC } from 'react';
import { Logo } from '../Logo/Logo';
import './Footer.css';

interface FooterProps {
  name: string;
  email: string;
}

export const Footer: FC<FooterProps> = ({ name, email }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__logo-section">
            <Logo size={50} />
            <div className="footer__tagline">{name}</div>
            <div className="footer__subtitle">Cybersecurity Professional</div>
          </div>
          
          <div className="footer__links">
            <a href="#experience" className="footer__link">Experience</a>
            <a href="#education" className="footer__link">Education</a>
            <a href="#volunteer" className="footer__link">Volunteer</a>
            <a href="#projects" className="footer__link">Projects</a>
          </div>
          
          <div className="footer__contact">
            <a href={`mailto:${email}`} className="footer__email">
              {email}
            </a>
          </div>
        </div>
        
        <div className="footer__bottom">
          <div className="footer__copyright">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};