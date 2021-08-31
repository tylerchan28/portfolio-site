import React from "react";
import Container from "@material-ui/core/Container"
const Education = () => (
    <Container maxWidth={false}>
        <div className="section-container section-container--education">
            <h1 id="education">Education</h1>
            <div className="education__info">
                <div>
                    <p>University of California, Davis</p>
                    <p className="education__subsection">Bachelor of Science</p>
                    <p className="education__subsection">Biological Sciences</p>
                </div>
                <div className="education__date">
                    September 2016 - March 2020
                </div>
            </div>
        </div>
    </Container>
)

export default Education;