import { BackCard, ContainerCard, FlipperCard, FrontCard } from "./StyledFlip"
import React, { useState, useEffect } from "react"
// import Modal from '../Descricao/Modal'


const CardsFlip = ({frente, nome, abrirModal}) => {
    const [flip, setFlip] = useState(true)
    // const [modalOpen, setModalOpen] = useState(false)

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
            {/* <Modal
                key={nome}
                carta={frente}
                nomeCarta={nome}
                isOpen={!flip}
                fecharModal={() => setFlip(!flip)}
            /> */}
        </>
    )
}

export default CardsFlip