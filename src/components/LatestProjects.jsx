import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  
`;

const ProjectImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.4s ease;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`;

const ProjectTitle = styled.h2`
  color: #fff;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProjectDomain = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
  
`;
const Title = styled.h1`
    font-size: 4rem;
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
    margin-bottom: 50px;
    color: #000;
    display: block;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`

const ProjectsContainer = styled.div`
    padding: 50px ;
    box-sizing: border-box;
`

const LatestProjects = ({ projects }) => {
    return (
        <ProjectsContainer>
            <Title>Latest Projects</Title>
            <ProjectContainer>

                {projects.map((project) => (
                    <div key={project.id} style={{ position: 'relative' }}>
                        <ProjectImage src={project.image} alt={project.title} />
                        <ProjectOverlay>
                            <div>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectDomain>{project.domain}</ProjectDomain>
                            </div>
                        </ProjectOverlay>
                    </div>
                ))}
            </ProjectContainer>
        </ProjectsContainer>
    );
};

export default LatestProjects;
