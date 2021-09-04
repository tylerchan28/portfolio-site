import React from "react";
import Container from "@material-ui/core/Container"

const Skills = () => (
    <Container maxWidth={false}>
        <div className="section-container">
            <h1 id="skills">Skills</h1>
            <div className="skills__list">
                <div>
                    <h2 className="skills__subsection">Languages</h2>
                    <div className="skills__technologies">
                        <li>Javascript, Python</li>
                    </div>
                </div>
                <div className="skills_techonologies-container">
                    <h2 className="skills__subsection">Technologies</h2>
                    <div className="skills__technologies">
                        <div className="skills__stack">Front-End</div>
                        <li>React, Redux, HTML/CSS/SASS, git, Jest</li>
                    </div>
                    <div className="skills__technologies">
                        <div className="skills__stack">Back-End</div>
                        <li>Node, MongoDB, Express, REST, SQL</li>
                    </div>
                </div>
            </div>
        </div>
    </Container>
)

export default Skills;