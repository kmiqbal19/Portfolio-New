import React from "react";
import styled from "styled-components";
import { skillsFamiliarData } from "./skillsFamiliarData";
const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: black;
  display: flex;
  gap: 2;
  flex-direction: row;
 padding-left: 5rem;
 
  position: relative;
  @media screen and (max-width: 1440px) {
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
     
    }
  &::before {
    content: "";
    position: absolute;
    width: calc(100% + 5rem);
    height: 1rem;
    top: -5px;
    left: 0;
    background-color: black;
  }
`;
const SkillImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
`;
const SkillImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: contain;
  margin-right: 2.5rem;
  transition: all 0.5s ease;
  @media screen and (max-width: 640px) {
    width: 70px;
  height: 70px;
     
    }
  &:hover {
    transform: scale(1.1);
  }
`;
const ImageName = styled.span`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.7);
  visibility: ${(props) => (props.$hover ? "visible" : "hidden")};
`;
const SingleSkill = ({ skill }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <SkillImageContainer>
      <SkillImage
        src={skill.img}
        alt={skill.alt}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <ImageName $hover={hover}>{skill.skillName}</ImageName>
    </SkillImageContainer>
  );
};
const FamiliarSkills = () => {
  return skillsFamiliarData.map((skill) => {
    return <SingleSkill skill={skill} />;
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
