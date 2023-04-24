import React from 'react'
import Introduction from '../components/Introduction'
import "./home.css"
import SkillsRadar from '../components/SkillsRadar'
import Contact from '../components/Contact'
import ProjectsPage from '../components/ProjectPage'
import Services from '../components/Services'
import Certifications from '../components/Certification'


export default function Home() {
    return (
        <div className='home'>
            <Introduction />
            <SkillsRadar />
            <ProjectsPage />
            <Services />
            <Certifications />
            <Contact />
        </div>
    )
}
