import styled from "styled-components"

import { COLORS } from "@/constants/global"
import { darken, lighten } from "polished"

export const Item = styled.div`
min-width: 350px;
max-width: 400px;
border: 1px solid;
background-color:${COLORS["timer-item-bg"]};
border-color: ${darken(.8, COLORS.white)};
margin: 4px auto;
padding: 6px 4px;
`

export const ItemInfo = styled.div`
display: flex;
flex-direction: row;
gap: 8px;
align-items: center;
justify-content: space-between;

padding: 8px;
position: relative;

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    &.editable-timer{
        flex-direction: row;
    }
}

`

export const TimerControl = styled.div``

export const PlayPause = styled.div`
    width: 40px;
    height: 40px;    
    background-color: ${COLORS["button-bg"]};
    border-radius: 5px;
    display: flex;   
    cursor: pointer;
    &:active {
        transform: scale(0.98);            
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);          
    }
     &:hover{
        color: ${COLORS["button-hover"]};
        background-color:${darken(.1, COLORS["button-bg"])};
    }
`

export const Restart = styled.div`
     width: 40px;
    height: 40px;    
    background-color: ${COLORS["button-bg"]};
    border-radius: 5px;
    display: flex;   
    cursor: pointer;
    &:active {
        transform: scale(0.98);            
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);          
    }
    &:hover{
        color: ${COLORS["button-hover"]};
        background-color:${darken(.1, COLORS["button-bg"])};
    }
`

export const Actions = styled.div`
display: flex;
justify-content: space-evenly;
padding: 8px;
`

export const ActionIten = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 6px;

span{
    font-size: 14px;
}

.warning-time{
    
display: flex;
justify-content: center;
align-items: center;
    input{
        width: 44px;
        margin-right: 6px;
        height: 25px;
        background-color: transparent;
        border: none;
        color: ${COLORS.white};
        border: 1px solid ${lighten(.2, "#2b2f31")};
        border-radius: 5px;
        padding: 6px;
        background-color: #2b2f31;
    }
}

`

export const TimerWrapper = styled.div`
display: flex ;
`

export const RememberTimes = styled.div`
display: flex;
flex-direction: column;
padding: 8px;
gap: 8px;
align-items: center;
`
export const RememberTimesItem = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

input{
    margin: 0 6px;
    width: 44px;   
    height: 25px;
    background-color: transparent;
    border: none;
    color: ${COLORS.white};
    border: 1px solid ${lighten(.2, "#2b2f31")};
    border-radius: 5px;
    padding: 6px;
    background-color: #2b2f31;
}

`