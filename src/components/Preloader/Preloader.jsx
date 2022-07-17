import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const PreloaderWrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  @media screen and (max-width: 749px) {
    flex-direction: column;
  }
  div {
    width: 33.33%;
    height: 100%;
    background-color: white;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 749px) {
      width: 100%;
      height: 33.33%;
    }
    &:last-child {
      width: 33.34%;
      @media screen and (max-width: 749px) {
        width: 100%;
        height: 33.34%;
      }
    }
    &:nth-child(2) {
      flex-direction: column;
      @media screen and (max-width: 1050px) {
        svg {
          width: 30vw;
          height: 30vw;
        }
      }
      p {
        margin-right: 4rem;
        font-size: calc(2rem + 2vw);
        font-family: "Marcellus", serif;
        @media screen and (max-width: 1050px) {
          margin-right: 0rem;
        }
        @media screen and (max-width: 450px) {
          font-size: calc(2rem + 1vw);
        }
        @media screen and (max-width: 380px) {
          font-size: calc(1rem + 1vw);
        }
        span {
          color: red;
        }
      }
    }
  }
`;

function Preloader() {
  useEffect(() => {
    let targets = gsap.utils.toArray(".preloader-sections");
    ScrollTrigger.matchMedia({
      "(min-width: 750px)": function () {
        gsap.to(targets, {
          height: "0%",
          duration: 1,
          stagger: 0.3,
          delay: 3,
          ease: "Power3.easeOut",
        });
      },
      "(max-width: 749px)": function () {
        gsap.to(targets, {
          width: "0%",
          duration: 1,
          stagger: 0.3,
          delay: 3,
          ease: "Power3.easeOut",
        });
      },
    });
  }, []);
  return (
    <PreloaderWrapper>
      <div className="preloader-sections"></div>
      <div className="preloader-sections">
        <motion.svg
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3 }}
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_103_2)">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeIn" }}
              d="M75.5 123H18C17.4477 123 17 123.448 17 124V342C17 342.552 17.4477 343 18 343H159C159.552 343 160 342.552 160 342V26C160 25.4477 159.552 25 159 25H124C123.448 25 123 25.4477 123 26V302C123 302.552 122.552 303 122 303H77.5C76.9477 303 76.5 302.552 76.5 302V124C76.5 123.448 76.0523 123 75.5 123Z"
              stroke="black"
              stroke-width="20"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeIn" }}
              d="M197.365 200.747C195.179 198.235 194.086 196.979 193.329 195.73C190.062 190.337 190.046 183.581 193.288 178.176C194.039 176.924 195.126 175.664 197.3 173.143L309.434 43.1299C315.283 36.3488 318.207 32.9582 320.309 31.6176C329.807 25.5616 342.465 30.2535 345.726 41.0386C346.448 43.4261 346.459 47.9045 346.48 56.8613L347.088 316.457C347.109 325.414 347.12 329.892 346.409 332.282C343.199 343.08 330.562 347.82 321.037 341.8C318.928 340.468 315.988 337.088 310.108 330.33L197.365 200.747Z"
              stroke="red"
              stroke-width="20"
            />
            <mask id="path-3-inside-1_103_2" fill="white">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeIn" }}
                d="M64.9965 95.0384C72.4254 90.9636 78.2793 84.5228 81.628 76.7395C84.9766 68.9562 85.628 60.2771 83.4784 52.0812C81.3289 43.8853 76.5019 36.643 69.7644 31.505C63.0269 26.367 54.7655 23.6282 46.293 23.7238C37.8204 23.8194 29.6229 26.7438 23.003 32.0325C16.3831 37.3211 11.7207 44.6705 9.7566 52.9128C7.79251 61.1551 8.63945 69.8173 12.1628 77.5231C15.6862 85.2288 21.6839 91.5359 29.2028 95.4422L46.7216 61.7214L64.9965 95.0384Z"
              />
            </mask>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeIn" }}
              d="M64.9965 95.0384C72.4254 90.9636 78.2793 84.5228 81.628 76.7395C84.9766 68.9562 85.628 60.2771 83.4784 52.0812C81.3289 43.8853 76.5019 36.643 69.7644 31.505C63.0269 26.367 54.7655 23.6282 46.293 23.7238C37.8204 23.8194 29.6229 26.7438 23.003 32.0325C16.3831 37.3211 11.7207 44.6705 9.7566 52.9128C7.79251 61.1551 8.63945 69.8173 12.1628 77.5231C15.6862 85.2288 21.6839 91.5359 29.2028 95.4422L46.7216 61.7214L64.9965 95.0384Z"
              stroke="red"
              stroke-width="40"
              mask="url(#path-3-inside-1_103_2)"
            />
          </g>
          <defs>
            <clipPath id="clip0_103_2">
              <rect width="400" height="400" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>
        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3 }}
        >
          <span>K M </span>Iqbal
        </motion.p>
      </div>
      <div className="preloader-sections"></div>
    </PreloaderWrapper>
  );
}

export default Preloader;
