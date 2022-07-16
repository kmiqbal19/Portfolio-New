import styled from "styled-components";
export const FooterContainer = styled.div`
  background-color: black;
  width: 100vw;
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10vw;
`;
export const TextContainerWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rem;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    margin-bottom: 5vh;
  }
`;
export const LetsWorkTextContainer = styled.div`
  width: 40%;
  height: 400px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 1400px) {
    width: 60%;
  }
  @media screen and (max-width: 750px) {
    align-self: flex-start;
    width: 100%;
  }
  div {
    /* border: 1px solid blue; */
    overflow: hidden;
    @media screen and (max-width: 650px) {
      height: 70px;
    }
    &:nth-child(3) {
      p {
        margin-left: 20rem;
        @media screen and (max-width: 1400px) {
          margin-left: 15rem;
        }
        @media screen and (max-width: 600px) {
          margin-left: 10rem;
        }
      }
    }
  }

  p {
    font-size: calc(4rem + 2vw);
    font-family: "Ubuntu", sans-serif;
    color: white;
    @media screen and (max-width: 1000px) {
      font-size: calc(3rem + 2vw);
    }
  }
`;
export const SocialIconsContainer = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &:hover {
    span {
      opacity: 1;
    }
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    margin-top: 5vh;
  }
  span {
    color: white;
    font-size: calc(1rem + 0.5vw);
    margin-right: 1.3vw;
    opacity: 0;
    transition: opacity 0.8s ease;
    @media screen and (max-width: 750px) {
      margin-right: 10vw;
    }
  }
  div {
    display: flex;
    a {
      svg {
        color: white;
        margin: calc(1rem + 0.8vw);
        width: calc(1.5rem + 1.5vw);
        height: calc(1.5rem + 1.5vw);
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        &:hover {
          transform: scale(1.2);
        }
      }
      &:nth-child(1) {
        svg {
          &:hover {
            color: navy;
          }
        }
      }
      &:nth-child(2) {
        svg {
          &:hover {
            color: red;
          }
        }
      }
      &:nth-child(3) {
        svg {
          &:hover {
            color: green;
          }
        }
      }
      &:nth-child(4) {
        svg {
          &:hover {
            color: blue;
          }
        }
      }
    }
  }
`;
export const FooterTextsContainer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  p {
    letter-spacing: 0.5px;
    color: white;
    font-size: calc(1rem + 0.5vw);
    text-align: right;
    span {
      text-decoration: underline;
      &:hover {
        cursor: pointer;
      }
    }
  }
  ul {
    padding: 2rem 1rem;
    position: absolute;
    bottom: 5rem;
    right: -2rem;
    background-color: rgba(255, 250, 255, 0.1);
    border-radius: 1rem;
    li {
      letter-spacing: 0.5px;
      list-style: none;
      margin: 1rem;
      color: white;
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;
