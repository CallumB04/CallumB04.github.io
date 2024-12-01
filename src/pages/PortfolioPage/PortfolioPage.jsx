import './PortfolioPage.css';
import HomeSection from './sections/HomeSection/HomeSection';
import AboutSection from './sections/AboutSection/AboutSection';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';
import Navbar from './Navbar/Navbar';

const PortfolioPage = ({ projects, refs, windowWidth }) => {
    
    return (
        <>
            <Navbar 
                windowWidth={windowWidth}
                sections={{home: refs.homeSection, about: refs.aboutSection, projects: refs.projectsSection}}
            />

            <main className='main'>
                <HomeSection sectionRefs={refs}/>
                <AboutSection sectionRef={refs.aboutSection}/>
                <ProjectsSection projects={projects} sectionRef={refs.projectsSection}/>            
            </main>
        </>
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