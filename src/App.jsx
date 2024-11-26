import './styles/App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';

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

  return (
    <Router>
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
