import { motion } from "framer-motion"
import styled, { keyframes } from "styled-components"
import { COLORS } from "@/constants/global"


const bounce = keyframes`
   0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
   40% {transform: translateY(-6px);} 
   60% {transform: translateY(-3px);} 

`

interface copyButtonProps {
    copied: number,
    svgmargin:number
}

export const CypyButton = styled(motion.button)<copyButtonProps>`
background-color: ${COLORS["button-bg"]};
color: ${COLORS.white};
padding: 6px 6px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

&:hover{
    color: ${COLORS["button-hover"]};
    
}
svg{
    ${({svgmargin}) => svgmargin && "margin-left: 8px;"}
}

svg{
    animation:${(props)=> props.copied? bounce: "none"} ;
    animation-duration: 1s; 
    -webkit-animation-fill-mode: both; 
    animation-fill-mode: both; 
}

`

