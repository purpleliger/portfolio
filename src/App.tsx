import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Experience } from './components/Experience/Experience';
import { EducationSection } from './components/Education/Education';
import { Volunteer } from './components/Volunteer/Volunteer';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';
import { portfolioData } from './data/portfolioData';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero 
        name={portfolioData.name}
        email={portfolioData.email}
        summary={portfolioData.summary}
      />
      <Experience experiences={portfolioData.experience} />
      <EducationSection 
        education={portfolioData.education}
        certifications={portfolioData.certifications}
      />
      <Volunteer volunteer={portfolioData.volunteer} />
      <Projects projects={portfolioData.projects} />
      <Footer 
        name={portfolioData.name}
        email={portfolioData.email}
      />
    </div>
  );
}

export default App;
