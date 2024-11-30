import './ProjectsSection.css';

const ProjectsSection = ({ sectionRef, projects }) => {
    
    return (
        <section className='portfolio-section light-mode' id='projects-section' ref={sectionRef}>
            <h2 className='section-title projects-section-title'>My Projects</h2>
        </section>
    );
};

export default ProjectsSection;