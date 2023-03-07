import React, { useState } from 'react';
import Card from './Card';
import projectsData from '../data/Data';
import './ProjectCards.css'
import FilterBar from './FilterBar';


export default function ProjectCards() {
    const [selectedTechnology, setSelectedTechnology] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState(projectsData); // <--- add this line

    function handleChange(selectedTechnologies) {
        setSelectedTechnology(selectedTechnologies.join(','));

        if (selectedTechnologies.length === 0) {
            setFilteredProjects(projectsData);
        } else {
            setFilteredProjects(
                projectsData.filter((project) =>
                    project.technologies.some((technology) => selectedTechnologies.includes(technology))
                )
            );
        }
    }



    const technologies = [
        'Python',
        'SQL',
        'Excel',
        'Tableau',
        'Power BI',
        'R',
        'SAS',

        // Add other technologies as needed
    ];

    return (
        <div className='cards'>
            <h1>Projects</h1>
            <FilterBar technologies={technologies} onChange={handleChange} />
            <div className="project-cards">
                {filteredProjects.map((project) => (
                    // title, description, image, url
                    <Card key={project.id} project={project} />
                ))}
            </div>
            
            
        </div>
    );
}
