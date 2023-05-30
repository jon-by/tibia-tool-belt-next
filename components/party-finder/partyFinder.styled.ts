import styled from "styled-components";
import { COLORS } from "@/constants/global";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`
export const InputsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 16px 0;
gap: 8px;
`

export const Input = styled.input`
padding: 8px;
background-color: ${COLORS["button-bg"]};
color: ${COLORS["white"]};
border:.2px solid rgba(255,255,255,.4);
text-align: center;


&::placeholder {
   text-align: center; 
   color: ${COLORS["white"]};
   opacity: .6;
}
`
export const TitleWrapper =  styled.div`
   display: flex;
   
`
export const InformationIconWrapper = styled.span`
border-radius: 50%;
width: 20px;
height: 20px;
box-shadow: 1 2 2 rgba(0,0,0,.5);
background-color: rgba(0,0,0,.5);
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;
align-self: flex-start;
margin-left:8px;
cursor: pointer;

`

export const  ResultText = styled.div`
display: flex;
justify-content: ce;
align-items: center;
flex-direction: column;
gap: .5rem;
`