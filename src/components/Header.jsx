import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 3em;
  z-index: 1;
  transition: background-color 0.4s ease-in-out;
  background-color: ${({ scrolled }) => (scrolled ? '#fafafa' : 'transparent')};
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none')};

  @media (max-width: 768px) {
    padding: 16px 1em;
  }
`;

const HeaderLogo = styled.div`
  font-size: 32px;
  color: 
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const HeaderNav = styled.nav`
  display: flex;
`;

const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  color: ${({ scrolled }) => (scrolled ? '#fff' : '#000')};
  text-decoration: none;

  
  
  &:hover {
    color: #f00;
  }

  
`;

const HeaderIcon = styled.div`
  font-size: 24px;
  margin-right: 8px;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 70;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <HeaderWrapper scrolled={scrolled}>
      <HeaderLogo>Ouassim Behlil</HeaderLogo>
      <HeaderNav>
        <HeaderLink href="https://www.linkedin.com/in/behlil/" target="_blank" >
          <HeaderIcon>
            <FaLinkedin />
          </HeaderIcon>

        </HeaderLink>
        <HeaderLink href="https://www.instagram.com/ouassim_01" target="_blank">
          <HeaderIcon>
            <FaInstagram />
          </HeaderIcon>

        </HeaderLink>
        <HeaderLink href="https://github.com/behlil" target="_blank">
          <HeaderIcon>
            <FaGithub />
          </HeaderIcon>

        </HeaderLink>
      </HeaderNav>
    </HeaderWrapper >
  );
};

export default Header;
