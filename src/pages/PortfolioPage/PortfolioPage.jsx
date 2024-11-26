import './PortfolioPage.css';

const PortfolioPage = ({ projects }) => {
    
    return (
        <main className='main'>
            <section className='portfolio-section' id='home-section'>

            </section>
            <section className='portfolio-section' id='about-section'>
                
            </section>
            <section className='portfolio-section' id='projects-section'>
                
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