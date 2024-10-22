import React from "react";
import './Education.css';
import stc from '../components/images/stc.jpg';
import punitha from '../components/images/punitha.jpg';
import joseph from '../components/images/joseph.jpg';

function Education() {
    return (
        <div id="education">
            <div className="education-container" data-aos="fade-left">
                <h1><i className="fas fa-graduation-cap"></i>My <span>Education</span></h1>
                <div className="education-main">
                    <div className="education-item">
                        <div className="education-image">
                           <img src={joseph} alt="wait"/>
                        </div>
                        <div className="education-content">
                            <h2>St. Joseph College of Education | Self Financed</h2>
                            <h1>2021-2023 | Completed</h1>
                            <h2>Mettur</h2>
                        </div>
                        </div>
                        <div className="education-item">
                        <div className="education-image">
                            <img src={stc} alt="Sarah Tucker College" />
                        </div>
                        <div className="education-content">
                            <h2>Sarah Tucker College of Arts and Science | Autonomous</h2>
                            <h1>2018-2021 | Completed</h1>
                            <h2>Tirunelveli</h2>
                        </div>
                    </div>
                    <div className="education-item">
                        <div className="education-image">
                            <img src={punitha} alt="Punitha Arulappar Hr.sec School" className="edu-img"/>
                        </div>
                        <div className="education-content">
                            <h2>Punitha Arulappar Hr.sec School | State Board</h2>
                            <h1>2015-2018 | Completed</h1>
                            <h2>Avudaiyanoor</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
