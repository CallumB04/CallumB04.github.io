import './ProjectPage.css';
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from './Navbar/Navbar';

const ProjectPage = ({ projects }) => {

    const { projectName } = useParams(); // get projectName from URL
    const project = projects[projectName]; // accessing project data from projects object
  
    // Displaying if user attemps to access non-existing project
    if (!project) {
        return (
        <>
            <Navbar />
            <h2 className='project-not-found'>
                Project not found
            </h2>
        </>
        );
    }
  
    return (
        <main className="main">
            <Navbar />
            
        </main>
    );
  };

export default ProjectPage;