import styled from "styled-components";
import { motion } from "framer-motion";
export const Nav = styled(motion.nav)`
  width: 100%;
  height: ${(props) => props.theme.navHeight};
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  @media screen and (min-width: 2000px) {
    height: 100px;
  }
`;
export const LogoContainer = styled.div`
  width: 200px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const ListContainer = styled.ul`
  flex: 1;
  /* border: 1px solid green; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const List = styled.li`
  margin: 0 2rem;
  list-style: none;
  font-size: calc(1.3rem + 0.5vw);
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-10%);
    letter-spacing: 0.5px;
    color: red;
  }
  &:last-child {
    margin-right: calc(4rem + 2vw);
  }
`;
export const HamburgerContainer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 1rem;
  margin-right: 2rem;
  cursor: pointer;
  /* position: relative; */
  @media screen and (min-width: 901px) {
    display: none;
  }
  &:hover {
    div.line-1 {
      transform: translateX(-50%);
      width: 50%;
    }
    div.line-2 {
      width: 80%;
    }
    div.line-3 {
      width: 50%;
      transform: translateX(50%);
    }
  }
`;
export const Cross = styled.div`
  width: 60px;
  height: 60px;

  position: relative;
  align-self: flex-end;
  cursor: pointer;
  margin: 2rem 2rem 0rem;
  &:hover {
    div.cross-line-1 {
      transform: rotateZ(0deg);
    }
    div.cross-line-2 {
      transform: rotateZ(0deg);
    }
  }
`;

export const MobileMenu = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 500px;
  top: 0;
  border: 2rem solid rgba(255, 0, 0, 1);
  border-bottom: 5rem solid rgba(255, 0, 0, 1);
  left: 0;
  background-color: black;
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    position: absolute;
    top: 10rem;
    li {
      overflow: hidden;

      margin: 3rem auto;
      transition: all 0.3s ease;
      cursor: pointer;
      will-change: transform;
      &:hover {
        transform: translateY(-20%);
      }
      span {
        display: inline-block;
        font-size: ${(props) => props.theme.fontxxl};
        color: white;
        transition: all 0.3s ease;
        &:hover {
          color: red;
          letter-spacing: 2px;
        }
        &:active {
          color: lightblue;
        }
      }
    }
  }
`;
