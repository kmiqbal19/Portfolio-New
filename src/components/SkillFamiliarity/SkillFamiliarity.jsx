import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { skillsFamiliarData } from "./skillsFamiliarData";
const Container = styled.div`
  width: 100%;
  height: 30vh;
  background-color: black;
  display: flex;
  gap: 2;
  flex-direction: row;
  /* align-items: flex-start; */
  border: 1px solid red;
  padding: 5rem 0rem 0rem 5rem;
  position: relative;
  p {
    /* font-size: calc(1.5rem + 1vw);
    font-family: "Ubuntu", sans-serif;
    color: rgba(255, 255, 255, 0.7);
    width: 60%;
    margin-left: calc(5rem + 3vw);
    line-height: 1.5; */
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
const SkillImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: contain;
  margin-right: 2rem;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const SkillImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  justify-content: center;
  align-items:center;
`;
const ImageName = styled.p`
  font-size: 1rem ;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
`;
const FamiliarSkills = () => {
  return skillsFamiliarData.map((skill) => {
    return (
      <SkillImageContainer>
        <SkillImage src={skill.img} alt={skill.alt} />;
        <ImageName>{skill.skillName}</ImageName>
      </SkillImageContainer>
    );
  });
};
function SkillFamiliarity() {
  return (
    <Container>
      <FamiliarSkills />
    </Container>
  );
}

export default SkillFamiliarity;
