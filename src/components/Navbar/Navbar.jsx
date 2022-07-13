import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { AnimatePresence } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
const Nav = styled(motion.nav)`
  width: 100%;
  height: ${(props) => props.theme.navHeight};
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
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
  /* border: 1px solid green; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const List = styled.li`
  margin: 0 2rem;
  list-style: none;
  font-size: ${(props) => props.theme.fontxl};
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-10%);
    color: orange;
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
const Cross = styled.div`
  width: 60px;
  height: 60px;

  position: relative;
  align-self: flex-end;
  cursor: pointer;
  margin: 2rem 2rem 0rem;
  &:hover {
    div.cross-line-1 {
      transform: rotateZ(0deg);
    }
    div.cross-line-2 {
      transform: rotateZ(0deg);
    }
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 5rem;
    position: fixed;
    top: 10rem;
    li {
      overflow: hidden;

      margin: 3rem auto;
      transition: all 0.3s ease;
      cursor: pointer;
      will-change: transform;
      &:hover {
        transform: skewX(15deg);
      }
      span {
        display: inline-block;
        font-size: ${(props) => props.theme.fontxxl};
        color: white;
        &:hover {
          color: yellow;
        }
        &:active {
          color: green;
        }
      }
    }
  }
`;
// FRAMER MOTION
const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};
const childrenVar = {
  initial: {
    y: 40,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
// NAVBAR COMPONENT
function Navbar() {
  const [clicked, setClicked] = useState(false);
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    setClicked(!clicked);
    scroll.scrollTo(elem, {
      // offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  const handleScrollDevice = (id) => {
    let elem = document.querySelector(id);

    scroll.scrollTo(elem, {
      // offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
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
          <List onClick={() => handleScrollDevice("#projects")}>projects</List>
          <List onClick={() => handleScrollDevice("#skills")}>skills</List>
          <List onClick={() => handleScrollDevice("#about")}>about me</List>
        </ListContainer>
        <HamburgerContainer onClick={() => setClicked(true)}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </HamburgerContainer>
      </Nav>
      <AnimatePresence>
        {clicked && (
          <MobileMenu
            initial={{ height: "0%", skewX: -5 }}
            animate={{ height: "100%", skewX: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Cross onClick={() => setClicked(false)}>
              <div className="cross-line cross-line-1"></div>
              <div className="cross-line cross-line-2"></div>
            </Cross>
            <motion.ul variants={variants} initial="initial" animate="animate">
              <li onClick={() => handleScroll("#projects")}>
                <motion.span variants={childrenVar}>projects</motion.span>
              </li>
              <li onClick={() => handleScroll("#skills")}>
                <motion.span variants={childrenVar}>skills</motion.span>
              </li>
              <li onClick={() => handleScroll("#about")}>
                <motion.span variants={childrenVar}>about</motion.span>
              </li>
            </motion.ul>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
