// Types for portfolio data following Single Responsibility Principle

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
}

export interface Certification {
  issuer: string;
  name: string;
  credential?: string;
}

export interface VolunteerExperience {
  organization: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  status: 'coming-soon' | 'active' | 'completed';
  technologies?: string[];
}

export interface PortfolioData {
  name: string;
  email: string;
  summary: string;
  experience: ExperienceItem[];
  education: Education[];
  certifications: Certification[];
  volunteer: VolunteerExperience[];
  projects: Project[];
}