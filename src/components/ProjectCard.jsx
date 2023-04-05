import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 250px;
  overflow: hidden;
  border: 1px solid #ccc;
  margin: 10px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 250px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 16px;
  background-color: #FF6000;
  opacity: 0.9;
  color: #fff;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
  ${CardWrapper}:hover & {
    transform: translateY(0);
  }
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
  
`;

const CardDescription = styled.p`
  font-size: 14px;
  margin-bottom: 0;
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 14px;

  
`;

const ProjectCard = ({ imageSrc, title, description, to }) => {
  return (
    <CardWrapper>
      <CardImage src={imageSrc} alt={title} />

      <CardContent>
        <CardTitle>{title}</CardTitle>
        <hr />
        <CardDescription>{description}</CardDescription>
        <hr />
        <ProjectLink to={to} >
          View Project
        </ProjectLink>
      </CardContent>
    </CardWrapper>
  );
};

export default ProjectCard;
