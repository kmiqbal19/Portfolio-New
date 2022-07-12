import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Nav = styled(motion.nav)`
  width: 100%;
  height: ${(props) => props.theme.navHeight};
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoContainer = styled.div`
  width: 200px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const ListContainer = styled.ul`
  flex: 1;
  border: 1px solid green;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const List = styled.a`
  margin: 0 2rem;
  list-style: none;
  font-size: ${(props) => props.theme.fontxl};
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-10%);
  }
  &:last-child {
    margin-right: calc(4rem + 2vw);
  }
`;
function Navbar() {
  return (
    <Nav
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ delay: 0.5, ease: "backOut", duration: 1 }}
    >
      <LogoContainer>
        <img src="https://i.ibb.co/ZHFdJhW/city.png" alt="logo" />
      </LogoContainer>
      <ListContainer>
        <List href="#projects">projects</List>
        <List href="#skills">skills</List>
        <List href="#about">about me</List>
      </ListContainer>
    </Nav>
  );
}

export default Navbar;
