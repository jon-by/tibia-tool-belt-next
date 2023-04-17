import styled from "styled-components";

import { COLORS } from "@/constants/global";
import { darken, lighten } from "polished";

export const Item = styled.div`
  position: relative;
  min-width: 200px;  
  border: 1px solid;
  background-color: ${COLORS["timer-item-bg"]};
  border-color: ${darken(0.8, COLORS.white)};
  margin: 4px 0;
  padding: 6px 4px;
`;


export const ItemWrapper = styled.div``

export const RemoveItem = styled.div`
position: absolute;
top: 8px;
right: 8px;
cursor: pointer;
z-index: 10;

`
export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  position: relative;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    &.editable-timer {
      flex-direction: row;
    }
  }
`;

export const TimerControl = styled.div`  
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 8px;
  
`;

export const PlayPause = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${COLORS["button-bg"]};
  border-radius: 5px;
  display: flex;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
  &:hover {
    color: ${COLORS["button-hover"]};
    background-color: ${darken(0.1, COLORS["button-bg"])};
  }
`;

export const Restart = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${COLORS["button-bg"]};
  border-radius: 5px;
  display: flex;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
  &:hover {
    color: ${COLORS["button-hover"]};
    background-color: ${darken(0.1, COLORS["button-bg"])};
  }
`;

export const Config = styled.div``;

export const TimerWrapper = styled.div`
  display: flex;
`;

