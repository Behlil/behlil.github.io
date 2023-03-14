import React from 'react';
import styled from 'styled-components';
import dataAnalytics from '../Images/data-analytics3.jpg';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${dataAnalytics});
    background-size: cover;
    background-position: center;
    opacity: 0.5;
  }
`;

const Content = styled.div`
  text-align: center;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  background: -webkit-linear-gradient(90deg, #000 0%, #003865 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 2rem;
  color: #000;
  margin: 0;
  font-family: 'Lato', sans-serif;
  color: #000;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.85);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.4rem;
  padding: 1rem 2rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #000;
    box-shadow: 0 0 10px #000;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
  }
`;

export default function Introduction() {
  return (
    <Container>
      <Content>
        <Title>Hi, I'm Ouassim Behlil</Title>
        <Subtitle>A Marketing Analyst</Subtitle>
        <Button>View my work</Button>
      </Content>
    </Container>
  );
}
