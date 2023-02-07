import { ContainerCard, FlipperCard, FrontCard, BackCard, Switching } from "./Styled"
import React, { useState } from "react"

const CardsFlip = (frente, nome, openModal) => {
    const [checked, setCheckd] = useState(true)

    return (<>
        <Switching type="checkbox" id="switch" />
        {
            <ContainerCard htmlFor="switch">
                <FlipperCard onClick={openModal}>
                    <FrontCard>
                        <img src={frente.frente} alt={`Carta: ${nome}`}></img>
                    </FrontCard>
                    <BackCard>
                        <img src="https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png" alt="Carta Verso"></img>
                    </BackCard>
                </FlipperCard>
            </ContainerCard>
        }
    </>
    )
}

export default CardsFlip