import styled from "styled-components";
import { COLORS } from "@/constants/global";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
padding: 16px;
flex-wrap: wrap;
gap: 16px;
margin-top: 16px;

@media only screen and (max-width: 1200px) {
   max-width: 600px;
}
`

export const ScrollContent =  styled.div`

border: 1px solid ${COLORS["white"]};
padding: 8px;
position: relative;
border-radius: 10px;
h2{
    position: absolute;
    font-size: 14px;    
    top: 0;
    left: 0;
    transform: translate(10%, -50%);
    background-color: ${COLORS["body-bg"]};
    padding: 4px;
}
`

export const ShareItemWrapper = styled.div`
padding: 8px;
position: relative;
width: 250px;
height: 450px;
overflow: auto;



&::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
    background: transparent;
 
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
 
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #555;
   
    }

`

export const ShareItem = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 4px;
max-width: 250px;
`