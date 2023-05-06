import Image from 'next/image'
import React from 'react'
import { RashidWrapper } from './rashid.styled'

const rashidPossibleLocations = {
  0: "Carlin",
  1: "Svargrond",
  2: "Liberty Bay",
  3: "Port Hope",
  4: "Ankrahmun",
  5: "Darashia",
  6: "Edron"
}

const Rashid = () => {
  const date = new Date()
  const today = date.getDay()

  const rashidLocation = rashidPossibleLocations[today as keyof typeof rashidPossibleLocations]
  return (
    <RashidWrapper>
      <Image src="/images/Rashid.gif" width={64} height={64} alt="Rashid"/>
      {rashidLocation}
      </RashidWrapper>
  )
}

export default Rashid