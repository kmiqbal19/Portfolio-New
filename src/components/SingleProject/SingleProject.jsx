import React from "react";
import styled from "styled-components";
import img from "../../assets/Images/4.webp";
import { FiGithub } from "react-icons/fi";
import { MdOutlinePreview } from "react-icons/md";
import { motion } from "framer-motion";
const Project = styled(motion.div)`
  width: 60vw;
  height: 75%;
  border: 1px solid black;
  margin: 0rem 15vw;
  position: relative;
  display: flex;
  justify-content: flex-end;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    z-index: -1;
  }
`;
const Title = styled.p`
  font-size: calc(5rem + 5vw);
  position: absolute;
  left: -15%;
  bottom: 15%;
  text-transform: uppercase;
`;
const LinkContainer = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
`;
const GitLink = styled.a`
  svg {
    width: 50px;
    height: 50px;

    &:hover {
      fill: blue;
    }
  }
`;
const ProjectLink = styled.a`
  font-size: 1.5rem;

  svg {
    width: 50px;
    height: 50px;

    &:hover {
      fill: white;
    }
  }
`;
const BuiltWith = styled.p`
  width: 60%;
  font-size: calc(1rem + 1vw);
  position: absolute;
  bottom: 5%;
  left: 2%;
`;
function SingleProject() {
  return (
    <Project
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)", scale: 1.08 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt="" />
      <Title>taskeman</Title>
      <LinkContainer>
        <GitLink href="www.google.com">
          <FiGithub />
        </GitLink>
        <ProjectLink href="www.google.com">
          <MdOutlinePreview />
        </ProjectLink>
      </LinkContainer>
      <BuiltWith>
        Built with React, Redux, Framer Motion, Express, MongoDB (MERN Stack)
      </BuiltWith>
    </Project>
  );
}

export default SingleProject;
