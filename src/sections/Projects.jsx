import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";

import { motion } from "framer-motion";

import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
import img4 from "../assets/Images/4.webp";
import img5 from "../assets/Images/5.webp";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  /* overflow: hidden; */
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;
const Gallery = styled(motion.div)`
  height: 100vh;
  /* min-width: 100%; */
  /* position: absolute; */
  /* overflow-x: hidden; */
  /* top: 0%;
  left: 0%; */
  /* transform: translateX(-50%); */
  /* border: 2px solid black; */
  width: auto;
  display: flex;
  justify-content: center;

  align-items: center;
  img {
    width: 400px;
    height: 500px;
    margin: 0rem 4rem;
  }
`;
const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);
  useLayoutEffect(() => {
    let container = ref.current;
    let gallery = horizontalRef.current;
    let pinWidth = gallery.offsetWidth;
    let t1 = gsap.timeline();
    setTimeout(() => {
      t1.to(container, {
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: pinWidth,
          scroller: ".App",
          scrub: 1,
          // markers: true,
          pin: true,
        },
        // height: `${gallery.scrollWidth}px`,
        ease: "none",
      });
      t1.fromTo(
        gallery,
        { x: 0 },
        {
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: pinWidth,
            scroller: ".App",
            scrub: 1,
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
    <Section ref={ref} id="shop">
      <Gallery ref={horizontalRef}>
        <img src={img2} alt="img" />
        <img src={img3} alt="img" />
        <img src={img4} alt="img" />
        <img src={img5} alt="img" />
        <a href="www.google.com">
          <img src={img1} alt="img" />
        </a>
      </Gallery>
    </Section>
  );
};

export default Projects;
