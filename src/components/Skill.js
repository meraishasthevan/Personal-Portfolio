import React from "react";
import './Skill.css';
import html from '../components/images/html.webp';
import css from '../components/images/css.png';
import js from '../components/images/js.png';
import react from '../components/images/react.png';
import redux from '../components/images/redux.png';
import bootsrap from '../components/images/bootsrap.png';
import material from '../components/images/material.png';
import github from '../components/images/github.png';
import vercel from '../components/images/vercel.png';

function Skill() {
    return (
        <div id="skill">
            <div className="skill-container" data-aos="fade-right">
                <h1> <i className="fas fa-cogs"></i>Skills & <span>Abilities</span></h1>
                <div className="skill-main">
                    <div>
                        <img src={html} alt="HTML5" />
                        <h1>HTML5</h1>
                    </div>
                    <div>
                        <img src={css} alt="CSS" />
                        <h1>CSS</h1>
                    </div>
                    <div>
                        <img src={js} alt="JavaScript" />
                        <h1>JavaScript</h1>
                    </div>
                    <div>
                        <img src={react} alt="React" />
                        <h1>React</h1>
                    </div>
                    <div>
                        <img src={redux} alt="Redux" />
                        <h1>Redux</h1>
                    </div>
                    <div>
                        <img src={bootsrap} alt="Bootstrap" />
                        <h1>Bootstrap</h1>
                    </div>
                    <div>
                        <img src={material} alt="Material UI" />
                        <h1>Material UI</h1>
                    </div>
                    <div>
                        <img src={github} alt="GitHub" />
                        <h1>GitHub</h1>
                    </div>
                    <div>
                        <img src={vercel} alt="Vercel" />
                        <h1>Vercel</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;
