import './PortfolioPage.css';

const PortfolioPage = ({ projects, refs }) => {
    
    return (
        <main className='main'>
            <section className='portfolio-section light-mode' id='home-section' ref={refs.homeSection}>
                                
            </section>
            <section className='portfolio-section dark-mode' id='about-section' ref={refs.aboutSection}>
                
            </section>
            <section className='portfolio-section light-mode' id='projects-section' ref={refs.projectsSection}>
                
            </section>
        </main>
    );
};

// NOTES:
//
// When adding projects to project section, can map over projects object
// and pass project as props to a Project component, like shown:
//
// {Object.keys(projects).map((projectKey) => (
//     <Project 
//         key={projectKey} 
//         pageURL={projectKey}
//         project={projects[projectKey]}>
//     </Project>
//   ))}
//
// Inside Project.jsx...
//
// <Link to={`/projects/${pageURL}`}>
//     ... code here ...
// </Link>


export default PortfolioPage;