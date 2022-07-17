import React, { useEffect, useRef, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/Themes.js";

import { ThemeProvider } from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import Home from "./sections/Home";
import Projects from "./sections/Projects.jsx";
import Preloader from "./components/Preloader/Preloader";

import ScrollTriggerProxy from "./components/ScrollTriggerProxy";

import Skills from "./sections/Skills";
import About from "./sections/About.js";
import Footer from "./sections/Footer";

function App() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 4200);
  }, []);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          {loaded ? null : <Preloader />}
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <Projects />
              <Skills />
              <About />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
