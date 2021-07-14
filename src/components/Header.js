import React from "react";

const Header = () => (
    <div className="header-div">
        <div className="header-name">
            Tyler Chan
        </div>
        <div className="header-navbar">
            <a href="#about-me" className="header-item">
                About
            </a>
            <a href="#contact-me" className="header-item">
                Contact Me
            </a>
            <a href="#projects" className="header-item">
                Projects
            </a>
        </div>
    </div>
)

export default Header;