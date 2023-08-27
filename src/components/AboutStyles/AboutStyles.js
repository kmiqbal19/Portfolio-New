import styled from "styled-components";
export const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  position: relative;

  /* background-color: red; */
  background-color: white;
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
  @media screen and (min-width: 851px) {
    background-color: rgba(0, 0, 0, 0.3);
  }
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
  background-color: grey;
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
  object-fit: contain;
  @media screen and (max-width: 850px) {
    width: 80vw;
  }
  @media screen and (max-width: 450px) {
    width: 90vw;
  }
`;

export const AboutTextContainer = styled.div`
  width: 50vw;
  height: 100vh;
 
  /* border: 1px solid white; */
  margin-right: 10rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* overflow-y: scroll; */
  /* color: azure; */
  padding: 1rem 4rem;
  z-index: 2;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(233, 136, 136, 0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(61, 4, 4, 0.8);
    box-shadow: inset 0 0 6px rgba(184, 108, 108, 0.5);
  }
  @media screen and (max-width: 850px) {
    width: 80vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 450px) {
    width: 90vw;
    padding: 3rem;
  }
  h1 {
    font-size: calc(4rem + 1.5vw);
    text-align: left;
    margin-bottom: 2rem;
    font-weight: 500;
    font-family: "Ubuntu", sans-serif;
    @media screen and (min-width: 1920px) {
      margin-bottom: 5rem;
    }
  }
  p {
    font-size: calc(1rem + 0.8vw);
    line-height: 1.8;
    font-family: "Ubuntu Mono", monospace;
    font-style: italic;
    text-align: justify;
    &:nth-child(2) {
      text-indent: 50px;
    }
    @media screen and (min-width: 1920px) {
      line-height: 2;
      font-size: calc(1rem + 0.9vw);
    }
    @media screen and (max-width: 650px) {
      font-size: calc(1.2rem + 0.9vw);
    }
  }
`;
