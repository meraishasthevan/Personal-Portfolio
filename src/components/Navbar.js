import React from "react";
import './Navbar.css';

function Navbar(){
    return(
        <div className="nav-sec">
            <div className="container">
                <div className="logo">
                    <h1>Portfolio</h1>
                </div>
                <nav>
                    <ul className="nav-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li> 
                        <li><a href="#skill">Skill</a></li> 
                        <li><a href="#education">Education</a></li> 
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
