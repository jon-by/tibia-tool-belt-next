import React from 'react'
import Rashid from '../rashid/Rashid'
import { useTranslation } from 'next-i18next'
import { FooterContainer, StyledLink } from './footer.styled'

import { GithubIcon } from '../icons/icons'

const Footer = () => {

  const { t } = useTranslation("common")
  const date = new Date()

  return (
    <FooterContainer>

      <Rashid />

      <p>{date.getFullYear()} Tibia Tool Belt | {t("made-by")} <StyledLink href="https://github.com/jon-by"> jon-by <GithubIcon width={24} heigth={24}/></StyledLink></p>
    </FooterContainer>
  )
}

export default Footer