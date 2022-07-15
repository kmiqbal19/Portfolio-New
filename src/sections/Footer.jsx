import React, { useState } from "react";
import {
  FooterContainer,
  TextContainerWrapper,
  LetsWorkTextContainer,
  SocialIconsContainer,
  FooterTextsContainer,
} from "../components/FooterStyles/FooterStyles";
import { motion } from "framer-motion";
import { SiGmail, SiMessenger, SiWhatsapp } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

function Footer() {
  const [show, setShow] = useState(false);
  return (
    <FooterContainer>
      <TextContainerWrapper>
        <LetsWorkTextContainer>
          <div>
            <motion.p
              initial={{ y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              Let's Work
            </motion.p>
          </div>
          <br />
          <div>
            <motion.p
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              style={{ marginLeft: "20rem" }}
            >
              Together
            </motion.p>
          </div>
        </LetsWorkTextContainer>
        <SocialIconsContainer>
          <span>Contact Me</span>
          <div>
            <a href="https://github.com/kmiqbal19" title="kmiqbal19">
              <BsGithub />
            </a>
            <a href="loc">
              <SiGmail title="km.iqbal@gmail.com" />
            </a>
            <a href="loc">
              <SiWhatsapp title="+49 176 776-44904" />
            </a>
            <a href="loc">
              <SiMessenger title="km.iqbal@gmail.com" />
            </a>
          </div>
        </SocialIconsContainer>
      </TextContainerWrapper>
      <FooterTextsContainer>
        <ul style={{ display: !show && "none" }}>
          <li>React</li>
          <li>Styled Components</li>
          <li>GSAP</li>
          <li>Framer Motion</li>
          <li>Locmotive Scroll</li>
        </ul>
        <p>&copy; Portfolio 2022</p>
        <p>
          Designed and developed by me. Built{" "}
          <span onClick={() => setShow(!show)}>info</span>
        </p>
      </FooterTextsContainer>
    </FooterContainer>
  );
}

export default Footer;
