import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  MongoDBContainer,
  ReactContainer,
  NodeContainer,
  ReduxContainer,
  JSContainer,
  HtmlContainer,
  CssContainer,
  SkillsQuote,
  SkillTitleContainer,
} from "../components/SkillsStyles/SkillsStyles";
import {
  SiReact,
  SiMongodb,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { GrNode } from "react-icons/gr";
const SkillsContainer = styled.div`
  width: 100%;
  min-height: 200vh;
  position: relative;
  /* border: 2px solid red; */
  background-color: black;
  padding-top: 10rem;
`;

function Skills() {
  return (
    <SkillsContainer>
      <SkillTitleContainer>
        <div>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Tools
          </motion.span>
        </div>
        <div>
          <motion.span
            initial={{
              x: 70,
              opacity: 0,
              y: 20,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            & Tech
          </motion.span>
        </div>
      </SkillTitleContainer>

      <ReactContainer
        initial={{ scale: 0.7 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <SiReact />
        <p data-scroll data-scroll-speed="4">
          React
        </p>
      </ReactContainer>
      <NodeContainer
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
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
      <JSContainer
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <SiJavascript />
        <p data-scroll data-scroll-speed="-2">
          JavaScript
        </p>
      </JSContainer>
      <HtmlContainer>
        <SiHtml5 />
        <p data-scroll data-scroll-speed="-3">
          HTML
        </p>
      </HtmlContainer>
      <CssContainer>
        <SiCss3 />
        <p
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          CSS
        </p>
      </CssContainer>
      <SkillsQuote>
        <q>
          "Anyone who only understands chemistry, doesn’t even understand that
          correctly."
        </q>
        <br />-<em>Georg Christoph Lichtenberg (German physicist)</em>
      </SkillsQuote>
    </SkillsContainer>
  );
}

export default Skills;