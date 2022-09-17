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
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  const [show, setShow] = useState(false);
  return (
    <FooterContainer>
      <TextContainerWrapper>
        <LetsWorkTextContainer>
          <div>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Let's Work
            </motion.p>
          </div>
          <br />
          <div>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Together
            </motion.p>
          </div>
        </LetsWorkTextContainer>
        <SocialIconsContainer>
          <span>Say Hi... 👋</span>
          <div>
            <a
              href="https://github.com/kmiqbal19"
              rel="noreferrer"
              target="_blank"
              title="kmiqbal19"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/k-m-iqbal-96a112146/"
              rel="noreferrer"
              target="_blank"
              title="kmiqbal"
            >
              <BsLinkedin />
            </a>
            <a
              href="mailto: km.iqbal01@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <SiGmail title="km.iqbal01@gmail.com" />
            </a>
            <a
              href="https://wa.me/+4917677644904"
              rel="noreferrer"
              target="_blank"
            >
              <SiWhatsapp title="+49 176 776-44904" />
            </a>
            <a
              href="https://m.me/khandakarmohammad.iqbal"
              rel="noreferrer"
              target="_blank"
            >
              <SiMessenger title="Iqbal Khandakar" />
            </a>
          </div>
        </SocialIconsContainer>
      </TextContainerWrapper>
      <FooterTextsContainer>
        <ul style={{ display: !show && "none" }}>
          <li>React</li>
          <li>Styled Components</li>
          <li>Figma</li>
          <li>GSAP</li>
          <li>Framer Motion</li>
          <li>Locmotive Scroll</li>
          <li>Netlify</li>
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
