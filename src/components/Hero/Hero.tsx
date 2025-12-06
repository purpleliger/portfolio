import type { FC } from 'react';
import './Hero.css';

interface HeroProps {
  name: string;
  email: string;
  summary: string;
}

export const Hero: FC<HeroProps> = ({ name, email, summary }) => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-text">Cybersecurity Professional</span>
          </div>
          
          <h1 className="hero__title">
            <span className="hero__title-line">{name}</span>
          </h1>
          
          <div className="hero__subtitle">
            <span className="hero__subtitle-label">CISSP | MBA | OT Security SME</span>
          </div>
          
          <p className="hero__summary">{summary}</p>
          
          <div className="hero__contact">
            <a 
              href={`mailto:${email}`} 
              className="hero__contact-button"
              aria-label="Send email"
            >
              <span className="hero__contact-text">Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};