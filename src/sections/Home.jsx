import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";

import { motion, useDragControls } from "framer-motion";
import styled from "styled-components";
import CanvasHeroSection from "../components/CanvasHeroSection/CanvasHeroSection.jsx";
const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  border: 2px solid black;
`;

function Home() {
  const controls = useDragControls();
  // useEffect(() => {
  //   gsap.to(
  //     ".move",

  //     {
  //       x: function (x) {
  //         return (x += window.innerWidth);
  //       },
  //       ease: "Power3.easeOut",
  //       duration: 50,
  //       rotate: 360,
  //       borderRadius: "50%",
  //     }
  //   );
  // }, []);
  return (
    <HomeContainer>
      <Navbar />
      {/* <motion.div
        drag
        dragControls={controls}
        dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
        onDragEnd={(e, i) => {
          if (i.offset.y > 10) {
            console.log("yes");
            document.querySelector(".move").style.border = "3px solid red";
            document.querySelector(".move").style.boxShadow =
              "0px 0px 50px blue";
          }
          if (i.offset.y < -10) {
            console.log("yes");
            document.querySelector(".move").style.border = "3px solid red";
            document.querySelector(".move").style.boxShadow =
              "0px 0px 50px blue";
          }
          if (i.offset.x < -10) {
            console.log("yesX");
            document.querySelector(".move").style.border = "1px solid red";
            document.querySelector(".move").style.boxShadow =
              "0px 0px 50px green";
          }
        }}
        style={{
          width: "50px",
          height: "50px",
          border: "1px solid black",
          position: "absolute",
          top: `${(Math.random() * window.innerHeight) / 2 + 100}px`,
          left: `${(Math.random() * window.innerWidth) / 2}px`,
          cursor: "grab",
        }}
        className="move"
      ></motion.div>
       */}
      <CanvasHeroSection />
    </HomeContainer>
  );
}

export default Home;
