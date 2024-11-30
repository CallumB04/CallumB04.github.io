import './ProjectsSection.css';
import Project from './Project.jsx'

const ProjectsSection = ({ sectionRef, projects }) => {
    
    return (
        <section className='portfolio-section light-mode' id='projects-section' ref={sectionRef}>
            <h2 className='section-title projects-section-title'>My Projects</h2>

            <div id='projects-section-projects-wrapper'>
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </section>
    );
};

export default ProjectsSection;