import styled from "styled-components";
import { motion } from "framer-motion";
export const DraggableSquare1 = styled(motion.div)`
  width: ${(props) => props.theme.squareLenghtSm};
  height: ${(props) => props.theme.squareLenghtSm};
  border: 3px solid rgba(0, 0, 0, 0.1);
  position: absolute;
  top: ${(Math.random() * window.innerHeight - 80) / 2 + 100}px;
  left: ${(Math.random() * window.innerWidth) / 2}px;
  cursor: grab;
  transition: box-shadow 1s ease;
`;
export const DraggableSquare2 = styled(motion.div)`
  width: ${(props) => props.theme.squareLenghtLg};
  height: ${(props) => props.theme.squareLenghtLg};
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: absolute;
  top: ${(Math.random() * window.innerHeight - 80) / 2 + 100}px;
  left: ${(Math.random() * window.innerWidth) / 2}px;
  cursor: grab;
`;
export const DraggableCircle = styled(motion.div)`
  width: ${(props) => props.theme.circleDiameter};
  height: ${(props) => props.theme.circleDiameter};
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: absolute;
  top: ${(Math.random() * window.innerHeight - 80) / 2 + 100}px;
  left: ${(Math.random() * window.innerWidth) / 2}px;
  cursor: grab;
  border-radius: 50%;
`;
export const ShootingSquare1 = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 100px;
  left: -10%;
`;
export const ShootingSquare2 = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: -10rem;
  right: 30%;
  opacity: 0.5;
`;
export const ShootingSquare3 = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 30%;
  right: 0%;
  opacity: 0.5;
`;
