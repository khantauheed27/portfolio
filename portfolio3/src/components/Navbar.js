import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">TK</div>
                <button className="hamburger" onClick={toggleMenu}>
                    <div className={`line ${isOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isOpen ? 'open' : ''}`}></div>
                </button>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li>
                      <a href="#about">
                        About
                        <span className="sarpanch-regular text-blue-700" style={{ float: 'right', marginLeft: '8px' }}>के बारे में</span>
                      </a>
                    </li>
                    <li>
                      <a href="#work">
                        Work
                        <span className="sarpanch-regular text-blue-700" style={{ float: 'right', marginLeft: '8px' }}>काम</span>
                      </a>
                    </li>
                    <li>
                      <a href="#skills">
                        Skills
                        <span className="sarpanch-regular text-blue-700" style={{ float: 'right', marginLeft: '8px' }}>कौशल</span>
                      </a>
                    </li>
                    <li>
                      <a href="#education">
                        Education
                        <span className="sarpanch-regular text-blue-700" style={{ float: 'right', marginLeft: '8px' }}>शिक्षा</span>
                      </a>
                    </li>
                    <li>
                      <a href="#certifications">
                        Certifications
                        <span className="sarpanch-regular text-blue-700" style={{ float: 'right', marginLeft: '8px' }}>प्रमाणपत्र</span>
                      </a>
                    </li>
                    <li>
                      <a href="#contact">
                        Contact
                        <span className="sarpanch-regular text-blue-700" style={{ float: 'right', marginLeft: '8px' }}>संपर्क</span>
                      </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
