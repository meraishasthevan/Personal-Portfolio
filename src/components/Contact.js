import React from "react";
import './Contact.css'; 
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; 

function Contact() {
    return (
        <div id="contact">
            <h1>Get In Touch</h1>
            <div className="contact-container">
                <div className="contact-section">
                    <h2>Meraisha's Portfolio</h2>
                    <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
                </div>

                <div className="contact-section">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skill">Skill</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#work">Work</a></li>
                    </ul>
                </div>

                <div className="contact-section">
                    <h2>Contact Info</h2>
                    <p><i className="fa fa-envelope" aria-hidden="true"></i> Email: <a href="mailto:your-email@example.com">meraishasthevan@gmail.com</a></p>
                    <p><i className="fa fa-phone" aria-hidden="true"></i>Phone: <a href="tel:+1234567890">7339171611</a></p>
                </div>
            </div>

            <div className="social-icons-main">
                <a href="https://github.com/meraishasthevan" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                </a>
                <a href="https://www.linkedin.com/in/meraisha-s-6ab292317/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={30} />
                </a>
                <a href="mailto:meraishasthevan@gmail.com">
                    <FaEnvelope size={30} />
                </a>
            </div>
        </div>
    );
}

export default Contact;
