import React from "react";
import './Work.css';
import restaurant from '../components/images/restaurant.png';
import fruit from '../components/images/fruit.png';
import perfume from '../components/images/perfume.png';
import task from '../components/images/task.png';
import crud from '../components/images/crud.png';
import cosmetics from '../components/images/cosmetics.png';

function Work(){
    return(
        <div id="work" data-aos="fade-up-right">
            <h1><i className="fas fa-project-diagram project-icon"></i>Projects <span>Made</span></h1>
            <div className="work-container">
                <div className="work-item">
                    <div>
                        <img src={restaurant} alt="Restaurant Theme"/>
                        <div className="overlay">
                            <h1>Restaurant Theme</h1>
                        </div>
                    </div>
                    <div>
                        <img src={fruit} alt="Fruit Shop"/>
                        <div className="overlay">
                            <h1>Fruit Shop</h1>
                        </div>
                    </div>
                    <div>
                        <img src={perfume} alt="Perfume E-commerce"/>
                        <div className="overlay">
                            <h1>Perfume E-commerce</h1>
                        </div>
                    </div>
                    <div>
                        <img src={task} alt="Task Management"/>
                        <div className="overlay">
                            <h1>Task Management</h1>
                        </div>
                    </div>
                    <div>
                        <img src={crud} alt="Crud Operation"/>
                        <div className="overlay">
                            <h1>Crud Operation</h1>
                        </div>
                    </div>
                    <div>
                        <img src={cosmetics} alt="Cosmetics E-commerce"/>
                        <div className="overlay">
                            <h1>Cosmetics E-commerce</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;
