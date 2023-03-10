import React from 'react'
import "./HomeSection1.css";
import { Link } from 'react-router-dom'
import graph1 from "../Images/Data-trends.png"

export default function HomeSection1() {
    return (

        <div className='home-section1'>
            <div className="text-section">
                <h2>Unlocking <span className='highlighted'>insights</span> through data analysis to drive <span className="highlighted">informed decision-making</span> and propel your business forward.</h2>
                <Link to="contact">Contact me</Link>
            </div>
            <div className='home-graphs'>
                <img src={graph1} alt="job trends" />
            </div>
        </div>
    )
}
