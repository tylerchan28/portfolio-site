import React from "react";
import Container from "@material-ui/core/Container"

const Skills = () => (
    <Container maxWidth={false}>
        <div className="section-container">
            <h1 id="skills">Skills</h1>
            <div className="skills__list">
                <div>
                    <h2 className="skills__subsection">Languages</h2>
                    <li>Javascript</li>
                    <li>Python</li>
                </div>
                <div>
                    <h2 className="skills__subsection">Technologies</h2>
                    <li>HTML/CSS/SASS</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>REST</li>
                    <li>SQL</li>
                    <li>git</li>
                    <li>Jest</li>
                </div>
            </div>
        </div>
    </Container>
)

export default Skills;