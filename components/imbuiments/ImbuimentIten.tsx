import Image from 'next/image'
import React from 'react'

import { iten } from './@types/imbuiments'

import { IntemWrapper, ImageAndName, ImageWrapper, TypeAndAmount, QttyHolder } from './imbuimentIten.styled'
type imbuimentItenProps = {
    iten: iten;
    category?: string;
}

const ImbuimentIten = ({ iten, category }: imbuimentItenProps) => {
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
                <p>{iten.type}: {iten.amount} {category !== "skill" && "%"}</p>

                {iten.chance && <p>Chance: {iten.chance}%</p>}
            </TypeAndAmount>
        </IntemWrapper>
    )
}

export default ImbuimentIten