import React from 'react'
import LangSwitcher from '../language-swithcer/LangSwitcher'
import Menu from '../menu/Menu'
import { TopBarContainer } from './topBar.styled'
import Logo from '../logo/Logo'
const TopBar = () => {
  return (
    <TopBarContainer>
        <Logo/>
        <Menu/>
        <LangSwitcher/> 
    </TopBarContainer>
  )
}

export default TopBar