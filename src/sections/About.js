import React, { useLayoutEffect, useRef } from "react";
import {
  Section,
  Container,
  ImageContainer,
  AboutTextContainer,
  Overlay,
} from "../components/AboutStyles/AboutStyles";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "../assets/Images/img-1.jpeg";
import img2 from "../assets/Images/img-2.jpeg";
import img3 from "../assets/Images/img-3.png";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
      ScrollTrigger.matchMedia({
        all: function () {
          t1.to(element, {
            scrollTrigger: {
              trigger: element,
              start: "top top",
              end: "bottom+=67% top-=67%",
              // end: "top top",

              scroller: ".App", // locomotive element
              scrub: true,
              pin: true,
              //   markers:true,
            },
            ease: "none",
          });
          // Verticle Scrolling
          t1.fromTo(
            scrollingElement,
            {
              y: "0",
            },

            {
              y: "-67%",
              scrollTrigger: {
                trigger: scrollingElement,
                start: "top top",
                end: "bottom bottom",
                scroller: ".App", // locomotive element
                scrub: true,
                // markers: true,
              },
            }
          );
        },
      });

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instances
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="about">
      <AboutTextContainer>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          Developer via self-education. Throughout my bachelor's degree, I took
          courses that introduced me to programming languages like C and Python.
          Later on though, I became fascinated by the amazing world of web
          development. As a result, I began learning development in addition to
          my academic studies because, as you are probably aware, learning is a
          lifelong endeavor.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
        >
          I reside in Magdeburg. Here, I'm doing my masters in <a href="https://www.ovgu.de/en/Study/Study+Programmes/Master/Digital+Engineering.html" target="_blank" rel="noreferrer"><b>Digital Engineering</b></a> (Faculty of Computer Science) at Otto Von Guericke University Magdeburg.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
        >
          I enjoy building websites, learning new web technologies, playing
          games, and reading articles. You can reach me via my social media
          links.
        </motion.p>
      </AboutTextContainer>

      <Overlay />

      <Container ref={ScrollingRef}>
        <ImageContainer src={img1} alt="1" />
        <ImageContainer src={img2} alt="2" />
        <ImageContainer src={img3} alt="2" />
      </Container>
    </Section>
  );
};

export default About;
