import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import project_management from "../Images/project-management.png"
import HomeSection1 from '../components/HomeSection1'
import HomeSection2 from '../components/HomeSection2'
import HomeSection3 from '../components/HomeSection3'



export default function Home() {
    return (
        <div className='home'>
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
        </div>
    )
}
