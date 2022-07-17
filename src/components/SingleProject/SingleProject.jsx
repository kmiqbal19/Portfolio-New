import React from "react";
import img from "../../assets/Images/4.webp";
import { FiGithub } from "react-icons/fi";
import { MdOutlinePreview } from "react-icons/md";
import {
  Project,
  LinkContainer,
  GitLink,
  ProjectLink,
  Title,
  TitleOverlay,
  BuiltWith,
} from "./SingleProjectStyles.js";

function SingleProject() {
  return (
    <Project
      initial={{ filter: "grayscale(100%)", height: "50%" }}
      whileInView={{ filter: "grayscale(0%)", height: "75%" }}
      transition={{ duration: 0.8 }}
      viewport={{
        once: false,
        amount: window.innerWidth < 1000 ? "some" : "all",
      }}
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
