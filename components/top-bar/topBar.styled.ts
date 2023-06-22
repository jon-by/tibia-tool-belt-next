import styled from "styled-components";
import lampHolding from "../../public/images/Lamp_Holding_Hand.gif"

export const TopBarContainer = styled.header`
display: flex;
justify-content: space-evenly;
align-items:center ;
margin: .5rem;
flex-wrap: wrap;
background-color: rgb(55 53 53 / 39%);
border-radius: 5px ;
padding: .5rem;
position: relative;


&::before{
    content: "";
    position: absolute;
    width: 52px;
    height: 52px;     
    border-radius :50% ;
    background-image: url(${lampHolding.src});
    background-repeat: no-repeat;
    background-color: rgb(255 255 255 / 4.5%);
    left: 0;
    bottom: 0;   
    transform: translateY(95%);
    box-shadow: 0px 0px 100px rgb(255 255 255 / 40%);
    
}

&::after{
    content: "";
    position: absolute;
    width: 52px;
    height: 52px;     
    border-radius :50% ;
    background-image: url(${lampHolding.src});
    background-repeat: no-repeat;
    background-color: rgb(255 255 255 / 4.5%);
    right: 0;
    bottom: 0;   
    transform: translateY(95%);
    box-shadow: 0px 0px 100px rgb(255 255 255 / 40%);
    
}


@media only screen and (max-width:1180px){
    justify-content: space-between;
}
`