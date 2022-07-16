import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
import img4 from "../assets/Images/4.webp";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  position: relative;

  background-color: red;
`;

const Overlay = styled.div`
  position: absolute;
  top: -1%;
  right: 8%;

  width: 38vw;
  height: 105vh;

  border-top: 14rem solid black;
  border-bottom: 14rem solid black;
  border-left: 7rem solid black;
  border-right: 7rem solid black;

  z-index: 11;
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  right: 11%;

  width: 32vw;
  height: auto;
  /* border: 2px solid black; */
  /* width: 65%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.img`
  width: 32vw;
  height: ${window.innerHeight}px;
  object-fit: cover;
`;

const AboutTextContainer = styled.div`
  width: 40vw;
  height: 60vh;
  /* border: 1px solid black; */
  margin-right: 10rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  p {
    font-size: 2rem;
    color: black;
    line-height: 1.5;
  }
`;
const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
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
        // we have to increase scrolling height of this section same as the scrolling element width
        ease: "none,",
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
          // we have to increase scrolling height of this section same as the scrolling element width
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
    <Section ref={ref} id="about">
      <AboutTextContainer>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
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
