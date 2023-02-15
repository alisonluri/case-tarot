import { BackCard, ContainerCard, FlipperCard, FrontCard } from "./StyledFlip"
import React, { useState, useEffect } from "react"

const CardsFlip = ({frente, nome, abrirModal}) => {
    const [flip, setFlip] = useState(true)

    useEffect(() => {
        if(!flip) {
            abrirModal(frente, nome)
        }
    },[flip])

    let mudaFlip = () => {
        return flip ? 'isFliped' : ''
    }

    return (
        <>
            <ContainerCard>
                <FlipperCard
                    className={mudaFlip()}
                    onClick={() => setFlip(!flip)}
                >
                    <FrontCard>
                        <img src={frente} alt={`Carta: ${nome}`} />
                        <p>{nome}</p>
                    </FrontCard>
                    <BackCard>
                        <img src="https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png" alt="Carta Verso" />
                    </BackCard>
                </FlipperCard>
            </ContainerCard>

        </>
    )
}

export default CardsFlip