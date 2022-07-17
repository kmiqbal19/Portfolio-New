import styled from "styled-components";
export const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  position: relative;

  background-color: red;
`;

export const Overlay = styled.div`
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

export const Container = styled.div`
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
export const ImageContainer = styled.img`
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

export const AboutTextContainer = styled.div`
  width: 50vw;
  height: 90vh;

  margin-right: 10rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  padding: 0rem 4rem;
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
  h1 {
    font-size: calc(4rem + 1.5vw);
    text-align: left;
    margin-bottom: 5rem;
    font-weight: 500;
    font-family: "Ubuntu", sans-serif;
  }
  p {
    font-size: calc(1rem + 1vw);
    line-height: 1.5;
    /* @media screen and (max-width: 450px) {
      text-align: center;
    } */
  }
`;
