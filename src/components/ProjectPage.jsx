import React from "react";
import styled from "styled-components";
import churn_img from "../Images/churn-analysis.jpg";
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
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
    margin: 2rem 0;
    color: #454545;
`;
const Container = styled.div`
    
    background: #fff;
    color: #000;
`;
// The projects component that displays projects
const ProjectsPage = () => {

    const projects = [
        {
            title: "Customer Churn Analysis",
            domain: "Telecom Industry",
            description: "Analyze customer churn using Power BI and a telecom dataset. Explore the factors and segments that affect customer retention and loyalty. Provide recommendations to reduce churn and increase satisfaction.",
            image: churn_img,
            tag: ["Power BI", "DAX"],
            to: "https://github.com/Behlil/Analyzing-Customer-Churn-using-Power-BI"
        },
        {
            title: "Hospital Readmission Analysis",
            domain: "Web Development",
            description: "This project aims to reduce hospital readmissions by using machine learning models to predict the risk of readmission for patients with diabetes. The project uses a dataset from the UCI Machine Learning Repository that contains clinical and administrative information of over 100,000 hospital admissions. The project explores different features, models, and evaluation metrics to find the best way to identify high-risk patients and provide recommendations for improving their care transitions.",
            image: hosp_readmission,
            tag: [ "Python", "pandas", "numpy", "scikit-learn", "XGBoost"],
            to: "https://github.com/Behlil/Reduce-Hospital-Readmissions"
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