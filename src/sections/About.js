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
import img3 from "../assets/Images/img-3.jpeg";

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
          I'm a self-taught developer. I got familiar with programming languages
          like C and python in my bachelor's courses. But later, I got
          interested in this awesome world of web development. So besides my
          academic study, I started learning development and you know that
          learning is a never-ending journey.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
        >
          I live in Magdeburg. I am doing my final semester of my masters in
          process engineering here.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
        >
          I love learning new web tools , build web projects, play game and read
          articles. You can contact me via social links.
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
