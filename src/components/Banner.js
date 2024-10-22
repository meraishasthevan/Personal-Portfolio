import React from "react";
import './Banner.css';
import merai from '../components/images/Meraisha.jpg';
import { FaGithub } from 'react-icons/fa'; 


function Banner() {
    return (
        <div className="banner" id="home">
        <div className="banner-container"  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div className="banner-main">
                <div className="banner-design">
                    <h1>Hi There,</h1>
                    <h1> I'm <span>Meraisha</span></h1>
                    <h3>I Am Into <span>Web Development</span></h3>
                    <button>About Me  <a href="#about"><i className="fas fa-arrow-down"></i></a></button>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/meraisha-s-6ab292317/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/meraishasthevan" target="_blank" rel="noopener noreferrer">
                          <FaGithub size={30} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="banner-right">
                <img src={merai} alt="Meraisha" />
            </div>
        </div>
        </div>
    );
}

export default Banner;
