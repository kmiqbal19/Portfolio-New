import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useDragControls, motion } from "framer-motion";
import {
  DraggableCircle,
  DraggableSquare1,
  DraggableSquare3,
  DraggableSquare2,
  ShootingSquare1,
  ShootingSquare2,
  ShootingSquare3,
  TitleContainer,
  DraggableSquare4,
} from "./StyledCanvasComponents";
import gsap from "gsap";
const Canvas = styled.div`
  width: 100%;
  height: calc(100vh - 8rem);
  position: relative;
`;

// COMPONENT
function CanvasHeroSection() {
  const [dragLeft, setDragLeft] = useState(500);
  const [dragRight, setDragRight] = useState(400);
  const [dragTop, setDragTop] = useState(200);
  const [dragBottom, setDragBottom] = useState(100);
  const canvas = useRef(null);
  const shootingSquare1 = useRef(null);
  const shootingSquare2 = useRef(null);
  const shootingSquare3 = useRef(null);
  const dragCircle = useRef(null);
  const controls = useDragControls();
  useEffect(() => {
    // Set the drag contraints for mobile devices
    if (window.innerWidth < 650) {
      setDragLeft(100);
      setDragRight(50);
      setDragTop(100);
      setDragBottom(50);
    }
    // This square is responsible for draggable square all over the screen
    gsap.to(shootingSquare1.current, {
      x: function (x) {
        return (x += window.innerWidth);
      },
      rotate: 360,
      borderRadius: "50%",
      ease: "Power3.easeOut",
      boxShadow: "5px 5px 30px cyan",
      duration: 20,
      delay: 9,
    });
    gsap.to(shootingSquare2.current, {
      y: function (y) {
        return (y -= window.innerHeight + 100);
      },
      rotate: 360,
      borderRadius: "50%",
      ease: "Power3.easeOut",
      duration: 25,
      delay: 4,
      repeat: -1,
    });
    gsap.to(shootingSquare3.current, {
      x: function (x) {
        return (x -= window.innerWidth + 100);
      },
      rotate: 360,
      borderRadius: "50%",
      ease: "Power3.easeOut",
      duration: 25,
      delay: 5,
      repeat: -1,
    });
  }, []);

  const handleDragEnd = (e, i) => {
    if (i.offset.x > 40) {
      dragCircle.current.style.boxShadow = "5px 5px 80px green";
      dragCircle.current.style.borderRadius = "50%";
      dragCircle.current.style.backgroundColor = "white";
      dragCircle.current.style.mixBlendMode = "difference";
    }
    if (i.offset.x < -10) {
      dragCircle.current.style.boxShadow = "5px 5px 80px red";
      dragCircle.current.style.borderRadius = "0%";
    }
    if (i.offset.y > 10) {
      dragCircle.current.style.boxShadow = "5px 5px 80px blue";
      dragCircle.current.style.borderRadius = "0%";
    }
    if (i.offset.y < -10) {
      dragCircle.current.style.boxShadow = "5px 5px 80px cyan";
      dragCircle.current.style.borderRadius = "50%";
      dragCircle.current.style.backgroundColor = "white";
      dragCircle.current.style.mixBlendMode = "difference";
    }
  };
  const handlePointerDown = (event) => {
    controls.start(event, { snapToCursor: true });
  };
  return (
    <Canvas ref={canvas}>
      <TitleContainer>
        <p data-scroll data-scroll-speed="-1" className="author-name">
          <motion.span
            initial={{ y: -100, skewX: -30 }}
            animate={{ y: 0, skewX: 0 }}
            transition={{ delay: 4.8, duration: 1, ease: "easeOut" }}
          >
            Khandakar Iqbal
          </motion.span>
        </p>
        <p data-scroll data-scroll-speed="-1" className="designation-hero">
          <motion.span
            initial={{ y: 400, skewX: -30 }}
            animate={{ y: 0, skewX: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 5.3 }}
          >
            Frontend
            {/* Full Stack  */}
          </motion.span>
        </p>
        <br />
        <p data-scroll data-scroll-speed="-1" className="designation-hero">
          <motion.span
            initial={{ y: 400, skewX: -30 }}
            animate={{ x: window.innerWidth > 750 ? 100 : 50, y: 0, skewX: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 5.6 }}
          >
            Engineer
          </motion.span>
        </p>
      </TitleContainer>
      <DraggableSquare1
        onPointerDown={(e) => console.log(e)}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: -200 }}
        transition={{ duration: 1, delay: 6 }}
        drag
        dragElastic={0.7}
        dragConstraints={{
          left: dragLeft,
          right: dragRight,
          top: dragTop,
          bottom: dragBottom,
        }}
        onDragEnd={handleDragEnd}
      />
      {/* Square with text */}
      <DraggableSquare2
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 320 }}
        transition={{ duration: 1.3, delay: 6.3 }}
        drag
        dragElastic={0.7}
        dragConstraints={{
          left: dragLeft,
          right: dragRight,
          top: dragTop,
          bottom: dragBottom,
        }}
        onDragEnd={handleDragEnd}
      >
        <motion.span
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            yoyoDelay: 1,
            yoyo: Infinity,
            ease: "easeOut",
            delay: 1,
          }}
        >
          Short drag me in different direction
        </motion.span>
      </DraggableSquare2>
      <DraggableSquare3
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 380 }}
        transition={{ duration: 1.5, delay: 6.8 }}
        drag
        dragElastic={0.7}
        dragConstraints={{
          left: dragLeft,
          right: dragRight,
          top: dragTop,
          bottom: dragBottom,
        }}
        onDragEnd={handleDragEnd}
      />
      <DraggableSquare4
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 490 }}
        transition={{ duration: 1.5, delay: 8 }}
        drag
        dragElastic={0.7}
        dragConstraints={{
          left: dragLeft,
          right: dragRight,
          top: dragTop,
          bottom: dragBottom,
        }}
        onDragEnd={handleDragEnd}
      />
      <DraggableCircle
        dragControls={controls}
        ref={dragCircle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 7.2 }}
        drag
        dragElastic={0.9}
      ></DraggableCircle>
      <ShootingSquare1
        title="Get him back!"
        onPointerDown={handlePointerDown}
        ref={shootingSquare1}
      />
      <ShootingSquare2 ref={shootingSquare2} />
      <ShootingSquare3 ref={shootingSquare3} />
    </Canvas>
  );
}

export default CanvasHeroSection;
