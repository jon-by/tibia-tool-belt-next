import React from "react";
import Image from "next/image";

import logoImg from "../../public/images/logoDesktop.png";

import { LogoContainer, ContentWrapper } from "./logo.styled";
const Logo = () => {
  return (
    <LogoContainer>
      <a href="/">
        <ContentWrapper>
          <Image
            src={logoImg}
            width={200}
            height={55}
            alt="tibia tool belt logo"
          />
        </ContentWrapper>        
      </a>
    </LogoContainer>
  );
};

export default Logo;
