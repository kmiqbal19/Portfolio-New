import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";

import { motion } from "framer-motion";
import SingleProject from "../components/SingleProject/SingleProject.jsx";
import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
import img4 from "../assets/Images/4.webp";
import img5 from "../assets/Images/5.webp";

const ProjectsContainer = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow-x: hidden;
  /* border: 2px solid red; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  position: relative;
  background-color: black;
`;
const MovableWrapper = styled(motion.div)`
  height: 100vh;

  width: auto;
  display: flex;
  justify-content: center;
  padding-left: 10vw;
  align-items: center;
`;
const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const movableWrapperRef = useRef(null);
  useLayoutEffect(() => {
    let fixedContainer = containerRef.current;
    let movableWrapper = movableWrapperRef.current;
    let pinWidth = movableWrapper.offsetWidth;
    let t1 = gsap.timeline();
    setTimeout(() => {
      t1.to(fixedContainer, {
        scrollTrigger: {
          trigger: fixedContainer,
          start: "top top",
          end: pinWidth,
          scroller: ".App",
          scrub: 1,
          // markers: true,
          pin: true,
        },
        // height: `${movableWrapper.scrollWidth}px`,
        ease: "none",
      });
      t1.fromTo(
        movableWrapper,
        { x: 0 },
        {
          scrollTrigger: {
            trigger: fixedContainer,
            start: "top top",
            end: pinWidth,
            scroller: ".App",
            scrub: true,
            markers: true,
          },
          x: -pinWidth + window.innerWidth,
        }
      );

      ScrollTrigger.refresh();
    }, 1000);
    return () => {
      // Let's clear instances
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <>
      {/* <h1 style={{ margin: "7rem 0rem" }}>Projects</h1> */}
      <ProjectsContainer ref={containerRef} id="projects">
        <MovableWrapper ref={movableWrapperRef}>
          <SingleProject />
          <SingleProject />
          <SingleProject />
          <SingleProject />
        </MovableWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
