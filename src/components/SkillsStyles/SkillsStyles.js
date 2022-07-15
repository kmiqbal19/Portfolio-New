import styled from "styled-components";
import { motion } from "framer-motion";
export const ReactContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
  /* border: 1px solid blue; */
  position: absolute;
  left: 35%;
  top: 5%;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  svg {
    width: 60%;
    height: 60%;
    color: #61dafb;
    animation-name: rotation;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  p {
    position: absolute;
    bottom: 10%;
    mix-blend-mode: excursion;
    font-size: 15rem;
  }
`;

export const NodeContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 250px;
  /* border: 1px solid blue; */
  position: absolute;
  right: 20%;
  top: 30%;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  svg {
    width: 50%;
    height: 50%;
    color: #68a063;
  }
  p {
    position: absolute;
    top: -10%;
    mix-blend-mode: excursion;
    font-size: 8rem;
  }
`;
export const MongoDBContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
  /* border: 1px solid blue; */
  position: absolute;
  right: 30%;
  bottom: 5%;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  svg {
    width: 60%;
    height: 70%;
    color: #2f8819;
  }
  p {
    position: absolute;
    top: 20%;
    left: -10%;
    mix-blend-mode: excursion;
    font-size: 8rem;
  }
`;
export const ReduxContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100px;
  height: 100px;
  /* border: 1px solid blue; */
  position: absolute;
  right: 10%;
  bottom: 35%;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  svg {
    width: 80%;
    height: 80%;
    color: violet;
  }
  p {
    position: absolute;
    bottom: 5%;
    right: -10%;
    mix-blend-mode: excursion;
    font-size: 7rem;
  }
`;
export const JSContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 350px;
  /* border: 1px solid blue; */
  position: absolute;
  left: 10%;
  top: 28%;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  svg {
    width: 80%;
    height: 80%;
    color: yellow;
  }
  p {
    position: absolute;
    bottom: 0%;
    mix-blend-mode: excursion;
    font-size: 10rem;
  }
`;
export const HtmlContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 200px;
  /* border: 1px solid blue; */
  position: absolute;
  left: 10%;
  bottom: 25%;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  svg {
    width: 70%;
    height: 80%;
    color: #e56717;
  }
  p {
    position: absolute;
    bottom: -10%;
    mix-blend-mode: excursion;
    font-size: 8rem;
  }
`;
export const CssContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 150px;
  height: 150px;
  /* border: 1px solid blue; */
  position: absolute;
  left: 25%;
  bottom: 5%;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  svg {
    width: 60%;
    height: 70%;
    color: #0080ff;
  }
  p {
    position: absolute;
    top: -20%;
    mix-blend-mode: excursion;
    font-size: 7rem;
  }
`;
export const SkillTitleContainer = styled.div`
  width: 400px;
  /* border: 1px solid red; */
  color: white;
  margin-left: 5rem;
  color: rgba(255, 255, 255, 0.9);
  div {
    overflow: hidden;
  }
  span:nth-child(1) {
    display: block;
    font-size: 5rem;
  }
  span:nth-child(2) {
    font-size: 5rem;
    margin-left: 10rem;
  }
`;
export const SkillsQuote = styled(motion.p)`
  position: absolute;
  font-size: 2rem;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.9);
  width: 28%;
  line-height: 1.5;
  top: 50%;
  left: 40%;
`;
