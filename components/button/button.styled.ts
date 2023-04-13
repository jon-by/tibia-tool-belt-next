import styled from "styled-components"
import { COLORS } from "@/constants/global"

import { darken } from "polished"

import { motion } from "framer-motion"

type buttonProps = {
    padding: string
}
export const ButtonStyled = styled(motion.button)<buttonProps>`
    cursor: pointer;
    background-color: ${COLORS["button-bg"]};
    color: ${COLORS.white};
    width: fit-content;
    padding: ${(({padding}) => padding? `${padding}`: '6px 6px' )};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 300ms;
`