import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
    // You can change this data according to your projects
    const projects = [
        {
            title: "Project 1",
            description: "A brief summary of what this project is about.",
            image: "project1.jpg",
            github: "https://github.com/yourname/project1",
            demo: "https://yourname.github.io/project1",
        },
        {
            title: "Project 2",
            description: "A brief summary of what this project is about.",
            image: "project2.jpg",
            github: "https://github.com/yourname/project2",
            demo: "https://yourname.github.io/project2",
        },
        {
            title: "Project 3",
            description: "A brief summary of what this project is about.",
            image: "project3.jpg",
            github: "https://github.com/yourname/project3",
            demo: "https://yourname.github.io/project3",
        },
        // Add more projects here
    ];

    return (
        <div className="portfolio" id="portfolio">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="portfolio-grid">
                {projects.map((project) => (
                    <div className="portfolio-card" key={project.title}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="portfolio-image"
                        />
                        <div className="portfolio-content">
                            <h2 className="portfolio-project-title">{project.title}</h2>
                            <p className="portfolio-project-description">
                                {project.description}
                            </p>
                            <div className="portfolio-links">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="portfolio-link"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="portfolio-link"
                                >
                                    Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}