import React from "react";
import styled from "styled-components";
import house_img from "../Images/house-price.jpg";
import digits_img from "../Images/digits-rec.jpg";
import hosp_readmission from "../Images/hospital-readmission.jpg";
import ProjectCard from "./ProjectCard";

// A styled component for the projects container
const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  justify-content: center;
  gap: 10px; // Use flexbox gap to create space between items
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin: 2rem 0;
    color: #333;
`;
const Container = styled.div`
    
    background: #fff;
    color: #000;
`;
// The projects component that displays projects
const ProjectsPage = () => {

    const projects = [
        {
            title: "House Price Prediction Competition",
            domain: "Web Development",
            description: "A web app that uses D3.js to create interactive charts and graphs.",
            image: house_img,
            tag: ["React", "D3", "JavaScript"],
            to: "https://github.com/Behlil/House-Price-Competition"
        },
        {
            title: "MNIST Handwritten Digit Recognition",
            domain: "Machine Learning",
            description: "A Python script that uses natural language processing to analyze the sentiment of text.",
            image: digits_img,
            tag: ["Python", "NLP", "scikit-learn"],
            to: "https://github.com/Behlil/MNIST-Handwritten-Digit-Recognition"
        },
        {
            title: "E-commerce Website with Shopify",
            domain: "Web Development",
            description: "A fully functional e-commerce website that sells products online.",
            image: hosp_readmission,
            tag: ["Shopify", "HTML", "CSS"]
        }
    ];


    // Return the JSX element for the projects
    return (
        <Container>
            <Title>Latest Projects</Title>

            <ProjectsContainer>

                {projects.map(project => (
                    <ProjectCard
                        imageSrc={project.image}
                        key={project.title}
                        title={project.title}
                        domain={project.domain}
                        description={project.description}
                        tags={project.tag}
                        to={project.to}
                    />

                ))}
            </ProjectsContainer>
        </Container>
    );
};

export default ProjectsPage;