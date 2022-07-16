import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";

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
  right: 5%;
  width: 38vw;
  height: 105vh;
  border-top: 12vw solid black;
  border-bottom: 12vw solid black;
  border-left: 7rem solid black;
  border-right: 7rem solid black;
  z-index: 5;
  @media screen and (max-width: 1300px) {
    border-left: 4rem solid black;
    border-right: 4rem solid black;
    right: 2%;
    width: 40vw;
  }
  @media screen and (max-width: 850px) {
    width: 80vw;
    right: 50%;
    transform: translateX(50%);
    border-left: 2rem solid black;
    border-right: 2rem solid black;
  }
  @media screen and (max-width: 450px) {
    width: 90vw;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  right: 5%;
  width: 38vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1300px) {
    right: 2%;
    width: 40vw;
  }
  @media screen and (max-width: 850px) {
    width: 80vw;
    right: 50%;
    transform: translateX(50%);
  }
  @media screen and (max-width: 450px) {
    width: 90vw;
  }
`;
const ImageContainer = styled.img`
  width: 37vw;
  height: ${window.innerHeight}px;
  object-fit: cover;
  @media screen and (max-width: 850px) {
    width: 80vw;
  }
  @media screen and (max-width: 450px) {
    width: 90vw;
  }
`;

const AboutTextContainer = styled.div`
  width: 50vw;
  height: 70vh;
  /* border: 1px solid white; */
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
  z-index: 2;
  @media screen and (max-width: 850px) {
    width: 80vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 450px) {
    width: 90vw;
    padding: 3rem;
  }
  p {
    font-size: 2rem;
    line-height: 1.5;
    @media screen and (max-width: 450px) {
      text-align: center;
    }
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
        <h1>About Me</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
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
