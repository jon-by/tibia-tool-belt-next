import Image from 'next/image'
import React from 'react'

import { iten } from './@types/imbuiments'

import { IntemWrapper, ImageAndName, ImageWrapper, TypeAndAmount, QttyHolder } from './imbuimentIten.styled'
type imbuimentItenProps = {
    iten: iten
}

const ImbuimentIten = ({ iten }: imbuimentItenProps) => {
    return (
        <IntemWrapper>
            <ImageAndName>
                <ImageWrapper type={iten.type}>
                    <QttyHolder>
                        <Image src={iten.icon} alt={iten.name} width={32} height={32} />
                        <span>{iten.qtty}</span>
                    </QttyHolder>
                </ImageWrapper>
                <p>{iten.name}</p>
            </ImageAndName>
            <TypeAndAmount>
                <p>{iten.type}: {iten.amount}%</p>

                {iten.chance && <p>Chance: {iten.chance}%</p>}
            </TypeAndAmount>
        </IntemWrapper>
    )
}

export default ImbuimentIten