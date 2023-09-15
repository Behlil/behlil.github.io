import React from 'react';
import styled from 'styled-components';

// Define your styled components
const IntroductionContainer = styled.div`
  width: 100%;
  padding: 0 2em;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fefefe;
`;

const LeftSection = styled.div`
  width: 60%;
  padding: 20px;
`;

const RightSection = styled.div`
  width: 50%;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;

  transition: color 0.3s ease-in-out;

  &:hover {
    // color: #ff5722; /* Change to your desired hover color */
  }
`;
const SubTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;

`;

const Description = styled.p`
  transition: color 0.3s ease-in-out;

  
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #0e0e0e; /* Change to your desired button color */
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #d84315; /* Change to your desired hover color */
  }
`;

const Photo = styled.img`
  width: 100%;
  max-width: 300px;
  animation: rotate 6s linear infinite;
`;

const Introduction = () => {
  return (
    <IntroductionContainer>
      <LeftSection>
        <Title>Behlil Ouassim</Title>
        <SubTitle>Data Analyst</SubTitle>
        <Description>As a curious mind with a passion for problem-solving, I stumbled upon the world of data analytics while delving into the intricacies of mathematics and probability. What started as a mere curiosity quickly turned into an all-consuming passion for telling compelling stories through data visualization and making complex concepts appear effortless. My journey as a data analyst has taught me that the true art of data lies not just in numbers, but in the ability to communicate insights and drive results. And so, armed with my love for numbers, my eye for design, and my passion for creating impact,I am eager to take on the world of data analytics and make my mark in this exciting field.</Description>
        <DownloadButton href="/path-to-your-CV.pdf" target="_blank" rel="noopener noreferrer">
          Download CV
        </DownloadButton>
      </LeftSection>
      <RightSection>
        <Photo src="https://th.bing.com/th/id/OIP.ZpVunDDzxPZxFy630A-3RwHaLH?w=207&h=305&c=7&r=0&o=5&pid=1.7" alt="Your Photo" />
      </RightSection>
    </IntroductionContainer>
  );
};

export default Introduction;
