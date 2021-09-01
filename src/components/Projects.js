import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Blog1 from "./images/blog1.png";
import Blog2 from "./images/blog2.png";
import Blog3 from "./images/blog3.jpg";
import Boba1 from "./images/boba1.jpg";
import Boba2 from "./images/boba2.png";
import Boba3 from "./images/boba3.png";
import Boba4 from "./images/boba4.jpg";
import Budget1 from "./images/budget1.png";
import Budget2 from "./images/budget2.png";
import Budget3 from "./images/budget3.png";

const Projects = () => { 

    const [bobaCarousel, showBobaCarousel] = useState(false);
    const [blogCarousel, showBlogCarousel] = useState(false);
    const [budgetCarousel, showBudgetCarousel] = useState(false);

    return (
        <Container maxWidth={false}>
            <div className="section-container">  
                <h1 id="projects">Projects</h1>
                <div className="project__container">
                    <div className="project__title">Boba Guide <span className="project__technologies">React, Javascript, HTML/CSS/SCSS, Node, Express, MongoDB/Mongoose</span></div>
                    <div className="project__description">A specialized review site for the top 50 boba shops in major cities providing community sourced feedback to help users decide where to get their next drink.</div>
                    <Button style={{ backgroundColor: "#8996ac", marginTop: "10px" }} onClick={() => showBobaCarousel(!bobaCarousel)} variant="contained" color="secondary">Show</Button>
                    { 
                        bobaCarousel === true && 
                        <Carousel className="carousel__slideshow" infiniteLoop={true}>
                            <div>
                                <p className="legend">Login page.</p>
                                <img className="carousel__image" src={Boba4} alt="Boba guide login page."/>
                            </div> 
                            <div>
                                <p className="legend">City page.</p>
                                <img className="carousel__image" src={Boba1} alt="City page of boba guide."/>
                            </div>
                            <div>
                                <p className="legend">List of shops in a given city.</p>
                                <img className="carousel__image" src={Boba2} alt="Shop list of boba guide."/>
                            </div>
                            <div>
                                <p className="legend">Review page.</p>
                                <img className="carousel__image" src={Boba3} alt="Review page of boba guide."/>
                            </div>
                        </Carousel>
                    }
                </div>

                <div className="project__container">
                    <div className="project__title">Firebase Blogging Site <span className="project__technologies">React, Redux, Javascript, HTML/CSS/SCSS, Firebase</span></div>
                    <div className="project__description">A responsive blogging site where users can make posts and discuss in a comment section.</div>
                    <Button style={{ backgroundColor: "#8996ac", marginTop: "10px"}} onClick={() => showBlogCarousel(!blogCarousel)} variant="contained" color="primary">Show</Button>
                    { 
                        blogCarousel && 
                        <Carousel className="carousel__slideshow" infiniteLoop={true}> 
                            <div>
                                <p className="legend">Login page.</p>
                                <img className="carousel__image" src={Blog3} alt="Login page of blogging site." />
                            </div>
                            <div>
                                <p className="legend">Feed page.</p>
                                <img className="carousel__image" src={Blog1} alt="Feed page of blogging site."/>
                            </div>
                            <div>
                                <p className="legend">Post and comment page.</p>
                                <img className="carousel__image" src={Blog2} alt="Post and comment page of blogging site."/>
                            </div>
                            
                        </Carousel>
                    }
                </div>

                <div className="project__container">
                    <div className="project__title">Budgeting App <span className="project__technologies">React, Redux, Javascript, HTML/CSS/SCSS, Firebase, Jest</span></div>
                    <div className="project__description">A budgeting application that allows users to create, edit, and track their personal expenses.</div>
                    <Button style={{ backgroundColor: "#8996ac", marginTop: "10px"}} onClick={() => showBudgetCarousel(!budgetCarousel)} variant="contained" color="secondary">Show</Button>
                    { 
                        budgetCarousel && 
                        <Carousel className="carousel__slideshow" infiniteLoop={true}> 
                            <div>
                                <p className="legend">Dashboard page.</p>
                                <img className="carousel__image" src={Budget1} alt="Dashboard page of budgeting website." />
                            </div>
                            <div>
                                <p className="legend">Add expense page.</p>
                                <img className="carousel__image" src={Budget2} alt="Add expense page of budgeting website"/>
                            </div>
                            <div>
                                <p className="legend">Filter functionality.</p>
                                <img className="carousel__image" src={Budget3} alt="Showing functionality of filters on budgeting website"/>
                            </div>
                        </Carousel>
                    }
                </div>
            </div> 
        </Container>
    )
}

export default Projects;