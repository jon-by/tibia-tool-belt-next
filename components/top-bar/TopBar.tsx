import React from 'react'
import { useMobile } from "../../context/ResponsiveCotext";
import LangSwitcher from '../language-swithcer/LangSwitcher'

import Menu from '../menu/Menu'

import { TopBarContainer } from './topBar.styled'
import Logo from '../logo/Logo'


const TopBar = () => {
  const isMobile = useMobile()
  return (
    <TopBarContainer>
        <Logo/>
        <Menu/>
       {!isMobile  && <LangSwitcher/> } 
    </TopBarContainer>
  )
}

export default TopBar