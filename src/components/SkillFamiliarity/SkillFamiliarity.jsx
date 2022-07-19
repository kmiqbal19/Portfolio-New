import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: black;
  display: flex;
  align-items: flex-start;
  /* border: 1px solid red; */
  padding-top: 5rem;
  position: relative;
  p {
    font-size: calc(1.5rem + 1vw);
    font-family: "Ubuntu", sans-serif;
    color: rgba(255, 255, 255, 0.7);
    width: 60%;
    margin-left: calc(5rem + 3vw);
    line-height: 1.5;
    @media screen and (max-width: 750px) {
      width: 80%;
    }
    @media screen and (max-width: 500px) {
      margin-left: calc(3rem + 3vw);
    }
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1rem;
    top: -5px;
    background-color: black;
  }
`;
function SkillFamiliarity() {
  return (
    <Container>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Familiar with Git, Figma, Sass, Sanity (CMS), GSAP, Framer Motion,
        Cloudinary, Pug, Three.js, Python
      </motion.p>
    </Container>
  );
}

export default SkillFamiliarity;
