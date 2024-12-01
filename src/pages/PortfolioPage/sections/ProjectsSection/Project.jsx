import { Link } from 'react-router-dom';
import './Project.css';
import { useEffect, useRef } from 'react';

const Project = ({ projectKey, project }) => {

    const projectRef = useRef(null); // project
    const projectDarkenRef = useRef(null); // background to fade over image when text appears
    const projectContentRef = useRef(null); // title, description and technologies

    // handling project hover animations
    useEffect(() => {
        let project = projectRef.current;
        let background = projectDarkenRef.current;
        let content = projectContentRef.current;

        project.addEventListener("mouseover", () => {
            background.style.opacity = "0.9";
            content.style.opacity = "1";
            content.style.transform = "translateY(0px)";
        });

        project.addEventListener("mouseout", () => {
            background.style.opacity = "0";
            content.style.opacity = "0";
            content.style.transform = "translateY(20px)";
        });
    }, [])

    return (
        // when built project pages: <Link to={`/projects/${projectKey}`}>
        <Link to={project.githubRepo}>
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