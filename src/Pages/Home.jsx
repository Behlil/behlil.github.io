import React from 'react'
import Introduction from '../components/Introduction'
import "./home.css"
import SkillsRadar from '../components/SkillsRadar'
import Contact from '../components/Contact'
import ProjectsPage from '../components/ProjectPage'
import MyEducation from '../components/MyEducation'


export default function Home() {
    return (
        <div className='home'>
            <Introduction />
            <ProjectsPage />
            <MyEducation />
            <SkillsRadar />
            <Contact />
        </div>
    )
}
