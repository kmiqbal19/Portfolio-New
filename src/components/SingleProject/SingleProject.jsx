import React from "react";
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

function SingleProject({ title, builtWith, git, demo, imgLink }) {
  return (
    <Project
      initial={{ filter: "grayscale(100%)", height: "50%" }}
      whileInView={{ filter: "grayscale(0%)", height: "90%" }}
      transition={{ duration: 0.8 }}
      viewport={{
        once: false,
        amount: window.innerWidth < 1000 ? "some" : "all",
      }}
    >
      <img src={imgLink} alt="project-img" />
      <LinkContainer>
        <GitLink href={git}>
          <FiGithub />
        </GitLink>
        <ProjectLink href={demo}>
          <MdOutlinePreview />
        </ProjectLink>
      </LinkContainer>

      <TitleOverlay />
      <Title>{title}</Title>
      <BuiltWith>{builtWith}</BuiltWith>
    </Project>
  );
}

export default SingleProject;
