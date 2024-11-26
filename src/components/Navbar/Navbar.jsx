import './Navbar.css';
import { useEffect, useReducer, useRef, useState } from 'react';

const Navbar = ({ windowWidth }) => {

    const [activeSection, setActiveSection] = useState("about");
    const navbarhighlighter = useRef(null);

    // DOM references to navbar items
    const navbarHome = useRef(null);
    const navbarAbout = useRef(null);
    const navbarProjects = useRef(null);

    // function to fetch position and width in the DOM of navbar items
    const getNavbarItemBounds = (item) => item.current.getBoundingClientRect();

    useEffect(() => {
        const highlight = navbarhighlighter.current;

        switch (activeSection) {
            case "home":
                highlight.style.left = `calc(${getNavbarItemBounds(navbarHome).left}px - 10px)`;
                highlight.style.width = `calc(${getNavbarItemBounds(navbarHome).width}px + 20px)`;
                break;
            case "about":
                highlight.style.left = `calc(${getNavbarItemBounds(navbarAbout).left}px - 10px)`;
                highlight.style.width = `calc(${getNavbarItemBounds(navbarAbout).width}px + 20px)`;
                break;
            case "projects":
                highlight.style.left = `calc(${getNavbarItemBounds(navbarProjects).left}px - 10px)`;
                highlight.style.width = `calc(${getNavbarItemBounds(navbarProjects).width}px + 20px)`;
                break;

        }
    }, [activeSection, windowWidth]);

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