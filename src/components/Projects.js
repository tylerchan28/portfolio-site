import React from "react";
import Container from "@material-ui/core/Container";

const Projects = () => (
    <Container maxWidth="false">
        <div className="section-container">  
            <h1 id="projects">Projects</h1>
            <div className="project__container">
                <div className="project__title">Boba Guide</div>
                <div className="project__description">A specialized review site for the top 50 boba shops in major cities providing community sourced feedback to help users decide where to get their next drink.</div>
            </div>

            <div className="project__container">
                <div className="project__title">Firebase Blogging Site</div>
                <div className="project__description">A responsive blogging site where users can make posts and discuss in a comment section</div>
            </div>
            
            <div className="project__container">
                <div className="project__title">Budgeting App</div>
                <div className="project__description">Budgeting app description</div>
            </div>
        </div> 
    </Container>
)

export default Projects;