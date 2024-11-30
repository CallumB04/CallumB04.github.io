import './Project.css';
import { useEffect, useRef } from 'react';

const Project = () => {

    const projectRef = useRef(null); // project
    const projectDarkenRef = useRef(null); // background to fade over image when text appears
    const projectContentRef = useRef(null); // title, description and technologies

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
        <div className='projects-section-project' ref={projectRef}>
            <img 
                src='/assets/project-images/react-todolist.png' 
                className='projects-section-project-image'
            />

            <div className='projects-section-project-darken' ref={projectDarkenRef}></div>

            <div className='projects-section-project-content' ref={projectContentRef}>
                <h3 className='projects-section-project-title'>React-Todolist</h3>
                <p className='projects-section-project-description'>An interactive to-do list App</p>

                <div className='projects-section-project-technologies'>
                    <p className='projects-section-project-technology'>React</p>
                    <p className='projects-section-project-technology'>HTML</p>
                    <p className='projects-section-project-technology'>CSS</p>
                </div>
            </div>
        </div>
    )
}

export default Project;