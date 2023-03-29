import styled from "styled-components"
import { COLORS } from "@/constants/global"

export const Content = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;

`

export const TextArea = styled.textarea`
background-color: ${COLORS["button-bg"]};
font-weight: 600;
width: 300px;
max-width: 300px;
min-width: 300px;
min-height: 35px;
height: 35px;
padding: 8px;
text-align: center;
margin: 16px 0;
color: ${COLORS.white};
font-size: 12px;
&::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
    background: #f1f1f1;
 
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: #888;
 
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #555;
   
    }


&::placeholder{
 color: ${COLORS.white};
   opacity: .6;
}
`

export const Steps = styled.div`
display: flex;
justify-content: center;
align-items: center;


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

export const ResultWrapper = styled.div`
    margin-top: 16px;
    text-align: center;

    p{
        font-size: 1.2rem;
        margin:  8px auto;
    }

    .positive{
        color: ${COLORS.positive};
    }

    .negative{
        color: ${COLORS.negative};
    }
    
   & > button{
        margin: 1rem auto;
    }
`
