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
            description: "This project aims to predict the sale price of residential homes in Ames, Iowa based on 79 explanatory variables. The project uses a dataset from a Kaggle competition, which contains 1460 training examples and 1459 test examples. The project applies various feature engineering techniques, such as creating new features, encoding categorical variables, and handling missing values.",
            image: house_img,
            tag: ["Python", "pandas", "scikit-learn", "matplotlib", "seaborn"],
            to: "https://github.com/Behlil/House-Price-Competition"
        },
        {
            title: "MNIST Handwritten Digit Recognition",
            domain: "Machine Learning",
            description: "This project aims to recognize handwritten digits using convolutional neural networks (CNNs) in Python with Keras. The project uses the MNIST dataset, which contains 70,000 images of handwritten digits from 0 to 9. The project trains a five-layer CNN model on the dataset and achieves an accuracy of 98.51%.",
            image: digits_img,
            tag: [ "Python", "keras", "tensorflow", "numpy"],
            to: "https://github.com/Behlil/MNIST-Handwritten-Digit-Recognition"
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