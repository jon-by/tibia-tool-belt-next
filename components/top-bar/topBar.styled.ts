import styled from "styled-components";

export const TopBarContainer = styled.header`
display: flex;
justify-content: space-evenly;
align-items:center ;
margin: .5rem;
flex-wrap: wrap;
background-color: rgb(55 53 53 / 39%);
border-radius: 5px ;

padding: .5rem;

@media only screen and (max-width:1180px){
    justify-content: space-between;
}
`