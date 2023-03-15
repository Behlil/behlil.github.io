import React from 'react';
import styled from 'styled-components';
import recommendations from '../Data/recommendationData';

const Recommendation = ({ recommendation }) => {
  const { name, photo, text } = recommendation;

  return (
    <RecommendationContainer>
      <Left>
        <Image src={photo} alt={name} />
        <Name>{name}</Name>
      </Left>
      <Right>
        <Text>{text}</Text>
      </Right>
    </RecommendationContainer>
  );
};

const Recommendations = () => {
  return (
    <RecommendationsContainer>
      <RecommendationsTitle>What People Say About Me</RecommendationsTitle>
      <RecommendationsList>
        {recommendations.map((recommendation) => (
          <Recommendation key={recommendation.id} recommendation={recommendation} />
        ))}
      </RecommendationsList>
    </RecommendationsContainer>
  );
};


const RecommendationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  background-color: #fafafa;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 50%;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex: 1;
    align-items: center;
    justify-content: center;
    // margin-right: 2rem;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    flex: 2;
  }
`;

const Image = styled.img`
  margin-top: 10px;
  width: 150px;
    height: 150px;
  border-radius: 50%;
  border: 4px solid #fa8072f5;

  @media (min-width: 768px) {
    margin-top: 0;
    // margin-right: 1rem;
  }
`;

const Name = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fa8072f5;
  width: 100%;
    text-align: center;
`;

const Text = styled.p`
  padding: 10px;
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: justify;
  color: #333;
`;
const RecommendationsContainer = styled.div`
display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 50px;
    gap: 1rem;
`;
const RecommendationsTitle = styled.div`
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
`;

const RecommendationsList = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    margin: 2em ;
`;

export default Recommendations;