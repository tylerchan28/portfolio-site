import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from '@material-ui/core/styles';
import EmailLogo from "./images/email-logo-png-1111.png";
import LinkedInLogo from "./images/linkedin_black_logo_icon_147114.png";
import GitHubLogo from "./images/GitHub-Mark-64px.png";


const Sidebar = () => {

    const sendEmail = () => {
        window.open("mailto:tylerchan28@gmail.com");
    }

    const useStyles = makeStyles({
        MuiDrawer: {
            alignItems: 'center',
            backgroundColor: '#8996ac',
            color: 'white',
            position: 'fixed',
            width: '10vw'
        }
    })
    
    const classes = useStyles();
    
    return (
        <Drawer classes={{paper: classes.MuiDrawer}} variant="permanent">
            <div className="sidebar__item-container">
                <div className="sidebar__name">Tyler Chan</div>
                <a href="#about-me" className="sidebar__item">About Me</a>
                <a href="#projects" className="sidebar__item">Projects</a>
                <a href="#skills" className="sidebar__item">Skills</a>
                <a href="#education" className="sidebar__item">Education</a>

                <div className="sidebar__button-container">
                    <Tooltip title="LinkedIn" arrow={true} placement="right">
                        <a href="https://www.linkedin.com/in/tylerchan28/" target="_blank" rel="noopener noreferrer" className="sidebar__button">
                            <img className="sidebar__image" src={LinkedInLogo} alt="LinkedIn logo" />
                        </a>
                    </Tooltip>
                    <Tooltip title="Github" arrow={true} placement="right">
                        <a href="https://github.com/tylerchan28" target="_blank" rel="noopener noreferrer" className="sidebar__button">
                            <img className="sidebar__image" src={GitHubLogo} alt="GitHub Logo" />
                        </a>
                    </Tooltip>
                    <Tooltip title="Email" arrow={true} placement="right">
                        <button className="sidebar__button" onClick={sendEmail}>
                            <img className="sidebar__image" src={EmailLogo} alt="Email Logo" />
                        </button>
                    </Tooltip>
                </div>
            </div>
        </Drawer>
    )
}

export default Sidebar;