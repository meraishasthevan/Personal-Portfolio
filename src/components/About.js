import React from "react";
import './About.css';
import merai from '../components/images/Meraisha.jpg';

function About() {
    return (
        <div id="about">
            <div className="about-container" data-aos="fade-down-left">
                <h1><i className="fa fa-user" style={{ marginRight: '10px' }}></i>About <span>Me</span>
                </h1>
                <div className="about-content">
                    <div className="about-image">
                        <img src={merai} alt="Meraisha" />
                    </div>
                    <div className="about-details">
                        <h2>I'm Meraisha</h2>
                        <h4>Front End Developer</h4>
                        <p>I am a front-end developer based in Tenkasi, Tamil Nadu. I am very passionate about improving my coding skills & developing applications & websites. I build E-Commerce Websites using React. Working for myself to improve my skills. Love to build Front End clones.</p>
                        <p>Email: <span>meraishasthevan@gmail.com</span></p>
                        <p>Place: <span>Pulavanoor, Tenkasi - 627415</span></p>
                        <button>Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
