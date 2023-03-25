import React from 'react';
import styled from 'styled-components';

// Create a styled component for the introduction section
const Introduction = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 2rem;
  height: 90vh;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

// Create a styled component for the heading
const Heading = styled.h1`
  font-size: 4rem;
  color: #272343;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Create a styled component for the paragraph
const Paragraph = styled.p`
  font-size: 1.5rem;
  color: #666666;
  text-align: center;
  max-width: 800px;
`;


const Intro = () => {
  return (
    <Introduction>
      <Heading>Hello, I'm Ouassim Behlil</Heading>
      <Paragraph>
        I have a passion for solving complex problems and helping organizations
        make better decisions. My love for mathematics and probabilities has led
        me to this dynamic field, where I can apply my analytical skills and
        expertise to make sense of complex data sets.
      </Paragraph>
    </Introduction>
  );
};

export default Intro;
