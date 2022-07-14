import React from "react";
import styled from "styled-components";
import {
  MongoDBContainer,
  ReactContainer,
  NodeContainer,
  ReduxContainer,
  JSContainer,
  SkillsInText,
} from "../components/SkillsStyles/SkillsStyles";
import { SiReact, SiMongodb, SiRedux, SiJavascript } from "react-icons/si";
import { GrNode } from "react-icons/gr";
const SkillsContainer = styled.div`
  width: 100%;
  min-height: 200vh;
  position: relative;
  /* border: 2px solid red; */
  background-color: black;
`;

function Skills() {
  return (
    <SkillsContainer>
      <ReactContainer
        initial={{ scale: 0.7 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SiReact />
        <p data-scroll data-scroll-speed="4">
          React
        </p>
      </ReactContainer>
      <NodeContainer
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <GrNode />
        <p data-scroll data-scroll-speed="-3">
          Node.js
        </p>
      </NodeContainer>
      <MongoDBContainer>
        <SiMongodb />
        <p data-scroll data-scroll-speed="3" data-scroll-direction="horizontal">
          MongoDB
        </p>
      </MongoDBContainer>
      <ReduxContainer>
        <SiRedux />
        <p
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          Redux
        </p>
      </ReduxContainer>
      <JSContainer>
        <SiJavascript />
        <p data-scroll data-scroll-speed="-2">
          JavaScript
        </p>
      </JSContainer>
      <SkillsInText>
        I also have knowledge of HTML5, CSS3, Sass, GSAP, Framer Motion, Basic
        Pug, Canvas, Python{" "}
      </SkillsInText>
    </SkillsContainer>
  );
}

export default Skills;
