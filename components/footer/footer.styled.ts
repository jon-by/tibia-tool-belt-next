import styled from "styled-components";
import Link from "next/link";
import { COLORS } from "@/constants/global";

export const FooterContainer = styled.div`
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
margin-top: auto;

p{
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        margin-left: 8px;
    }
}
`

export const StyledLink = styled(Link)`
color: ${COLORS.white};
display: flex;
justify-content: center;
align-items: center;

margin-left: 8px;

`