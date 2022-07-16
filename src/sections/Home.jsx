import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import styled from "styled-components";
import { motion } from "framer-motion";
import CanvasHeroSection from "../components/CanvasHeroSection/CanvasHeroSection.jsx";
const HomeContainer = styled.div`
  width: (100vw);
  min-height: 180vh;
  background-color: black;
  position: relative;
`;
const FixGrayLine = styled.div`
  width: 100vw;
  height: 1rem;
  background-color: black;
  position: absolute;
  bottom: -0.5rem;
`;
const SelectedProjectsTitle = styled.div`
  width: 50vw;
  /* border: 1px solid red; */
  position: absolute;
  bottom: 2%;
  left: 5%;
  @media screen and (max-width: 1500px) {
    bottom: 5%;
  }
  /* @media screen and (max-width: 950px) {
    bottom: 15%;
  } */
  @media screen and (max-width: 750px) {
    width: 90vw;
  }
  div {
    overflow: hidden;
  }

  p {
    font-size: calc(5rem + 3vw);
    font-family: "Ubuntu", sans-serif;
    color: white;
    /* @media screen and (max-width: 750px) {
      font-size: calc(3rem + 3vw);
    } */
  }
`;
const AnimatedLine = styled(motion.span)`
  height: 2px;
  background-color: rgba(255, 255, 255, 0.6);
  position: absolute;
  right: 2%;
  bottom: 10%;
`;
// COMPONENT
function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <CanvasHeroSection />
      <SelectedProjectsTitle>
        <div>
          <motion.p
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            Selected
          </motion.p>
        </div>
        <br />
        <div>
          <motion.p
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            style={{ marginLeft: "10rem" }}
          >
            Projects
          </motion.p>
        </div>
      </SelectedProjectsTitle>
      <AnimatedLine
        initial={{ width: "0%" }}
        whileInView={{ width: `${window.innerWidth < 950 ? 30 : 50}%` }}
        transition={{ duration: 2, ease: "backInOut" }}
      />
      <FixGrayLine />
    </HomeContainer>
  );
}

export default Home;
