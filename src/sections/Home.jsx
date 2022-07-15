import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import styled from "styled-components";
import { motion } from "framer-motion";
import CanvasHeroSection from "../components/CanvasHeroSection/CanvasHeroSection.jsx";
const HomeContainer = styled.div`
  width: (100vw);
  min-height: calc(100vh + 400px);
  /* border: 1px solid red; */
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
  width: 400px;
  /* border: 1px solid red; */
  position: absolute;
  bottom: 2%;
  left: 5%;
  div {
    overflow: hidden;
  }

  p {
    font-size: 8rem;
    color: white;
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
            initial={{ y: 70 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Selected
          </motion.p>
        </div>
        <br />
        <div>
          <motion.p
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ marginLeft: "10rem" }}
          >
            Projects
          </motion.p>
        </div>
      </SelectedProjectsTitle>
      <AnimatedLine
        initial={{ width: "0%" }}
        whileInView={{ width: "60%" }}
        transition={{ duration: 2, ease: "backInOut" }}
      />
      <FixGrayLine />
    </HomeContainer>
  );
}

export default Home;
