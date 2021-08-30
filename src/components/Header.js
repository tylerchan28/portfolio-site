import React from "react";
import EmailLogo from "./images/email-logo-png-1111.png";
import LinkedInLogo from "./images/linkedin_black_logo_icon_147114.png";
import GitHubLogo from "./images/GitHub-Mark-64px.png";

const Header = () => {
    
    const sendEmail = () => {
        window.open("mailto:tylerchan28@gmail.com");
    }

    return (
        <div className="header-div">
            <div className="header-name">
                Tyler Chan
            </div>
            <div className="header-navbar">
                <a href="https://www.linkedin.com/in/tylerchan28/" target="_blank" rel="noopener noreferrer" className="header-item">
                    <img className="navbar-image" src={LinkedInLogo} alt="LinkedIn logo" />
                </a>
                <a href="https://github.com/tylerchan28" target="_blank" rel="noopener noreferrer" className="header-item">
                    <img className="navbar-image" src={GitHubLogo} alt="GitHub Logo" />
                </a>
                <button className="email" onClick={sendEmail}>
                    <img className="email-navbar-image" src={EmailLogo} alt="Email Logo" />
                </button>
            </div>
        </div>
    )
}

export default Header;