import { motion } from "framer-motion"
import styled from "styled-components"
import { COLORS } from "../../constants/global"


export const ResultWrapper = styled(motion.div)`
margin-top: 16px;
border: 1px solid ${COLORS["white"]};
padding: 16px;
border-radius: 10px;
position: relative;
`
export const ResultTitle = styled(motion.h3)`
position: absolute;
top: 0;
left: 2%;
transform: translateY( -50%);
background-color: ${COLORS["body-bg"]};
font-size: 16px;
padding: 0 6px;
`

export const ResultsItens = styled.ul`
`

export const ResultsIten = styled.li``

export const TotalProfit = styled.div`
margin-top: 16px;
display: flex;
padding: 8px;
justify-content: space-between;
align-items: center;
`