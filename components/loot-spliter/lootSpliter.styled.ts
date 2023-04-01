import { COLORS } from '@/constants/global'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const LootSpliterContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const TitleWrapper = styled.div`
display: flex;
gap: .3rem;
cursor: pointer;    
position: relative;
justify-content: center;
align-items: center;
svg{ 
    border-radius: 50%;
    border: 1px solid ${COLORS.white};
    margin-bottom: 1rem;
}
`

export const ToolTip = styled(motion.div)`
position: absolute;
top: 100%;
left: 50%;
transform: translateX(-50%);
pointer-events: none;
background-color: ${COLORS['body-bg']};
z-index: 10;
`

export const LootSpliterInput = styled.textarea`
background-color: ${COLORS["button-bg"]};
font-weight: 600;
width: 300px;
max-width: 300px;
min-width: 300px;
min-height: 35px;
height: 35px;
padding: 8px;
text-align: left;
margin: 16px 0;
color: ${COLORS["white"]};
font-size: 12px;
&::-webkit-scrollbar {
    width: 10px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
    background: #f1f1f1;
 
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: #888;
 
    }
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #555;
   
    }

    &::placeholder{
    color: ${COLORS["white"]};
    opacity: .6;
    text-align: center;
    }
`
