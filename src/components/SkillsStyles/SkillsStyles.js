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
  left: 20%;
  top: 20%;
  color: rgba(255, 255, 255, 0.3);
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
  color: rgba(255, 255, 255, 0.3);
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
  color: rgba(255, 255, 255, 0.3);
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
  color: rgba(255, 255, 255, 0.3);
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
  bottom: 25%;
  color: rgba(255, 255, 255, 0.3);
  font-family: "Roboto", sans-serif;
  svg {
    width: 80%;
    height: 80%;
    color: yellow;
  }
  p {
    position: absolute;
    bottom: 10%;
    mix-blend-mode: excursion;
    font-size: 10rem;
  }
`;
export const SkillsInText = styled(motion.p)`
  font-size: 3rem;
  color: white;
  width: 70%;
`;
