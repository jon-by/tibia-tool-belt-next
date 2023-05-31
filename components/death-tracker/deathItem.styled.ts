import { COLORS } from "@/constants/global"
import styled from "styled-components"

export const Wrapper = styled.div`
position: relative;
border: 1px solid ${COLORS.white};
padding: .2rem;
margin: .4rem;
width: 320px;
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 5px;
h3{
    font-size: 14px;
    position: absolute;
    top: 0;
    left: 3%;
    transform: translateY(-50%);
    background-color: ${COLORS["body-bg"]};

}

`

export const GraveWrapper = styled.div`
width: 60%;
display: flex;
justify-content: center;
align-items: center;
padding: .5rem;
gap: .5rem;
`

export const ComplementInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: .5rem;
`
export const ReasonWrapper = styled.div`
position: relative;
background-color: ${ COLORS["button-bg"]};
border-radius: 50%;
width: 20px;
height: 20px;

cursor: pointer;

&:hover p{
    display: flex;
}
p{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${COLORS["body-bg"]};
    width: 200px;
    transform: translateX(-100%);
    padding: 2rem;
    z-index: 10;
    border: 1px solid ${COLORS.white};
    border-radius: 5px;
}
`