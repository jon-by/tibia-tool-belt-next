import { COLORS } from "@/constants/global";
import { transparentize } from "polished";
import styled from "styled-components";
import { type } from "./@types/imbuiments";

const imbuimentColor = {
    basic: "#00ff00",
    intricate: "#ffff00",
    powerful: "#ff0000",
  };

export const IntemWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 16px;
  
`;

export const ImageAndName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-align: center;
  width: 150px;

  p {
    font-size: 12px;
    font-weight: 600;
  }
`;



type imageAndNameProps = {
  type: type;
};
export const ImageWrapper = styled.div<imageAndNameProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  img {
    border: 1px solid yellow;
    padding: 2px;
    border-color: ${({ type }) => imbuimentColor[type]};
    background-color: ${({ type }) => transparentize(0.7, imbuimentColor[type])};
  }
`;

export const QttyHolder = styled.div`
  position: relative;

  span {
    background-color: ${COLORS["dark-blue"]};
    border-radius: 50%;
    padding: 4px;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    font-weight: 600;
    font-size: 12px;
    transform: translate(50%, -50%);
  }
`;

export const TypeAndAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
`;
