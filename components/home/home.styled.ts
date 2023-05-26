import { COLORS } from "@/constants/global";
import styled from "styled-components";


export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const HomeItens = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 16px;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ItenWrapper = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.white};
  border-radius: 5px;
  padding: 8px;
  width: 320px;
  height: 100px;
  cursor: pointer;

  h2 {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(5px, -50%);
    background-color: ${COLORS["body-bg"]};
    font-size: 16px;
    padding: 4px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Content = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
text-align: center;
padding: 8px;
gap: 8px;
height: 100%;
`

export const HomeDeaths = styled.div`
margin-top: 2rem;
`

export const DeathsWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h2{
  margin: 1rem 0;
}
`

export const ScrolableContent = styled.div`
max-height: 500px;
max-width: 500px;
justify-content: center;
align-items: center;
overflow: auto;
padding: 1rem;
&::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
    background: transparent;
 
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: #888;
 
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #555;
   
    }
`

export const DeathItem = styled.div`

text-align: center;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 1rem;
gap: .5rem;


div.name-and-image{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 50%;
  border: 1px solid ${COLORS.white};
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  gap: .5rem;
  h3{
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(3%,-50%);
    padding: 0%.5rem;
    font-size: 12px;
    background-color: ${COLORS["body-bg"]};
  }
  p{
    font-size: 12px;
  }
  
}
div.time-and-reason{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-width: 50%;
max-height: 100%;
overflow: hidden;

p{
  text-overflow: ellipsis;
}
}
`

export const SelectWorld = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
margin: 1rem;

select{
  padding: .2rem;
  border: 1px solid #fff;
  color: ${COLORS["button-hover"]};
  background-color: transparent;
  &::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
    background: transparent;
 
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: #888;
 
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #555;
   
    }

  option{
    background-color: ${COLORS["body-bg"]};
    
  }
}

`