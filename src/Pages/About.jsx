import React from 'react'
import MyEducation from '../components/MyEducation'
import './About.css'
import Certification from '../components/Certification'
import MyIntroduction from '../components/MyIntroduction'
import SkillsRadar from '../components/SkillsRadar'

export default function About() {
    return (
        <>
            <div className='about'>
                <MyIntroduction />
                <SkillsRadar />
                <MyEducation />
                <Certification />
            </div>
        </>
    )
}
