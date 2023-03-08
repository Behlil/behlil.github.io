import React, { useState } from 'react';
import Card from './Card';
import './ProjectCards.css'
import FilterBar from './FilterBar';
import img1 from '../Images/analysis.png';
import img2 from '../Images/powerbi.png';


export default function ProjectCards() {
    const projectsData = [
        {
            id: 'HousePriceCompetition',
            title: 'House Price Competition',
            description: 'This is the description for project 1.',
            image: img1,
            url: 'https://github.com/Behlil/House-Price-Competition/blob/main/notebook.ipynb',
            technologies: ['Python'],
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'This is the description for project 2.',
            image: img2,
            url: 'https://example.com/project2',
            technologies: ['Python', 'SQL'],
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'This is the description for project 3.',
            image: 'https://via.placeholder.com/150',
            url: 'https://example.com/project3',
            technologies: ['Python', 'SQL', 'Power BI'],
        },
        {
            id: 4,
            title: 'Project 4',
            description: 'This is the description for project 4.',
            image: 'https://via.placeholder.com/150',
            url: 'https://example.com/project3',
            technologies: ['Python', 'SQL', 'Power BI'],
        },
        {
            id: 5,
            title: 'Project 5',
            description: 'This is the description for project 5.',
            image: 'https://via.placeholder.com/150',
            url: 'https://example.com/project3',
            technologies: ['Python', 'SQL', 'Power BI'],
        },
        {
            id: 6,
            title: 'Project 6',
            description: 'This is the description for project 6.',
            image: 'https://via.placeholder.com/150',
            url: 'https://example.com/project3',
            technologies: ['Python', 'SQL', 'Power BI'],
        },
    ];
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
