import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import styled from "styled-components";
const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  border: 2px solid black;
`;
function Home() {
  return (
    <HomeContainer>
      <Navbar />
    </HomeContainer>
  );
}

export default Home;
