import type { FC } from 'react';
import type { VolunteerExperience } from '../../types/portfolio.types';
import './Volunteer.css';

interface VolunteerProps {
  volunteer: VolunteerExperience[];
}

export const Volunteer: FC<VolunteerProps> = ({ volunteer }) => {
  return (
    <section className="volunteer" id="volunteer">
      <div className="volunteer__container">
        <h2 className="volunteer__title">Volunteer & Professional Associations</h2>
        
        <div className="volunteer__grid">
          {volunteer.map((vol, index) => (
            <div key={index} className="volunteer__card">
              <div className="volunteer__header">
                <h3 className="volunteer__role">{vol.role}</h3>
                <div className="volunteer__period">{vol.period}</div>
              </div>
              <div className="volunteer__organization">{vol.organization}</div>
              
              <ul className="volunteer__description">
                {vol.description.map((desc, idx) => (
                  <li key={idx} className="volunteer__description-item">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};