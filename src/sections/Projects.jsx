import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";
import { motion } from "framer-motion";
import SingleProject from "../components/SingleProject/SingleProject.jsx";
import ProjectsData from "../data/ProjectsData.js";

const ProjectsContainer = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow-x: hidden;
  display: flex;
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
  @media screen and (max-width: 650px) {
    padding-left: 0vw;
  }
`;
const Items = () => {
  return ProjectsData.map((project, i) => {
    return (
      <SingleProject
        key={`project-${i + 1}`}
        title={project.title}
        builtWith={project.builtWith}
        git={project.gitLink}
        demo={project.projectDemoLink}
        imgLink={project.imageLink}
      />
    );
  });
};
const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const movableWrapperRef = useRef(null);
  useLayoutEffect(() => {
    let fixedContainer = containerRef.current;
    let movableWrapper = movableWrapperRef.current;
    let pinWidth = movableWrapper.offsetWidth;
    let t1 = gsap.timeline();
    ScrollTrigger.matchMedia({
      "(min-width: 750px)": function () {
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
            { x: 0, backgroundColor: "black" },
            {
              backgroundColor: "red",
              scrollTrigger: {
                trigger: fixedContainer,
                start: "top top",
                end: pinWidth,
                scroller: ".App",
                scrub: true,
                // markers: true,
              },
              x: -pinWidth + window.innerWidth,
            }
          );

          ScrollTrigger.refresh();
        }, 1000);
      },
      "(max-width: 749px)": function () {
        setTimeout(() => {
          t1.to(fixedContainer, {
            scrollTrigger: {
              trigger: fixedContainer,
              start: "top top",
              end: 2 * pinWidth,
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
            { x: 0, backgroundColor: "black" },
            {
              backgroundColor: "red",
              scrollTrigger: {
                trigger: fixedContainer,
                start: "top top",
                end: 2 * pinWidth,
                scroller: ".App",
                scrub: true,
                // markers: true,
              },
              x: -pinWidth + window.innerWidth,
            }
          );

          ScrollTrigger.refresh();
        }, 1000);
      },
    });

    return () => {
      // Let's clear instances
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <>
      <ProjectsContainer ref={containerRef} id="projects">
        <MovableWrapper ref={movableWrapperRef}>
          <Items />
        </MovableWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
