import React from 'react'
import { Link } from 'react-router-dom'
import "./HomeSection3.css"
import project_management from "../Images/project-management.png"

export default function HomeSection3() {
    return (
        <div className="home-section3">
            <div className="image">
                <img src={project_management} alt="Illustration" />
            </div>
            <div className="text">
                <h2>Project Management</h2>
                <p>
                    I take pride in my impeccable project management abilities, ensuring all aspects are executed seamlessly to achieve desired outcomes
                </p>
                <Link to="contact">Learn more</Link>
            </div>
        </div>
    )
}
