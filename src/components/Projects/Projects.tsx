import type { FC } from 'react';
import type { Project } from '../../types/portfolio.types';
import './Projects.css';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">Projects</h2>
        
        <div className="projects__grid">
          {projects.map((project, index) => (
            <div key={index} className="projects__card">
              <div className="projects__card-header">
                <h3 className="projects__card-title">{project.title}</h3>
                <span className="projects__status">Coming Soon</span>
              </div>
              
              <p className="projects__card-description">{project.description}</p>
              
              <div className="projects__card-footer">
                <div className="projects__loading-bar">
                  <div className="projects__loading-progress"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};