import React from "react";

import { IMBUIMENTS_DATA } from "@/constants/imbuiments";

import {
  Wrapper,
  ItensWrapper,
  ImbuimentWrapper,
  ImbuimentsItensWrapper,
  ImbuimentsContainer
} from "./Imbuiments.styled";

import ImbuimentIten from "./ImbuimentIten";

const Imbuiments = () => {
  return (

    <ImbuimentsContainer>
      <h1>Imbuiments</h1>
      <Wrapper>
        {Object.keys(IMBUIMENTS_DATA).map((key) => {
          return (
            <ItensWrapper key={key}>
              <>
                <h2>{key}</h2>
                {IMBUIMENTS_DATA[key as keyof typeof IMBUIMENTS_DATA].map(
                  (imbuiment, index) => {
                    return (
                      <ImbuimentWrapper key={`${imbuiment.name}-${index}`} bgImage={imbuiment.icon}>
                        <ImbuimentsItensWrapper>
                          <h3>{imbuiment.name}</h3>
                          {imbuiment.itens.map((iten) => {
                            return <ImbuimentIten key={iten.name} iten={iten} />;
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
    </ImbuimentsContainer>
  );
};

export default Imbuiments;
