
// Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Define the styled components for the navbar
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-left: 1rem;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #ccc;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  // Use media queries to make the hamburger visible on smaller screens
  @media (max-width: 768px) {
    display: block;
  }
`;

const Bar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;

  // Use transitions to animate the bars
  transition: transform 0.3s ease-in-out;

  // Use props to change the bars based on the menu state
  &:nth-child(1) {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    transform-origin: top left;
    margin-top: ${({ open }) => (open ? '8px' : '5px')};
    margin-left: ${({ open }) => (open ? '3px' : '0')};
    width: ${({ open }) => (open ? '21px' : '25px')};
    height: ${({ open }) => (open ? '4px' : '3px')};
    background-color: ${({ open }) => (open ? '#ccc' : '#fff')};
  }

  &:nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
    transform-origin: center center;
    margin-top: ${({ open }) => (open ? '-8px' : '0')};
    margin-left: ${({ open }) => (open ? '-25px' : '0')};
    width: ${({ open }) => (open ? '0' : '25px')};
    height: ${({ open }) => (open ? '0' : '3px')};
    background-color: ${({ open }) => (open ? '#ccc' : '#fff')};
  }

  &:nth-child(3) {
    transform-origin: bottom right;
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    margin-top: ${({ open }) => (open ? '-8px' : '-5px')};
    margin-right: ${({ open }) => (open ? '-3px' : '0')};
    width: ${({ open }) => (open ? '21px' : '25px')};
    height: ${({ open }) => (open ? '4px' : '3px')};
    background-color: ${({ open }) => (open ? '#ccc' : '#fff')};
  }
`;

// Define the state and logic for toggling the menu
const NavbarC = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

// Render the navbar component
return (
<Nav>
<Logo to="/">Navbar</Logo>
<Menu open={open}>
<MenuItem>
<MenuLink to="/about">About</MenuLink>
</MenuItem>
<MenuItem>
<MenuLink to="/contact">Contact</MenuLink>
</MenuItem>
</Menu>
<Hamburger onClick={handleToggle}>
<Bar open={open} />
<Bar open={open} />
<Bar open={open} />
</Hamburger>
</Nav>
);
};

export default NavbarC;

