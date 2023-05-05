import styled from "styled-components"
import { motion } from "framer-motion"
import { COLORS } from '../../constants/global'

export const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
`
export const CurrentWrapper = styled(motion.div)`
cursor: pointer;
width: 100px;
display: flex;
justify-content: center;
justify-content: space-evenly;
align-items: center;
`

export const ChooseLangM = styled(motion.div)`
z-index: 10;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;
position: absolute;
top: 100%;
left: 0;
background-color: ${COLORS["button-bg"]};
width: fit-content;
min-width: 100px;
padding: 8px;
border-radius: 10px;
`

type langItemMProps = {
    selected: boolean
}

export const LangItemM = styled(motion.div) <langItemMProps>`
color: #000;
cursor: pointer;
color: ${({ selected }) => selected ? COLORS.active : COLORS.white};
font-size: 14px;

`