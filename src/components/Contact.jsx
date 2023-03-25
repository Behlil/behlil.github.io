import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f0f0f0;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContactItem = styled.li`
  display: flex;
  justify-content: center;
  margin: 0.5rem;
  

  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    }
`;

const ContactIcon = styled.span`
  font-size: 1.5rem;
  color: #333;
  margin-right: 0.5rem;
`;

const ContactText = styled.span`
  font-size: 1rem;
  color: #333;
`;
const Sep = styled.hr`
    width: 6%;
    height: 3px;
    background: #f00;
    border: none;
    margin-bottom: 2rem ;

    @media (max-width: 768px) {
        width: 20%;
    }
`;

const Contact = () => {
    return (
        <ContactSection>
            <ContactTitle>Contact Me</ContactTitle>
            <Sep />
            <ContactList>
                <ContactItem>
                    <ContactIcon>
                        <FaPhone />
                    </ContactIcon>
                    <ContactText>+212 679-077-818</ContactText>
                </ContactItem>
                <ContactItem>
                    <ContactIcon>
                        <FaEnvelope />
                    </ContactIcon>
                    <ContactText>bahlil2001@gmail.com</ContactText>
                </ContactItem>
                <ContactItem>
                    <ContactIcon>
                        <FaMapMarkerAlt />
                    </ContactIcon>
                    <ContactText>Ait Youssef Ou Ali Al-hoceima, Morocco</ContactText>
                </ContactItem>
            </ContactList>
        </ContactSection>
    );
};

export default Contact