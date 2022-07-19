import styled from "styled-components";
import { motion } from "framer-motion";
export const Project = styled(motion.div)`
  width: 70vw;
  height: 75%;
  border: 1px solid black;
  margin: 0rem 15vw;
  position: relative;
  display: flex;
  justify-content: flex-end;
  color: white;
  @media screen and (max-width: 950px) {
    width: 80vw;
    height: 80%;
    margin: 0rem 25vw;
  }
  @media screen and (max-width: 650px) {
    width: 120vw;
    height: 75%;
    margin: 0rem 35vw;
    img {
      object-fit: contain;
    }
    &:nth-child(1) {
      margin-left: 0vw;
    }
    &:nth-child(4) {
      margin-right: 0vw;
    }
  }

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
export const TitleOverlay = styled.div`
  width: 90%;
  height: 50%;
  /* border: 1px solid red; */
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: -20%;
  bottom: 0%;
  @media screen and (max-width: 700px) {
    left: 0%;
    width: 100%;
  }
`;
export const Title = styled.p`
  font-size: calc(5rem + 5vw);
  position: absolute;
  left: -15%;
  bottom: 15%;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  @media screen and (max-width: 700px) {
    left: 5%;
  }
`;
export const BuiltWith = styled.p`
  width: 60%;
  font-size: calc(1rem + 1vw);
  position: absolute;
  bottom: 5%;
  left: 2%;
  font-family: "Raleway", sans-serif;
  @media screen and (max-width: 700px) {
    left: 6%;
  }
`;
export const LinkContainer = styled.div`
  width: 150px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 2px solid red; */
  background-color: rgba(0, 0, 0, 0.3);
`;
export const GitLink = styled.a`
  svg {
    width: 50px;
    height: 50px;
    transition: all 0.3s ease;
    color: rgba(255, 255, 255, 0.5);
    @media screen and (max-width: 650px) {
      width: 40px;
      height: 40px;
    }
    &:hover {
      fill: #010280;
      color: black;
    }
  }
`;
export const ProjectLink = styled.a`
  font-size: 1.5rem;

  svg {
    width: 50px;
    height: 50px;
    transition: all 0.3s ease;
    color: rgba(255, 255, 255, 0.5);
    @media screen and (max-width: 650px) {
      width: 40px;
      height: 40px;
    }
    &:hover {
      fill: white;
      width: 55px;
      height: 55px;
      @media screen and (max-width: 650px) {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
