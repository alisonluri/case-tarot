import { ContainerCard, FlipperCard, FrontCard, BackCard } from "./Styled"
import React from "react"

const CardsFlip = (frente, verso, nome) => {

    return (<>
        {
            <ContainerCard>
                <FlipperCard>
                    <FrontCard>
                        <img src={frente} alt={`Carta: ${nome}`}></img>
                    </FrontCard>
                    <BackCard>
                        <img src={verso} alt="Carta Verso"></img>
                    </BackCard>
                </FlipperCard>
            </ContainerCard>
        }
    </>
    )
}

export default CardsFlip