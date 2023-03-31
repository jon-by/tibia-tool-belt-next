import styled from "styled-components"

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px auto;
    white-space: pre-wrap;
    font-size: 14px;    
    & > button{
        margin-left: 8px;
    }

    svg{
        margin: 0;
    }
    
`