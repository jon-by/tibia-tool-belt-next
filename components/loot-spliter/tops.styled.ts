import styled from "styled-components"
import { COLORS } from "@/constants/global"

export const TopsWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
margin: 1rem auto;
`

export const TopsActions = styled.div`
display: flex;
    button{
        background-color: ${COLORS["button-bg"]};
        color: ${COLORS.white};
        padding: 8px;        
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        white-space: pre-wrap;
        cursor: pointer;

        &:hover{
            color: ${COLORS["button-hover"]};
        }
    }
`


export const TopsCollapsable = styled.div`
    
    transition: 300ms;
    padding: 8px;
`
export const TopsItens = styled.div`
display: flex;
gap: 12px;
font-size: 14px;


h3{
    margin: 16px auto;
    text-transform: capitalize;
    
}

li{
    margin: 8px auto;
}

.amount{
    color: ${COLORS.amount};
}
 .positive{
    //olor: ${COLORS.positive};
   
} 
.negative{
    color: ${COLORS.negative};    
}
`