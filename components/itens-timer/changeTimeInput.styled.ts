import styled from "styled-components"
import { COLORS } from "@/constants/global"

export const TimerInput = styled.input`
 width: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: ${COLORS.white};
    border: none;

    &::-webkit-inner-spin-button {
     opacity: 1;
    }
`