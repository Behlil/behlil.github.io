import React from "react";
import styled from "styled-components";
import Project from "./Project";
import house_img from "../Images/house-price.jpg";
import digits_img from "../Images/digist.jpg";

// A styled component for the projects container
const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  justify-content: center;
  gap: 20px; // Use flexbox gap to create space between items

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    }
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin: 2rem 0 0 0;
    color: #333;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    color: #000;
    padding: 2rem 0;

    & @media (max-width: 768px) {
        margin: 1rem;
        width: 100%;
    }
`;
const Sep = styled.hr`
    width: 10%;
    height: 3px;
    background: #f00;
    border: none;
    margin-bottom: 2rem ;
`;
// The projects component that displays projects
const Projects = () => {

    // Some dummy data for the projects
    const projects = [
        {
            title: "House Price Prediction",
            domain: "Machine Learning",
            description: " Using Python and scikit-learn, a popular machine learning library, I built a regression model that can learn from historical data and make predictions for new houses.",
            image: house_img,
            tag: ["Python", "Pandas", "Scikit-learn"]
        },
        {
            title: "Digits Recognition with MNIST",
            domain: "Machine Learning",
            description: "MNIST is a project that involves recognizing handwritten digits from images. Using Keras, a high-level neural network framework, and matplotlib, a visualization library, I built and trained a convolutional neural network that can classify the images into 10 categories",
            image: digits_img,
            tag: ["Python", "Keras", "matplotlib"]
        },
        {
            title: "E-commerce Website with Shopify",
            domain: "Web Development",
            description: "A fully functional e-commerce website that sells products online.",
            image: "https://picsum.photos/300/200?random=3",
            tag: ["Shopify", "HTML", "CSS"]
        }
    ];

    // Return the JSX element for the projects
    return (
        <Container>
            <Title>Latest Projects</Title>
            <Sep />
            <ProjectsContainer>

                {projects.map(project => (
                    <Project
                        key={project.title}
                        title={project.title}
                        domain={project.domain}
                        description={project.description}
                        image={project.image}
                        tag={project.tag}
                    />

                ))}
            </ProjectsContainer>
        </Container>
    );
};

export default Projects;