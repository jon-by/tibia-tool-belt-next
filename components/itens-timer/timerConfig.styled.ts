import styled from "styled-components";

import { COLORS } from "@/constants/global";
import { lighten } from "polished";

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 100%;
  min-width: 300px;
  background-color: ${COLORS["timer-item-bg"]};
  transform: translateX(-50%);
  z-index: 10;
 
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 8px;
`;

export const ActionIten = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  ;
  span {
    font-size: 12px;
  }

  .warning-time {
    display: flex;
    justify-content: center;
    align-items: center;
    
    input {
      width: 44px;
      margin-right: 6px;
      height: 25px;
      background-color: transparent;
      border: none;
      color: ${COLORS.white};
      border: 1px solid ${lighten(0.2, "#2b2f31")};
      border-radius: 5px;
      padding: 6px;
      background-color: #2b2f31;
    }
  }
`;

export const RememberTimes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  align-items: center;
`;
export const RememberTimesItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  
  input {
    margin: 0 6px;
    width: 44px;
    height: 25px;
    background-color: transparent;
    border: none;
    color: ${COLORS.white};
    border: 1px solid ${lighten(0.2, "#2b2f31")};
    border-radius: 5px;
    padding: 6px;
    background-color: #2b2f31;
  }
`;
