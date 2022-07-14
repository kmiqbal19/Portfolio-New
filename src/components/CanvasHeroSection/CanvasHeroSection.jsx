import React, { useEffect, useRef } from "react";
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
} from "./StyledCanvasComponents";
import gsap from "gsap";
const Canvas = styled.div`
  width: 100%;
  height: calc(100vh - 8rem);
  position: relative;
  /* overflow: hidden; */
`;

// COMPONENT
function CanvasHeroSection() {
  const canvas = useRef(null);
  const shootingSquare1 = useRef(null);
  const shootingSquare2 = useRef(null);
  const shootingSquare3 = useRef(null);
  const dragCircle = useRef(null);
  const controls = useDragControls();
  useEffect(() => {
    gsap.to(shootingSquare1.current, {
      x: function (x) {
        return (x += window.innerWidth);
      },

      rotate: 360,
      borderRadius: "50%",
      ease: "Power3.easeOut",
      boxShadow: "2px 2px 20px red",
      duration: 20,
      delay: 9,

      //   repeat: -1,
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
      dragCircle.current.style.boxShadow = "5px 5px 60px blue";
      dragCircle.current.style.borderRadius = "50%";
      dragCircle.current.style.backgroundColor = "white";
      dragCircle.current.style.mixBlendMode = "difference";
    }
    if (i.offset.x < -10) {
      dragCircle.current.style.boxShadow = "5px 5px 60px red";
    }
    if (i.offset.y > 10) {
      dragCircle.current.style.boxShadow = "5px 5px 60px green";
      dragCircle.current.style.borderRadius = "0%";
    }
    if (i.offset.y < -10) {
      dragCircle.current.style.boxShadow = "5px 5px 60px cyan";
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
            Web Development
          </motion.span>
        </p>
        <br />
        <p data-scroll data-scroll-speed="-1" className="designation-hero">
          <motion.span
            initial={{ y: 400, skewX: -30 }}
            animate={{ y: 0, skewX: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 5.6 }}
          >
            Learner
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
        dragConstraints={{ left: 500, right: 400, top: 100, bottom: 200 }}
        onDragEnd={handleDragEnd}
      ></DraggableSquare1>
      <DraggableSquare2
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 320 }}
        transition={{ duration: 1.3, delay: 6.3 }}
        drag
        dragElastic={0.7}
        dragConstraints={{ left: 300, right: 500, top: 100, bottom: 50 }}
        onDragEnd={handleDragEnd}
      >
        <span>Move Us</span>
      </DraggableSquare2>
      <DraggableSquare3
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 380 }}
        transition={{ duration: 1.5, delay: 6.8 }}
        drag
        dragElastic={0.7}
        dragConstraints={{ left: 300, right: 500, top: 100, bottom: 50 }}
        onDragEnd={handleDragEnd}
      ></DraggableSquare3>
      <DraggableCircle
        dragControls={controls}
        ref={dragCircle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 7.2 }}
        drag
        dragElastic={0.9}
        // dragConstraints={{
        //   left: window.innerWidth / 2,
        //   right: window.innerWidth / 2,
        //   top: window.innerHeight / 2,
        //   bottom: window.innerHeight / 2,
        // }}
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
