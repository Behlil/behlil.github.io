
import React from "react";
import styled from "styled-components";

// A styled component for the project image
const ProjectImage = styled.img`
  width: 100%; // Take all the width
  height: 100%; // Set a specific height
  object-fit: cover;
    transition: all 0.24s ease-in-out;
    overflow: hidden;

   
    
`;

// A styled component for the project container
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
//   justify-content: center;
  // margin: 20px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
  width: 380px; // Set a fixed width
  height: 500px; // Set a fixed height
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  &:hover ${ProjectImage} { // Use the parent selector & to target the image when the container is hovered
    transform: scale(1.05); // Scale up the image
    overflow: hidden;
  }

  // media queries
  @media (max-width: 768px) {
    width: 80%;
    // height: 300px;
  }
  

    
`;



// A styled component for the project title
const ProjectTitle = styled.h3`
  margin: 10px;
  font-size: 24px;
  text-align: center;
`;

// A styled component for the project domain
const ProjectDomain = styled.p`
  margin: 10px;
  font-size: 18px;
  color: #666;
`;

// A styled component for the project description
const ProjectDescription = styled.p`
 
  font-size: 16px;
  padding: 0 15px ;
`;

// A styled component for the project tag container
const ProjectTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

`;

// A styled component for the project tag
const ProjectTag = styled.span`
  display: inline-block;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  background-color: #eee;
  font-size: 12px; // Set a small font size
`;
// A styled component for the project image container
const ProjectImageContainer = styled.div`
  width: 100%; // Set a fixed width
  height: 250px; // Set a fixed height
  overflow: hidden; // Hide the overflow of the image

  & @media (max-width: 768px) {
    height: 200px;
  }

  
`;

// The project component that takes props
const Project = ({ title, domain, description, image, tag }) => {

    // Return the JSX element for the project
    return (
        <ProjectContainer>
            <ProjectImageContainer>
                <ProjectImage src={image} alt={title} />
            </ProjectImageContainer>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDomain>{domain}</ProjectDomain>
            <ProjectDescription>{description}</ProjectDescription>
            <ProjectTagContainer>
                {tag.map(t => <ProjectTag key={t}>{t}</ProjectTag>)}
            </ProjectTagContainer>
        </ProjectContainer>
    );
};

export default Project;