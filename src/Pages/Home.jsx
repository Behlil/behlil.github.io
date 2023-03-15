import React from 'react'
import Introduction from '../components/Introduction'
import "./home.css"
import projectsData from '../Data/projects'
import LatestProjects from '../components/LatestProjects'
import Recommendations from '../components/Recommendations'




export default function Home() {
    return (
        <div className='home'>
            <Introduction />
            <LatestProjects projects={projectsData} />
            <Recommendations />
        </div>
    )
}
