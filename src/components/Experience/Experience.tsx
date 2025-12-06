import type { FC } from 'react';
import type { ExperienceItem } from '../../types/portfolio.types';
import './Experience.css';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export const Experience: FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <h2 className="experience__title">Professional Experience</h2>
        
        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience__item">
              <div className="experience__marker">
                <div className="experience__marker-dot"></div>
                <div className="experience__marker-line"></div>
              </div>
              
              <div className="experience__content">
                <div className="experience__header">
                  <h3 className="experience__role">{exp.role}</h3>
                  <span className="experience__period">{exp.period}</span>
                </div>
                
                <div className="experience__company">{exp.company}</div>
                
                <ul className="experience__responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="experience__responsibility">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};