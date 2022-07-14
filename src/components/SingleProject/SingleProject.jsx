import React from "react";
import styled from "styled-components";
import img from "../../assets/Images/4.webp";
import { FiGithub } from "react-icons/fi";
import { MdOutlinePreview } from "react-icons/md";
import { motion } from "framer-motion";
const Project = styled(motion.div)`
  width: 70vw;
  height: 75%;
  border: 1px solid black;
  margin: 0rem 15vw;
  position: relative;
  display: flex;
  justify-content: flex-end;
  color: white;
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
const TitleOverlay = styled.div`
  width: 90%;
  height: 50%;
  /* border: 1px solid red; */
  background-color: rgba(30, 40, 100, 0.3);
  position: absolute;
  left: -20%;
  bottom: 0%;
`;
const Title = styled.p`
  font-size: calc(5rem + 5vw);
  position: absolute;
  left: -15%;
  bottom: 15%;
  text-transform: uppercase;
`;
const BuiltWith = styled.p`
  width: 60%;
  font-size: calc(1rem + 1vw);
  position: absolute;
  bottom: 5%;
  left: 2%;
`;
const LinkContainer = styled.div`
  width: 150px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 2px solid red; */
  background-color: rgba(0, 0, 0, 0.3);
`;
const GitLink = styled.a`
  svg {
    width: 50px;
    height: 50px;
    transition: all 0.3s ease;
    &:hover {
      fill: #010280;
      color: black;
    }
  }
`;
const ProjectLink = styled.a`
  font-size: 1.5rem;

  svg {
    width: 50px;
    height: 50px;
    transition: all 0.3s ease;
    &:hover {
      fill: black;
      width: 55px;
      height: 55px;
    }
  }
`;

function SingleProject() {
  return (
    <Project
      initial={{ filter: "grayscale(100%)", height: "50%" }}
      whileInView={{ filter: "grayscale(0%)", height: "75%" }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt="" />
      <LinkContainer>
        <GitLink href="www.google.com">
          <FiGithub />
        </GitLink>
        <ProjectLink href="www.google.com">
          <MdOutlinePreview />
        </ProjectLink>
      </LinkContainer>

      <TitleOverlay />
      <Title>taskeman</Title>
      <BuiltWith>
        Built with React, Redux, Framer Motion, Express, MongoDB (MERN Stack)
      </BuiltWith>
    </Project>
  );
}

export default SingleProject;
