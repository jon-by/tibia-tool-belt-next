import { COLORS } from "@/constants/global";
import styled from "styled-components";

export const HomeContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 16px;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ItenWrapper = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.white};
  border-radius: 5px;
  padding: 8px;
  width: 320px;
  height: 100px;
  cursor: pointer;

  h2 {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(5px, -50%);
    background-color: ${COLORS["body-bg"]};
    font-size: 16px;
    padding: 4px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Content = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
text-align: center;
padding: 8px;
gap: 8px;
height: 100%;
`