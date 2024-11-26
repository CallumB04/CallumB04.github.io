import './Navbar.css';
import { useEffect, useReducer, useRef, useState } from 'react';

const Navbar = ({ windowWidth, sections }) => {

    const [activeSection, setActiveSection] = useState("home");
    const navbarhighlighter = useRef(null);

    // DOM references to navbar items
    const navbarHome = useRef(null);
    const navbarAbout = useRef(null);
    const navbarProjects = useRef(null);

    // function to fetch position and width in the DOM of navbar items
    const getNavbarItemBounds = (item) => item.current.getBoundingClientRect();

    // function to map active section to respective navbar item
    const findItemToHighlight = () => {
        switch(activeSection) {
            case "home": return navbarHome;
            case "about": return navbarAbout;
            case "projects": return navbarProjects; 
        };
    };

    // function to update navbar highlights
    useEffect(() => {
        const highlight = navbarhighlighter.current;
        const item = findItemToHighlight();

        highlight.style.left = `calc(${getNavbarItemBounds(item).left}px - 10px)`;
        highlight.style.width = `calc(${getNavbarItemBounds(item).width}px + 20px)`;
    }, [activeSection, windowWidth]);


    // function to check if section is the most predominant on the viewport
    const isSectionInFocus = (section) => {
        if (section.getBoundingClientRect().y < window.innerHeight / 2) {
            return true;
        } return false;
    };

    useEffect(() => {
        // checks current predominant section each time the page is scrolled
        window.addEventListener("scroll", () => {

        // Iterating through 2D array of [<section>, <activeSection state value>]
        for (const section of [
            [sections.home, "home"], 
            [sections.about, "about"], 
            [sections.projects, "projects"]
        ]) {
            // Checking if section is predominant on the viewport
            if (isSectionInFocus(section[0].current)) { 
                setActiveSection(section[1]); // Update highlights on navbar
            }}
    })}, []);

    return (
        <nav className='navbar'>
            <NavbarItem value="home" itemRef={navbarHome}></NavbarItem>
            <NavbarItem value="about" itemRef={navbarAbout}></NavbarItem>
            <NavbarItem value="projects" itemRef={navbarProjects}></NavbarItem>
            
            <div id='navbar-highlighter' ref={navbarhighlighter}></div>
        </nav>
    );
};

const NavbarItem = ({value, itemRef}) => {

    const capitalisedValue = value.charAt(0).toUpperCase() + value.slice(1);

    return (
        <a href={`#${value}-section`} className='navbar-item' ref={itemRef}>
            {capitalisedValue}
        </a>
    );
};

export default Navbar;