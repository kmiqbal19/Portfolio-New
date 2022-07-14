import React from "react";
import styled from "styled-components";
import { SiReact } from "react-icons/si";
const SkillsContainer = styled.div`
  width: 100%;
  height: 200vh;
  position: relative;
  /* border: 2px solid red; */
  background-color: black;
`;
const ReactContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
  /* border: 1px solid blue; */
  position: absolute;
  left: 20%;
  top: 20%;
  color: rgba(255, 255, 255, 0.3);
  font-family: "Roboto", sans-serif;
  svg {
    width: 60%;
    height: 60%;
    color: #61dafb;
    animation-name: rotation;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  p {
    position: absolute;
    bottom: 10%;
    mix-blend-mode: excursion;
    font-size: 15rem;
  }
`;
function Skills() {
  return (
    <SkillsContainer>
      <ReactContainer>
        <SiReact />
        <p data-scroll data-scroll-speed="4">
          React
        </p>
      </ReactContainer>
    </SkillsContainer>
  );
}

export default Skills;
