import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className='project-navbar'>
            <Link to='/'>
                <i className='fa fa-house-chimney'></i>
                <p>Home</p>
            </Link>
        </nav>
    );
};

export default Navbar;