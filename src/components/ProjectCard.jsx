import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 500px;
  height: 400px;
  overflow: hidden;
  margin: 10px;
  transition: transform 0.6s ease-in-out;

  &:hover {
    border: 1px solid #eee;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 350px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  transition: transform 1s ease-in-out;
  ${CardWrapper}:hover & {
    height: 100%;
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #F6F1F1;
  opacity: 0.90;
  color: #000;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
  transition: transform 1s ease-in-out;
  box-sizing: border-box;
  ${CardWrapper}:hover & {
    transform: translateY(0);
    width: 100%;
  }
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin: 0;
  margin-bottom: 8px;
  color: #146C94;
   ${CardWrapper}:hover & {
    display: none;
  }

  
`;

const CardDescription = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  width: 90%;
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 14px;

  
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 5px;

  ${CardWrapper}:hover & {
    display: none;
  }
`;
const Tag = styled.div`
  background-color: #eee;
  width: fit-content;
  padding: 5px;
  font-size: 11px;
  border-radius: 5px;
`;

const Line = styled.hr`
  
  width: 20%;
  border: 1px solid #000;
  margin: 10px 0;
`;
const ProjectCard = ({ imageSrc, title, description, to, tags }) => {
  return (
    <CardWrapper>
      <CardImage src={imageSrc} alt={title} />

      <CardContent>
        <CardDescription>{description}</CardDescription>
        <Line />
        <ProjectLink to={to} >
          View Project
        </ProjectLink>
      </CardContent>
      <CardTitle>{title}</CardTitle>
      <Tags>
        {tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
    </CardWrapper>
  );
};

export default ProjectCard;
