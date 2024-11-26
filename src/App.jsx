import './styles/App.css'
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Navbar from './components/Navbar/Navbar';

function App() {

  // Projects information used in portfolio and project pages
  const projects = {
    "test-project": {
      title: "project title",
      description: "this is a project",
      githubRepo: "https://github.com/callumb04/testtesttest",
      websiteLink: "https://google.com",
      technologies: ["Javascript", "HTML", "CSS"],
      images: ["image1.png", "image2.png"]
    }
  };

  // holding window width in state to pass to child components
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // adds and removes event listener for handling window resizes on mount/unmount
  useEffect(() => {
    const handleResize = () => { setWindowWidth(window.innerWidth) };

    window.addEventListener("resize", handleResize);

    // remove event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <Navbar windowWidth={windowWidth}/>
      <Routes>
        <Route 
          path="/" 
          element={<PortfolioPage projects={projects} />} 
        />
        <Route
          path="/projects/:projectName"
          element={<ProjectPage projects={projects} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
