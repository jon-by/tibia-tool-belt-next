import { COLORS } from "@/constants/global";
import styled from "styled-components";

export const PodiumWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  flex-wrap: wrap;
  text-align: center;
  gap: 1.5rem;

  .henricus-awards {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;   
    
    h2{
      margin: 0;
    }
    
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const PodiumItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0 1rem;
  width: 150px;
  text-align: center;
  position: relative;

  strong{
    font-size: 14px;
  }

  p{
    font-size: 12px;
  }

  &.order-0 {
    order: 2;
    margin-top: -50px;

    @media only screen and (max-width: 600px) {
      margin: 0;
      order: 0;
    }
  }
  &.order-1 {
    order: 1;
    @media only screen and (max-width: 600px) {
      order: 1;
    }
  }
  &.order-2 {
    order: 3;
    @media only screen and (max-width: 600px) {
      order: 2;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${COLORS.active};
    bottom: -10%;
    left: 0;
  }
`;
