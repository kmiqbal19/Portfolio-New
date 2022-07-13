import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import gsap from "gsap";
const PreloaderWrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  div {
    width: 33%;
    height: 100%;
    background-color: red;
    &:last-child {
      width: 34%;
    }
  }
`;
const Div = styled(motion.div)`
  width: 33%;
  height: 100%;
  background-color: red;
`;
const wrapperVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0.5,
    transition: {
      ease: "ease",
      delayChildren: 0.5,
      duration: 0.7,
      staggerChildren: 0.5,
    },
  },
};
const childVariants = {
  initial: {
    height: "100%",
  },
  animate: {
    height: "0%",
  },
};
function Preloader() {
  useEffect(() => {
    let targets = gsap.utils.toArray(".preloader-sections");
    console.log(targets);
    gsap.to(targets, {
      height: "0%",
      duration: 1,
      stagger: 0.3,
      delay: 3,
      ease: "Power3.easeOut",
    });
  }, []);
  return (
    <PreloaderWrapper>
      <div className="preloader-sections"></div>
      <div className="preloader-sections"></div>
      <div className="preloader-sections"></div>
    </PreloaderWrapper>
  );
}

export default Preloader;
