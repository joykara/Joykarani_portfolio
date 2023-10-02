import React, {useState} from 'react';
import './navbar.css';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
      <div className="navbar-container">
            <div className="navbar-logo">
                <h2 className='logo'>JOYKARA</h2>
            </div>
            <div>
                <ul className="navbar-links">
                    <li><a href="#about-me">ABOUT ME</a></li>
                    <li><a href="#stacks">STACKS</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="footer">CONTACT</a></li>
                </ul>
            </div>
            {/* hamburger navbar */}
            <div className={`navbar-toggle ${toggleMenu ? 'active' : ''}`} onClick={handleToggle}>
                {toggleMenu ? <RiCloseLine size={25} color='black'/> : <RiMenuLine size={25} color='white'/>}
                {toggleMenu && (
                <nav className="navbar-menu-mobile">
                    <ul>
                        <li><a href="#about-me">ABOUT ME</a></li>
                        <li><a href="#stacks">STACKS</a></li>
                        <li><a href="#projects">PROJECTS</a></li>
                        <li><a href="footer">CONTACT</a></li>
                    </ul>
                </nav>
                )}
            </div>
      </div>
  )
}

export default Navbar
