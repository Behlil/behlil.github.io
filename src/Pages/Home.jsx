import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import data_collection from "../Images/datacollection.png"
import project_management from "../Images/project-management.png"



export default function Home() {
    return (
        <div className='home'>
            <div className='home-section1'>
                <h2>Unlocking insights through data analysis to drive informed decision-making and propel your business forward.</h2>
                <Link to="contact">Contact me</Link>
            </div>
            <div className="home-section2">
                <div className="text">
                    <h2>My Data Analysis Process</h2>
                    <p>Optimizing business decisions requires the expertise of a skilled and experienced business analyst to unlock the full potential of your data.</p>
                    <Link to="contact">Learn more</Link>
                </div>
                <div className="image">
                    <img src={data_collection} alt="Illustration" />
                </div>
            </div>
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
        </div>
    )
}
