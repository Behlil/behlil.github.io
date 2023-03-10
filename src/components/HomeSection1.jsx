import React from 'react'
import "./HomeSection1.css";
import { Link } from 'react-router-dom'

export default function HomeSection1() {
    return (

        <div className='home-section1'>
            <h2>Unlocking insights through data analysis to drive informed decision-making and propel your business forward.</h2>
            <Link to="contact">Contact me</Link>
        </div>
    )
}
