import styled from "styled-components";
export const FooterContainer = styled.div`
  background-color: black;
  width: 100vw;
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TextContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rem;
`;
export const LetsWorkTextContainer = styled.div`
  width: 40%;
  height: 400px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    overflow: hidden;
  }

  p {
    font-size: 8rem;
    font-family: "Ubuntu", sans-serif;
    color: white;
  }
`;
export const SocialIconsContainer = styled.div`
  width: 50%;
  height: 400px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: white;
    font-size: 1.5rem;
    margin-right: 1rem;
    opacity: 0;
  }
  div {
    display: flex;
    a {
      svg {
        color: white;
        margin: 2rem;
        width: 50px;
        height: 50px;
        cursor: pointer;
        &:hover {
          transform: scale(1.2);
        }
        }
        &:nth-child(1){
            svg{
                &:hover{
                    color: navy;
                }
            }
        }
        &:nth-child(2){
            svg{
                &:hover{
                    color: red;
                }
            }
        }
        &:nth-child(3){
            svg{
                &:hover{
                    color: green;
                }
            }
        }
        &:nth-child(4){
            svg{
                &:hover{
                    color: blue;
                }
            }
        }

      }

    }
  }
  &:hover {
    span {
      opacity: 1;
    }
  }
`;
export const FooterTextsContainer = styled.div`
  width: 80%;
  height: 100px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  p {
    letter-spacing: 0.5px;
    color: white;
    font-size: 1.5rem;
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

    bottom: 4rem;
    right: -2rem;
    background-color: rgba(255, 200, 155, 0.2);
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
