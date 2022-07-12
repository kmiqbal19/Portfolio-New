import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./Navbar.scss";
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
const HamburgerContainer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 1rem;
  margin-right: 2rem;
  cursor: pointer;
  /* position: relative; */
  @media screen and (min-width: 901px) {
    display: none;
  }
  &:hover {
    div.line-1 {
      transform: translateX(-50%);
      width: 50%;
    }
    div.line-2 {
      width: 80%;
    }
    div.line-3 {
      width: 50%;
      transform: translateX(50%);
    }
  }
`;
const MobileMenu = styled(motion.ul)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: blue;
  z-index: 3;
  display: flex;
  flex-direction: column;
`;
const Cross = styled.div`
  width: 60px;
  height: 60px;

  position: relative;
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    div.cross-line-1 {
      transform: rotateZ(0deg);
    }
    div.cross-line-2 {
      transform: rotateZ(0deg);
    }
  }
`;
// NAVBAR COMPONENT
function Navbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
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
        <HamburgerContainer onClick={() => setClicked(true)}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </HamburgerContainer>
      </Nav>
      {clicked && (
        <MobileMenu>
          <Cross onClick={() => setClicked(false)}>
            <div className="cross-line cross-line-1"></div>
            <div className="cross-line cross-line-2"></div>
          </Cross>
        </MobileMenu>
      )}
    </>
  );
}

export default Navbar;
