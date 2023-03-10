import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

export default function Sidebar() {
    const [active, setActive] = useState('home');
    const [showNav, setShowNav] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Extract the path name from the location object
        const pathName = location.pathname;

        // Set the active link based on the path name
        if (pathName.startsWith('/projects')) {
            setActive('projects');
        } else {
            switch (pathName) {
                case '/':
                    setActive('home');
                    break;
                case '/about':
                    setActive('about');
                    break;
                case '/contact':
                    setActive('contact');
                    break;
                case '/experience':
                    setActive('experience');
                    break;
                case '/recommendations':
                    setActive('recommendations');
                    break;
                case '/services':
                    setActive('services');
                    break;
                default:
                    setActive('home');
            }
        }
    }, [location.pathname]);

    const handleLinkClick = (link) => {
        if (active === link) {
            return;
        }
        setActive(link);
        setShowNav(false);
        
    };

    const getLinkClassNames = (link) => {
        return active === link ? 'nav-item active' : 'nav-item';
    };

    const handleToggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <div className="navbar">
            <nav className="nav">
                <div className="nav-header">
                    <button className="toggle-nav" onClick={handleToggleNav}>
                        <FaBars />
                    </button>
                </div>

                <ul className={`nav-list ${showNav ? 'show' : ''}`}>
                    <li className={getLinkClassNames('home')}>
                        <Link to="/" onClick={() => handleLinkClick('home')}>
                            Home
                        </Link>
                    </li>
                    <li className={getLinkClassNames('about')}>
                        <Link to="/about" onClick={() => handleLinkClick('about')}>
                            About
                        </Link>
                    </li>

                    <li className={getLinkClassNames('projects')}>
                        <Link to="/projects" onClick={() => handleLinkClick('projects')}>
                            Projects
                        </Link>
                    </li>
                    <li className={getLinkClassNames('recommendations')}>
                        <Link
                            to="/recommendations"
                            onClick={() => handleLinkClick('recommendations')}
                        >
                            Recommendations
                        </Link>
                    </li>
                    <li className={getLinkClassNames('services')}>
                        <Link to="/services" onClick={() => handleLinkClick('services')}>
                            Services
                        </Link>
                    </li>
                    <li className={getLinkClassNames('contact')}>
                        <Link to="/contact" onClick={() => handleLinkClick('contact')}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
