import { Link } from 'react-router-dom';
import './Project.css';
import { useEffect, useRef } from 'react';

const Project = ({ projectKey, project }) => {

    const projectRef = useRef(null); // project
    const projectDarkenRef = useRef(null); // background to fade over image when text appears
    const projectContentRef = useRef(null); // title, description and technologies

    // functions for showing / hiding text on projects
    const showTaskContent = () => {
        const background = projectDarkenRef.current;
        const content = projectContentRef.current;

        background.style.opacity = "0.9";
        content.style.opacity = "1";
        content.style.transform = "translateY(0px)";
    };
    const hideTaskContent = () => {
        const background = projectDarkenRef.current;
        const content = projectContentRef.current;

        background.style.opacity = "0";
        content.style.opacity = "0";
        content.style.transform = "translateY(20px)";
    };

    // handling project hover animations
    useEffect(() => {
        const project = projectRef.current;

        project.addEventListener("mouseover", () => { showTaskContent() });
        project.addEventListener("mouseout", () => { hideTaskContent() });

        window.addEventListener("scroll", () => {
            const viewportCenter = window.innerHeight / 2;
            const projectBounds = project.getBoundingClientRect();
            const isPortait = window.innerHeight > window.innerWidth;

            // checking if center of viewport is inside of project element
            // also ensures user is on mobile for this feature
            if (viewportCenter > projectBounds.y
                && viewportCenter < projectBounds.y + projectBounds.height
                && isPortait) {
                    showTaskContent();
                } else {
                    hideTaskContent();
                }
        })
    }, [])

    return (
        // when built project pages: <Link to={`/projects/${projectKey}`}>
        <Link to={`/projects/${projectKey}`}>
            <div className='projects-section-project' ref={projectRef}>
                <img 
                    src={`/assets/project-images/${projectKey}/${project.images[0]}`}
                    className='projects-section-project-image'
                />
    
                <div className='projects-section-project-darken' ref={projectDarkenRef}></div>
    
                <div className='projects-section-project-content' ref={projectContentRef}>
                    <h3 className='projects-section-project-title'>{project.title}</h3>
                    <p className='projects-section-project-description'>{project.description}</p>
    
                    <div className='projects-section-project-technologies'>
                        {project.mainTechnologies.map((item) => {
                            return <p key={item} className='projects-section-project-technology'>{item}</p>
                        })}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Project;