import React from 'react'
import LangSwitcher from '../language-swithcer/LangSwitcher'
import Menu from '../menu/Menu'
import { TopBarWrapper } from './topBar.styled'
const TopBar = () => {
  return (
    <TopBarWrapper>
        <Menu/>
        <LangSwitcher/>
    </TopBarWrapper>
  )
}

export default TopBar