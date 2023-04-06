import React from 'react'
import Introduction from '../components/Introduction'
import "./home.css"
import SkillsRadar from '../components/SkillsRadar'
import Contact from '../components/Contact'
import ProjectsPage from '../components/ProjectPage'
import Services from '../components/Services'


export default function Home() {
    return (
        <div className='home'>
            <Introduction />
            <SkillsRadar />
            <ProjectsPage />
            <Services />
            <Contact />
        </div>
    )
}
