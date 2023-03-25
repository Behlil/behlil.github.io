import React from 'react'
import Introduction from '../components/Introduction'
import "./home.css"
import Projects from '../components/ProjectPage'
import SkillsRadar from '../components/SkillsRadar'
import Contact from '../components/Contact'


export default function Home() {
    return (
        <div className='home'>
            
            <Introduction />
            <SkillsRadar />
            <Projects />
            <Contact />
        </div>
    )
}
