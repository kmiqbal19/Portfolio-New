import styled from "styled-components";
import { motion } from "framer-motion";
export const DraggableSquare1 = styled(motion.div)`
  width: ${(props) => props.theme.squareLenghtSm};
  height: ${(props) => props.theme.squareLenghtSm};
  border: 3px solid white;
  position: absolute;
  /* top: ${(Math.random() * window.innerHeight - 80) / 2 + 100}px;
  left: ${(Math.random() * window.innerWidth) / 2}px; */
  bottom: 25%;
  left: 5%;
  cursor: grab;
  transition: box-shadow 1s ease;
  @media screen and (min-width: 2000px) {
    width: calc(80px + 1vw);
    height: calc(80px + 1vw);
  }
`;
// Box with "MOVE US"
export const DraggableSquare2 = styled(motion.div)`
  width: ${(props) => props.theme.squareLenghtLg};
  height: ${(props) => props.theme.squareLenghtLg};
  border: 8px solid white;
  position: absolute;
  top: 10%;
  left: 50%;
  cursor: grab;
  /* border-radius: 2rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: white;
    text-shadow: 1px 1px 10px cyan;
    font-size: calc(1rem + 0.5vw);
  }
  @media screen and (min-width: 2000px) {
    width: calc(200px + 3vw);
    height: calc(200px + 3vw);
  }
  @media screen and (max-width: 1100px) {
    left: 65%;
  }
  @media screen and (max-width: 950px) {
    width: calc(100px + 5vw);
    height: calc(100px + 5vw);
  }
  @media screen and (max-width: 750px) {
    top: 65%;
    left: 40%;
  }
`;
export const DraggableSquare3 = styled(motion.div)`
  width: ${(props) => props.theme.squareLenghtXsm};
  height: ${(props) => props.theme.squareLenghtXsm};
  border: 5px solid white;
  position: absolute;
  top: 45%;
  right: 10%;
  cursor: grab;
  transition: box-shadow 1s ease;
  @media screen and (min-width: 2000px) {
    width: calc(50px + 1vw);
    height: calc(50px + 1vw);
  }
`;
export const DraggableSquare4 = styled(motion.div)`
  width: ${(props) => props.theme.squareLenghtXl};
  height: ${(props) => props.theme.squareLenghtXl};
  border: 2px solid white;
  position: absolute;
  bottom: 20%;
  right: 25%;
  cursor: grab;
  @media screen and (min-width: 2000px) {
    width: calc(250px + 3vw);
    height: calc(250px + 3vw);
  }
  @media screen and (max-width: 1700px) {
    bottom: 2%;
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 750px) {
    bottom: 70%;
    right: 5%;
  }
`;
// The Main Draggable Circle
export const DraggableCircle = styled(motion.div)`
  width: ${(props) => props.theme.circleDiameter};
  height: ${(props) => props.theme.circleDiameter};
  border: 1px solid rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 15%;
  left: 15%;
  cursor: grab;
  border-radius: 50%;
  z-index: 10;
  @media screen and (min-width: 3000px) {
    width: 800px;
    height: 800px;
    top: 25%;
  }
  @media screen and (min-width: 2000px) {
    width: 600px;
    height: 600px;
    top: 25%;
  }
  @media screen and (max-width: 900px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 750px) {
    width: calc(200px + 20vw);
    height: calc(200px + 20vw);
  }
`;
// Responsible for draggable div position reset
export const ShootingSquare1 = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 100px;
  left: -10%;
  transition: background-color 0.5s ease;
  cursor: pointer;
  background-color: white;

  &:hover {
    background-color: lightblue;
  }
  @media screen and (min-width: 2000px) {
    width: calc(30px + 1vw);
    height: calc(30px + 1vw);
  }
`;
export const ShootingSquare2 = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid white;
  position: absolute;
  bottom: -10rem;
  right: 30%;
  opacity: 0.5;
  @media screen and (min-width: 2000px) {
    border: 2px solid white;
  }
  @media screen and (min-width: 1700px) {
    width: 70px;
    height: 70px;
  }
`;
export const ShootingSquare3 = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid white;
  position: absolute;
  top: 30%;
  right: -5%;
  opacity: 0.5;
  @media screen and (min-width: 2000px) {
    border: 2px solid white;
  }
  @media screen and (min-width: 1700px) {
    width: 50px;
    height: 50px;
  }
`;
export const TitleContainer = styled.div`
  width: 50%;
  height: 30%;
  color: white;
  position: absolute;
  top: 15%;
  left: 15%;
  font-family: Arial, Helvetica, sans-serif;
  @media screen and (min-width: 2000px) {
    top: 20%;
  }
  @media screen and (max-width: 1500px) {
    width: 60%;
  }
  @media screen and (max-width: 1100px) {
    width: 70%;
  }
  @media screen and (max-width: 750px) {
    width: 80%;
    left: 10%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    left: 5%;
  }
  pointer-events: none;
  p.author-name {
    overflow: hidden;
    span {
      display: inline-block;
      font-size: 4rem;
      font-weight: lighter;
      @media screen and (min-width: 2000px) {
        font-size: calc(1rem + 2vw);
      }
      @media screen and (max-width: 750px) {
        font-size: 3rem;
      }
    }
    margin-bottom: 3rem;
  }
  p.designation-hero {
    overflow: hidden;
    span {
      display: inline-block;
      font-size: 12rem;
      @media screen and (min-width: 2000px) {
        font-size: calc(10rem + 1vw);
      }
      @media screen and (max-width: 1200px) {
        font-size: calc(5rem + 4vw);
      }
      @media screen and (max-width: 500px) {
        font-size: calc(4rem + 4vw);
      }
    }
  }
`;
