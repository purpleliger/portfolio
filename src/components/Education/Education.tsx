import type { FC } from 'react';
import type { Education as EducationType, Certification } from '../../types/portfolio.types';
import './Education.css';

interface EducationProps {
  education: EducationType[];
  certifications: Certification[];
}

export const EducationSection: FC<EducationProps> = ({ education, certifications }) => {
  return (
    <section className="education" id="education">
      <div className="education__container">
        <h2 className="education__title">Education & Certifications</h2>
        
        <div className="education__grid">
          {/* Education */}
          <div className="education__section">
            <h3 className="education__section-title">Education</h3>
            <div className="education__cards">
              {education.map((edu, index) => (
                <div key={index} className="education__card">
                  <div className="education__card-content">
                    <div className="education__degree">{edu.degree}</div>
                    {edu.field && (
                      <div className="education__field">{edu.field}</div>
                    )}
                    <div className="education__institution">{edu.institution}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="education__section">
            <h3 className="education__section-title">Certifications</h3>
            <div className="education__cards">
              {certifications.map((cert, index) => (
                <div key={index} className="education__card education__card--cert">
                  <div className="education__card-content">
                    <div className="education__cert-name">{cert.name}</div>
                    {cert.credential && (
                      <div className="education__credential">{cert.credential}</div>
                    )}
                    <div className="education__issuer">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};