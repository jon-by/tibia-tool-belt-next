import styled from "styled-components";

import { COLORS } from "@/constants/global";
import { lighten } from "polished";

export const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 11;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS["timer-item-bg"]};
`;

export const CloseWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 12;
  cursor: pointer;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;
export const Actions = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 8px;
  gap: 16px;
`;

export const ActionIten = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
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
