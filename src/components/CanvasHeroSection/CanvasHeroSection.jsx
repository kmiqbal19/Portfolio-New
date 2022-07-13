import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Canvas = styled.div`
  width: 100%;
  height: calc(100vh - 8rem);
  position: relative;
`;
const DraggableSquare1 = styled(motion.div)`
  width: ${(props) => props.theme.squareLenghtSm};
  height: ${(props) => props.theme.squareLenghtSm};
  border: 3px solid black;
  position: absolute;
  top: ${(Math.random() * window.innerHeight - 80) / 2 + 100}px;
  left: ${(Math.random() * window.innerWidth) / 2}px;
  cursor: grab;
`;
const DraggableSquare2 = styled(motion.div)`
  width: ${(props) => props.theme.squareLenghtLg};
  height: ${(props) => props.theme.squareLenghtLg};
  border: 1px solid black;
  position: absolute;
  top: ${(Math.random() * window.innerHeight - 80) / 2 + 100}px;
  left: ${(Math.random() * window.innerWidth) / 2}px;
  cursor: grab;
`;
const DraggableCircle = styled(motion.div)`
  width: ${(props) => props.theme.circleDiameter};
  height: ${(props) => props.theme.circleDiameter};
  border: 1px solid black;
  position: absolute;
  top: ${(Math.random() * window.innerHeight - 80) / 2 + 100}px;
  left: ${(Math.random() * window.innerWidth) / 2}px;
  cursor: grab;
  border-radius: 50%;
`;
function CanvasHeroSection() {
  return (
    <Canvas>
      <DraggableSquare1
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      ></DraggableSquare1>
      <DraggableSquare2
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      ></DraggableSquare2>
      <DraggableCircle
        drag
        dragConstraints={{ left: 100, right: 100, top: 0, bottom: 0 }}
      ></DraggableCircle>
    </Canvas>
  );
}

export default CanvasHeroSection;
