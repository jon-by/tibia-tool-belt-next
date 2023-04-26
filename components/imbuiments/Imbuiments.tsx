import React from "react";

import { IMBUIMENTS_DATA } from "@/constants/imbuiments";


import { Wrapper, ItensWrapper, ImbuimentWrapper, ImbuimentsItensWrapper } from "./Imbuiments.styled";
import ImbuimentIten from "./ImbuimentIten";
const Imbuiments = () => {
  return (
    <Wrapper>
      <ItensWrapper>
        <h2>Support</h2>
        {IMBUIMENTS_DATA.filter(imbuiment => imbuiment.category === "support").map(suportImbuiments => {
          return <ImbuimentWrapper bgImage={suportImbuiments.icon}>
            <h3>{suportImbuiments.name}</h3>

            <ImbuimentsItensWrapper>
              {suportImbuiments.itens.map(iten => {
                return <ImbuimentIten iten={iten} />
              })}

            </ImbuimentsItensWrapper>
          </ImbuimentWrapper>
        })}
      </ItensWrapper>

      <ItensWrapper>
        <h2>Elemental Protection</h2>
        {IMBUIMENTS_DATA.filter(imbuiment => imbuiment.category === "elemental protection").map(protectionImbuiments => {
          return <ImbuimentWrapper bgImage={protectionImbuiments.icon}>
            <h3>{protectionImbuiments.name}</h3>

            <ImbuimentsItensWrapper>
              {protectionImbuiments.itens.map(iten => {
                return <ImbuimentIten iten={iten} />
              })}

            </ImbuimentsItensWrapper>
          </ImbuimentWrapper>
        })}
      </ItensWrapper>

    </Wrapper>
  );
};

export default Imbuiments;
