import styled from "styled-components";
import { motion } from "framer-motion";
export const ReactContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: calc(20rem + 5vw);
  height: calc(20rem + 5vw);
  position: absolute;
  right: 30%;
  top: 10%;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 850px) {
    width: calc(10rem + 6vw);
    height: calc(10rem + 6vw);
  }
  @media screen and (max-width: 480px) {
    right: 20%;
  }
  svg {
    width: 70%;
    height: 70%;
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
    font-size: calc(10rem + 3vw);
    @media screen and (max-width: 850px) {
      font-size: calc(7rem + 3vw);
    }
  }
`;

export const NodeContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: calc(15rem + 5vw);
  height: calc(15rem + 5vw);
  position: absolute;
  right: 10%;
  top: 25%;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 850px) {
    width: calc(8rem + 6vw);
    height: calc(8rem + 6vw);
  }
  @media screen and (max-width: 480px) {
    top: 38%;
    right: 15%;
  }
  svg {
    width: 80%;
    height: 80%;
    color: #68a063;
  }
  p {
    position: absolute;
    top: -10%;
    mix-blend-mode: excursion;
    font-size: calc(4rem + 3vw);
  }
`;
export const MongoDBContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: calc(25rem + 5vw);
  height: calc(25rem + 5vw);
  position: absolute;
  left: 20%;
  bottom: 30%;

  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 850px) {
    width: calc(15rem + 5vw);
    height: calc(15rem + 5vw);
    right: 20%;
  }
  @media screen and (max-width: 480px) {
    right: 10%;
  }
  svg {
    width: 80%;
    height: 100%;
    color: #2f8819;
  }
  p {
    position: absolute;
    top: 20%;
    left: -10%;
    mix-blend-mode: excursion;
    font-size: calc(8rem + 2vw);
    @media screen and (max-width: 850px) {
      font-size: calc(4rem + 2vw);
    }
  }
`;
export const ReduxContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: calc(8rem + 2vw);
  height: calc(8rem + 2vw);
  position: absolute;
  right: 15%;
  bottom: 50%;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 850px) {
    width: calc(7rem + 3vw);
    height: calc(7rem + 3vw);
  }
  @media screen and (max-width: 480px) {
    right: 20%;
    bottom: 38%;
  }
  svg {
    width: 100%;
    height: 100%;
    color: violet;
  }
  p {
    position: absolute;
    bottom: 5%;
    right: -10%;
    mix-blend-mode: excursion;
    font-size: calc(7rem + 2vw);
    @media screen and (max-width: 850px) {
      font-size: calc(5rem + 2vw);
    }
  }
`;
export const JSContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: calc(28rem + 5vw);
  height: calc(28rem + 5vw);
  position: absolute;
  left: 10%;
  top: 20%;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 850px) {
    width: calc(15rem + 6vw);
    height: calc(15rem + 6vw);
  }
  @media screen and (max-width: 480px) {
    top: 18%;
    left: 13%;
  }
  svg {
    width: 80%;
    height: 80%;
    color: yellow;
  }
  p {
    position: absolute;
    bottom: 0%;
    mix-blend-mode: excursion;
    font-size: calc(8rem + 2vw);
    @media screen and (max-width: 850px) {
      font-size: calc(5rem + 2vw);
    }
  }
`;
export const HtmlContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: calc(10rem + 5vw);
  height: calc(10rem + 5vw);

  position: absolute;
  right: 15%;
  bottom: 5%;
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
    font-size: calc(7rem + 3vw);
    @media screen and (max-width: 480px) {
      font-size: calc(5rem + 3vw);
    }
  }
`;
export const PythonContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: calc(10rem + 5vw);
  height: calc(10rem + 5vw);

  position: absolute;
  right: 45%;
  top: 35%;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 480px) {
    left: 15%;
  top: 30%;
    }
  svg {
    width: 90%;
    height: 90%;

    fill: #306998;
    @media screen and (max-width: 480px) {
      width: 60%;
      height: 60%;
    }

  }
  p {
    position: absolute;
    bottom: -10%;
    mix-blend-mode: excursion;
    font-size: calc(7rem + 3vw);
    @media screen and (max-width: 480px) {
      font-size: calc(4rem + 3vw);
    }
  }
`;
export const SqlContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: calc(10rem + 5vw);
  height: calc(10rem + 5vw);

  position: absolute;
  right: 20%;
  bottom: 30%;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 480px) {
    right: 20%;
  bottom: 25%;
    }
  svg {
    width: 100%;
    height: 100%;

    fill: #306998;

  }
  p {
    position: absolute;
    bottom: -10%;
    mix-blend-mode: excursion;
    font-size: calc(7rem + 2vw);
    @media screen and (max-width: 480px) {
      font-size: calc(5rem + 3vw);
    }
  }
`;
export const GreensockContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: calc(10rem + 5vw);
  height: calc(10rem + 5vw);

  position: absolute;
  left: 45%;
  bottom: 15%;

  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 480px) {
    left: 25%;
  bottom: 12%;
    }
  svg {
    width: 90%;
    height: 90%;
    fill: #90ee90;
  }
  p {
    position: absolute;
    bottom: -10%;
    mix-blend-mode: excursion;
    font-size: calc(7rem + 3vw);
    @media screen and (max-width: 480px) {
      font-size: calc(5rem + 3vw);
    }
  }
`;
export const FastAPIContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: calc(10rem + 5vw);
  height: calc(10rem + 5vw);

  position: absolute;

  left: 15%;
  top: 45%;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  svg {
    width: 70%;
    height: 80%;

    fill: #25a18e;
    animation-name: rotationapi;
    animation-duration: 15s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes rotationapi {
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
    bottom: -10%;
    mix-blend-mode: excursion;
    font-size: calc(7rem + 3vw);
    @media screen and (max-width: 480px) {
      font-size: calc(4rem + 3vw);
    }
  }
`;
export const CssContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: calc(15rem + 5vw);
  height: calc(15rem + 5vw);
  position: absolute;
  left: 10%;
  bottom: 3%;
  color: rgba(255, 255, 255, 0.2);
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 850px) {
    width: calc(9rem + 5vw);
    height: calc(9rem + 5vw);
  }
  @media screen and (max-width: 480px) {
    left: 10%;
    bottom: 20%;
  }
  svg {
    width: 70%;
    height: 70%;
    color: #0080ff;
  }
  p {
    position: absolute;
    top: 10%;
    mix-blend-mode: excursion;
    font-size: calc(10rem + 2vw);
    @media screen and (max-width: 850px) {
      font-size: calc(6rem + 2vw);
    }
  }
`;
export const SkillTitleContainer = styled.div`
  width: calc(400px + 5vw);
  color: white;
  margin-left: calc(5rem + 1vw);
  color: rgba(255, 255, 255, 0.9);
  font-family: "Ubuntu", sans-serif;
  font-size: calc(4rem + 2vw);
  @media screen and (min-width: 2000px) {
    margin-left: calc(10rem + 3vw);
    margin-top: calc(4rem + 3vw);
  }
  @media screen and (max-width: 850px) {
    font-size: calc(4rem + 3vw);
  }
  @media screen and (max-width: 480px) {
    font-size: calc(4rem + 2vw);
    margin-left: 2.5rem;
  }
  div {
    overflow: hidden;
  }
  span:nth-child(1) {
    display: block;
  }
  span:nth-child(2) {
    margin-left: 10rem;
  }
`;
export const SkillsQuote = styled(motion.p)`
  position: absolute;
  font-size: calc(1rem + 0.7vw);
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.5);
  width: calc(350px + 6vw);
  line-height: 1.5;
  top: 48%;
  left: 50%;
  transform: translateX(-50%);
  text-align: left;
  @media screen and (max-width: 480px) {
    width: 300px;
    top: 52%;
    left: 50%;
  }
`;
