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
import { insertScriptToHead } from "./utils/insertScriptToHead.js";

function App() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  // Loading animation timer
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 4200);
  }, []);
  // Leadinfo Script
  useEffect(() => {
    const myScript = `(function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespace=l.GlobalLeadinfoNamespace||[];
l.GlobalLeadinfoNamespace.push(i);l[i]=function(){(l[i].q=l[i].q||[]).push(arguments)};l[i].t=l[i].t||n;
l[i].q=l[i].q||[];o=e.createElement(a);f=e.getElementsByTagName(a)[0];o.async=1;o.src=d;f.parentNode.insertBefore(o,f);}
}(window,document,'script','https://cdn.leadinfo.eu/ping.js','leadinfo','LI-67F3DA29CABA3'));`;
    insertScriptToHead(myScript, { id: "my-custom-script" });
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
