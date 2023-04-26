import styled from "styled-components";
import Link from 'next/link';
import { motion } from "framer-motion"
import { COLORS } from '../../constants/global'

export const MenuWrapper = styled.div`
position: relative;
z-index: 20;
`

export const NavM = styled(motion.nav)`   
background-color: ${COLORS['button-bg']};
box-shadow: 2px 2px 2px rgba(0,0,0,.3);
position: absolute;    
height: auto;
width: 380px;
padding: 16px;
border-radius: 10px;

@media only screen and (max-width: 400px) {
    width: 340px;
}

ul{
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
gap: 16px;
flex-wrap: wrap;
}
`

export const MenuItens = styled.ul` 

    &>div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const MenuItenM = styled(motion.li)`    
    min-width: 100px;    
      
`
type navLinkStyledProps = {
    active: number
}
export const NavLinkStyled = styled(Link)<navLinkStyledProps>`
color: ${({active}) => active? COLORS.active: COLORS['white']};
font-size: 12px;
padding: 8px;

`
export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const ImageWrapper = styled.div`
max-width: 30px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 8px;
img{
    width: 100%;
}
`