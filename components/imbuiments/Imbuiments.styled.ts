import { COLORS } from "@/constants/global";
import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 24px;
max-width: 1100px;
`;

export const ItensWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  h2 {
    width: 100%;
    margin-bottom: 16px;
    text-align: center;
    
  }
`;
type imbuimentWrapperProps = {
  bgImage: string;
};
export const ImbuimentWrapper = styled.div<imbuimentWrapperProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;  
  border: 1px solid ${COLORS.white};
  border-radius: 5px;
  
  position: relative;
  padding: 8px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;    
    background-repeat: no-repeat;
    background-size: cover;
    background-image:  ${({ bgImage }) => `url(${bgImage})`};
    filter: blur(6px)  grayscale(50%);
    
  }

  h3 {
    position: absolute;
    top: 0;
    left: 4px;
    transform: translateY(-50%);
    padding: 0 8px 0 4px;
    font-size:14px;
    background-color: ${COLORS["body-bg"]};
    
  }
`;

export const ImbuimentsItensWrapper = styled.div`
  display: flex;
  flex-direction: column;    
  justify-content: center;
  align-items: center;
  gap: 16px;
  z-index: 10;
  margin-top: 8px;
 
`;
