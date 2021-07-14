import React from "react";
import Picture from "./images/me.jpg";

const Content = () => (
    <div className="content-div">
        <div className="content-about">
            <img src={Picture} alt="Me sitting on a tree" />
            <h1><a id="about-me">About Me</a></h1>
            <div className="about-me-container">
                I'm a self-taught web developer with a degree in Biological Sciences. I took the opportunity provided by quarantine to try coding after a friend's recommendation of UC Berkeley's CS61A course. After learning the basics of Python, I switched to learning JavaScript from The Odin Project to get familiar with industry development tools. <br></br>I quickly found that I loved the problem solving aspect of coding and how code turns into something tangible that I could actually use.

                Now, I primarily write code in React (style with SCSS) and am currently learning to use it's multiple libraries as well as touching up on backend technologies (Node.js, Express) to become a more well rounded developer.<br></br>
                
                I'm looking for a role that would allow me to contribute and work with a team while using tools and technology relevant to the software engineering industry.
            </div>
        </div>
        <div className="project-div">  
            <a id="projects">
                <h1>Projects</h1>
            </a>
            <div>Firebase Blogging Site</div>
            <div>Budgeting App</div>
        </div> 
        <div className="contact-div">
            <a id="contact-me">
                <h1>Contact Me</h1>
            </a>
            <li>Resume</li>
            <li><a href="https://github.com/tylerchan28" target="_blank" rel="noopener noreferrer" className="contact-item">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/tylerchan28/" target="_blank" rel="noopener noreferrer" className="contact-item">LinkedIn</a></li>
        </div>
    </div>
)

export default Content;