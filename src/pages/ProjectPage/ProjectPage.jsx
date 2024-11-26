import './ProjectPage.css';
import React from "react";
import { useParams } from "react-router-dom";

const ProjectPage = ({ projects }) => {

    const { projectName } = useParams(); // get projectName from URL
    const project = projects[projectName]; // accessing project data from projects object
  
    // Displaying if user attemps to access non-existing project
    if (!project) {
        return <h2>Project not found</h2>;
    }
  
    return (
        <>
            
        </>
    );
  };

export default ProjectPage;