import React from 'react'
import { Link } from 'react-router-dom'
import "./HomeSection2.css"
import data_collection from "../Images/datacollection.png"


export default function HomeSection2() {
    return (
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
    )
}
