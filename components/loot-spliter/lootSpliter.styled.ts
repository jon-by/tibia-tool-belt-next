import { COLORS } from '@/constants/global'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const LootSpliterContent = styled.div``

export const TitleWrapper = styled.div`
display: flex;
gap: .3rem;
cursor: pointer;    
position: relative;
svg{ 
    border-radius: 50%;
    border: 1px solid ${COLORS.white};
}
`

export const ToolTip = styled(motion.div)`
position: absolute;
top: 100%;
left: 50%;
transform: translateX(-50%);
pointer-events: none;
`