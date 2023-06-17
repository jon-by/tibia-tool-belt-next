import styled from "styled-components";
import Link from 'next/link';
import { color, motion } from "framer-motion"
import { COLORS } from '../../constants/global'
import { opacify } from "polished";

export const MenuContainer = styled.nav`
z-index: 20;
align-self: center;
`


export const MenuItens = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: .5rem;
`

type MenuItemProps = { 
 selected:number
}
export const MenuItem = styled.li<MenuItemProps>`
list-style: none;



&:after {
    content: '';
    display: block;
    width: ${({selected}) => selected? "100%":0};
    height: 2px;
    background: ${COLORS.active};
    transition: width .3s;
}

&:hover{
    &:after{
        width: 100%;
    }
}
a{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .4rem;
    padding: 0.3rem;    
    color: ${COLORS.white};
    text-decoration: none;
    font-weight: 400;
}

`