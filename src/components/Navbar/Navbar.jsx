import React, { useState } from "react";
import {
  Nav,
  LogoContainer,
  ListContainer,
  List,
  HamburgerContainer,
  MobileMenu,
  Cross,
} from "./NavbarStyles.js";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { AnimatePresence } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import logo from "../../assets/logo-img.png";
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
  // For Mobile
  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    setClicked(!clicked);
    scroll.scrollTo(elem, {
      // offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  // For Desktop
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
        transition={{ delay: 4.5, ease: "backOut", duration: 0.5 }}
      >
        <LogoContainer onClick={() => window.location.reload()}>
          <img src={logo} alt="logo" />
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
            initial={{ height: "0%", opacity: 0 }}
            animate={{ height: "500px", opacity: 1 }}
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
