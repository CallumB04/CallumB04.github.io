import './PortfolioPage.css';
import HomeSection from './sections/HomeSection/HomeSection';
import AboutSection from './sections/AboutSection/AboutSection';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';

const PortfolioPage = ({ projects, refs }) => {
    
    return (
        <main className='main'>
            <HomeSection sectionRef={refs.homeSection}/>
            <AboutSection sectionRef={refs.aboutSection}/>
            <ProjectsSection sectionRef={refs.projectsSection}/>            
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