import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import styled from "styled-components";
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
// COMPONENT
function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <CanvasHeroSection />
      <FixGrayLine />
    </HomeContainer>
  );
}

export default Home;
