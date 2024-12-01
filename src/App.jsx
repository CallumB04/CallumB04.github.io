import './styles/App.css'
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';

function App() {

  // Projects information used in portfolio and project pages
  const projects = {
    "portfolio": {
      title: "Portfolio Website",
      description: "An up-to-date portfolio showcasing my skills and projects",
      githubRepo: "https://github.com/CallumB04/callumb04.github.io",
      liveWebsite: "https://callumb04.github.io",
      mainTechnologies: ["React", "Javascript", "CSS"],
      allTechnologies: ["React", "Javascript", "CSS"],
      images: ["homepage.png"]
    },
    "react-todolist": {
      title: "React Todolist",
      description: "An interactive to-do list App",
      githubRepo: "https://github.com/CallumB04/react-todolist",
      liveWebsite: "https://callumb04.github.io/react-todolist",
      mainTechnologies: ["React", "Javascript", "CSS"],
      allTechnologies: ["React", "Javascript", "CSS"],
      images: ["react-todolist.png"]
    },
    "russthetechguy": {
      title: "russthetechguy.co.uk",
      description: "A commercial website built for a computer repair technician business",
      githubRepo: "https://github.com/CallumB04/russthetechguy.co.uk",
      liveWebsite: "https://russthetechguy.co.uk",
      mainTechnologies: ["HTML", "Javascript", "CSS"],
      allTechnologies: ["HTML", "Javascript", "CSS"],
      images: ["russthetechguy.png"]
    },
    "old-portfolio": {
      title: "Old Portfolio",
      description: "My original portfolio website, and first project within web development",
      githubRepo: "https://github.com/CallumB04/old-portfolio",
      liveWebsite: "https://callumb04.github.io/old-portfolio",
      mainTechnologies: ["HTML", "Javascript", "CSS"],
      allTechnologies: ["HTML", "Javascript", "CSS"],
      images: ["portfolio-website.png"]
    },
    "platform-shooter": {
      title: "Platform Shooter",
      description: "An in-progress 2D platforming shooter game",
      githubRepo: "https://github.com/CallumB04/platform-shooter",
      liveWebsite: "",
      mainTechnologies: ["C++", "SFML"],
      allTechnologies: ["C++", "SFML"],
      images: ["platform-shooter.png"]
    },
    "auto-mate": {
      title: "Auto-mate",
      description: "A discord bot with many automation and moderation features",
      githubRepo: "https://github.com/CallumB04/auto-mate",
      liveWebsite: "",
      mainTechnologies: ["Python", "discord.py", "Docker"],
      allTechnologies: ["Python", "discord.py", "Docker"],
      images: ["auto-mate.png"]
    },
    "snake-sfml": {
      title: "Snake Game",
      description: "A simple re-creation of the game snake",
      githubRepo: "https://github.com/CallumB04/snake-sfml",
      liveWebsite: "",
      mainTechnologies: ["C++", "SFML"],
      allTechnologies: ["C++", "SFML"],
      images: ["snake.png"]
    },
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

  // References for the sections in the portfolio page
  const homeSection = useRef(null);
  const aboutSection = useRef(null);
  const projectsSection = useRef(null);
  

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <PortfolioPage 
              projects={projects} 
              refs={{homeSection: homeSection, aboutSection: aboutSection, projectsSection: projectsSection}}
              windowWidth={windowWidth}
            />} 
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
