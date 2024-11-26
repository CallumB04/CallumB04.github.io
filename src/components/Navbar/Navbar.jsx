import 'Navbar.css';
import { useEffect } from 'react';

const Navbar = () => {

    return (
        <nav className='navbar'>
            <NavbarItem value="home"></NavbarItem>
            <NavbarItem value="about"></NavbarItem>
            <NavbarItem value="projects"></NavbarItem>
        </nav>
    );
};

const NavbarItem = ({value}) => {

    const capitalisedValue = value.charAt(0).toUpperCase() + value.slice(1);

    return (
        <a href={`#${value}-section`} className='navbar-item'>
            {capitalisedValue}
        </a>
    );
};

export default Navbar;