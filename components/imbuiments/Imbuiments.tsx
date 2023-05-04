import React from "react";

import { IMBUIMENTS_DATA } from "@/constants/imbuiments";

import {
  Wrapper,
  ItensWrapper,
  ImbuimentWrapper,
  ImbuimentsItensWrapper,
} from "./Imbuiments.styled";

import ImbuimentIten from "./ImbuimentIten";

const Imbuiments = () => {
  return (
    <Wrapper>
      {Object.keys(IMBUIMENTS_DATA).map((key) => {
        return (
          <ItensWrapper key={key}>
            <>
              <h2>{key}</h2>
              {IMBUIMENTS_DATA[key as keyof typeof IMBUIMENTS_DATA].map(
                (imbuiment, index) => {
                  return (
                    <ImbuimentWrapper bgImage={imbuiment.icon}>
                      <ImbuimentsItensWrapper>
                        <h3>{imbuiment.name}</h3>
                        {imbuiment.itens.map((iten) => {
                          return <ImbuimentIten key={index} iten={iten} />;
                        })}
                      </ImbuimentsItensWrapper>
                    </ImbuimentWrapper>
                  );
                }
              )}
            </>
          </ItensWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Imbuiments;
