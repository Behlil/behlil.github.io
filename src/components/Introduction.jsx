import React from 'react';
import styled from 'styled-components';

// Create a styled component for the introduction section
const Introduction = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #CBE4DE;
  padding: 2rem;
  height: 90vh;
  margin: 0 ;

  @media (max-width: 768px) {
    height: auto;
  }
`;

// Create a styled component for the heading
const Heading = styled.h1`
  font-size: 4rem;
  color: #272343;
  margin-top: 4rem;

  @media (max-width: 768px) {
    // margin-top: 4rem;
    font-size: 2rem;
  }
`;

// Create a styled component for the paragraph
const Paragraph = styled.p`
  font-size: 1.5rem;
  color: #666666;
  text-align: left;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;


const Intro = () => {
  return (
    <Introduction>
      <Heading>About me</Heading>
      <Paragraph>
        As a curious mind with a passion for problem-solving, I stumbled upon the world
        of data analytics while delving into the intricacies of mathematics and probability.
        What started as a mere curiosity quickly turned into an all-consuming passion for telling
        compelling stories through data visualization and making complex concepts appear effortless.
        My journey as a data analyst has taught me that the true art of data lies not just in numbers,
        but in the ability to communicate insights and drive results. And so, armed with my love for
        numbers, my eye for design, and my passion for creating impact,I am eager to take on the
        world of data analytics and make my mark in this exciting field.
      </Paragraph>
    </Introduction>
  );
};

export default Intro;
