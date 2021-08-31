import React from "react";
import Picture from "./images/me.jpg";
import Container from "@material-ui/core/Container";

const AboutMe = () => (
    <Container maxWidth="false">
        <div className="section-container section-container--about">
            <img src={Picture} className="about-me__picture" alt="Me sitting on a tree" id="about-me" />
            <h1>About Me</h1>
            <div className="about-me__about">
                Hi! I'm a self-taught web developer with a degree in Biological Sciences. I started with UC Berkeley's CS61A course and after learning the basics of Python, I switched to learning JavaScript from The Odin Project to get familiar with industry development tools. <br></br>I quickly found that I loved the problem solving aspect of coding and how code turns into something tangible that I could actually use.

                Now, I primarily write code in React and am currently learning to use it's multiple libraries along with backend technologies (Node.js, Express) to become a more well rounded developer.<br></br>
                
                I'm looking for a role that would allow me to contribute and work with a team while using tools and technology relevant to the software engineering industry.
            </div>
        </div>
    </Container>
)

export default AboutMe;