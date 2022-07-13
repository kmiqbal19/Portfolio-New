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
`;

export const DraggableSquare2 = styled(motion.div)`
  width: ${(props) => props.theme.squareLenghtLg};
  height: ${(props) => props.theme.squareLenghtLg};
  border: 1px solid white;
  position: absolute;
  /* top: ${(Math.random() * window.innerHeight - 80) / 2 + 100}px;
  left: ${(Math.random() * window.innerWidth) / 2}px; */
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
    font-size: 1.5rem;
  }
`;
export const DraggableSquare3 = styled(motion.div)`
  width: ${(props) => props.theme.squareLenghtXsm};
  height: ${(props) => props.theme.squareLenghtXsm};
  border: 5px solid white;
  position: absolute;
  /* top: ${(Math.random() * window.innerHeight - 80) / 2 + 100}px;
  left: ${(Math.random() * window.innerWidth) / 2}px; */
  top: 45%;
  right: 10%;

  cursor: grab;
  transition: box-shadow 1s ease;
`;
export const DraggableCircle = styled(motion.div)`
  width: ${(props) => props.theme.circleDiameter};
  height: ${(props) => props.theme.circleDiameter};
  border: 1px solid white;
  position: absolute;
  /* top: ${(Math.random() * window.innerHeight - 80) / 2 + 100}px;
  left: ${(Math.random() * window.innerWidth) / 2}px; */
  top: 15%;
  left: 15%;
  cursor: grab;
  border-radius: 50%;
`;
export const ShootingSquare1 = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 100px;
  left: -10%;
  transition: background-color 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: azure;
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
`;
export const ShootingSquare3 = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid white;
  position: absolute;
  top: 30%;
  right: -5%;
  opacity: 0.5;
`;
export const TitleContainer = styled.div`
  width: 50%;
  height: 30%;
  color: white;
  position: absolute;
  top: 15%;
  left: 15%;
  font-family: Arial, Helvetica, sans-serif;
  pointer-events: none;
  p {
    overflow: hidden;
    span {
      display: inline-block;
      font-size: 4rem;
      font-weight: lighter;
    }
    margin-bottom: 1rem;
  }
  p.designation-hero {
    overflow: hidden;
    span {
      display: inline-block;
      font-size: 12rem;
    }
  }
`;
