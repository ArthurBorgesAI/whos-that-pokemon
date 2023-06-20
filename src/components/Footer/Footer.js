import React from "react";

import { Container, LinkIcon } from "./styles";

const Footer = () => {
  return (
    <Container>
      <p> Desenvolvido por <LinkIcon/><a href="https://arthurborges.vercel.app" target="_blank" rel="noreferrer">ArthurB.</a></p>
    </Container>
  );
};

export default Footer;
