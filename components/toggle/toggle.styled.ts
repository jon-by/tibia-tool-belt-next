import { darken, lighten } from "polished";
import styled, { keyframes } from "styled-components"
import { COLORS } from "@/constants/global";


const toggleInactive = lighten(.1, COLORS["button-bg"])

const elasticSnapGo = keyframes`
0%{
    transform: translateX(0);
    background-color: ${toggleInactive};
}

100%{
    transform: translateX(80%);
    background-color: #17c964;
}
`

const elasticSnapBack = keyframes`
0%{
    transform: translateX(80%);
    background-color: #17c964;
}
100%{
    transform: translateX(0);
    background-color: ${toggleInactive};
}
`

type toggleWrapperProps = {
    active: boolean;
    clicked: boolean
}


export const ToggleWrapper = styled.div<toggleWrapperProps>`
width: 30.5px;
height: 18px;
padding: 2px;
background-color: #2b2f31;
border: 1px solid ${lighten(.2, "#2b2f31")};
border-radius: 5px;
display: flex;
align-items: center;
cursor: pointer;

.toggle-slider{
    height: 14px;
    width: 14px;
    border-radius:  15%;
    background-color:${({ active }) => active ? COLORS.positive : toggleInactive};       
    animation: ${({ active }) => active ? elasticSnapGo : elasticSnapBack};
    animation-duration: .3s;
    transition-timing-function: cubic-bezier(.25,.86,1,-0.02);
    animation-fill-mode: forwards;    
    margin: ${({ clicked, active }) => clicked ? active ? "0 0 0 2px" : "0 0 0 -2px" : "0"};
}
`

export const ToggleSlider = styled.div``

export const TestButton = styled.button`
cursor: pointer;
padding: 6px;
color: ${COLORS.white};
background-color: transparent;
font-size: 16px;
border: none;
`