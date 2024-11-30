import './styles/App.css'
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Navbar from './components/Navbar/Navbar';

function App() {

  // Projects information used in portfolio and project pages
  const projects = {
    "react-todolist": {
      title: "React Todolist",
      description: "an interactive To-do list App",
      githubRepo: "https://github.com/CallumB04/React-Todolist",
      liveWebsite: "",
      technologies: ["React", "Javascript", "CSS"],
      images: ["react-todolist.png"]
    },
    "russthetechguy": {
      title: "russthetechguy.co.uk",
      description: "a commercial website built for a computer repair technician business",
      githubRepo: "https://github.com/CallumB04/russthetheguy.co.uk",
      liveWebsite: "https://russthetechguy.co.uk",
      technologies: ["HTML", "Javascript", "CSS"],
      images: ["russthetechguy.png"]
    },
    "old-portfolio": {
      title: "Old Portfolio",
      description: "my original portfolio website, and first project within web development",
      githubRepo: "https://github.com/CallumB04/callumb04.github.io",
      liveWebsite: "https://callumb04.github.io",
      technologies: ["HTML", "Javascript", "CSS"],
      images: ["portfolio-website.png"]
    },
    "platform-shooter": {
      title: "Platform Shoooter",
      description: "an in-progress 2D platforming shooter game",
      githubRepo: "https://github.com/CallumB04/Platform-Shooter",
      liveWebsite: "",
      technologies: ["C++", "SFML"],
      images: ["platform-shooter.png"]
    },
    "auto-mate": {
      title: "Auto-mate",
      description: "a discord bot with many automation and moderation features",
      githubRepo: "https://github.com/CallumB04/auto-mate",
      liveWebsite: "",
      technologies: ["Python", "discord.py"],
      images: ["auto-mate.png"]
    },
    "snake-sfml": {
      title: "Snake Game",
      description: "a simple re-creation of the game snake",
      githubRepo: "https://github.com/CallumB04/Snake-SFML",
      liveWebsite: "",
      technologies: ["C++", "SFML"],
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
      <Navbar 
        windowWidth={windowWidth}
        sections={{home: homeSection, about: aboutSection, projects: projectsSection}}
      />
      <Routes>
        <Route 
          path="/" 
          element={
            <PortfolioPage 
              projects={projects} 
              refs={{homeSection: homeSection, aboutSection: aboutSection, projectsSection: projectsSection}}
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
