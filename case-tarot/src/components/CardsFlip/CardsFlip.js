import { BackCard, ContainerCard, FlipperCard, FrontCard } from "./StyledFlip"
import React, { useState } from "react"
import Modal from '../Descricao/Modal'

const CardsFlip = (frente, nome) => {
    const [flip, setFlip] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)

    let mudaFlip = () => {
       return flip?'isFliped':''
    }

    let handleModalSet = () => {
        return setFlip(!flip) && setModalOpen(!modalOpen)
    }
    console.log(modalOpen)


    return(
        <>
            <ContainerCard>
                <FlipperCard className={mudaFlip()}  onClick={() => handleModalSet()}>
                    <FrontCard>
                        <img src={frente.frente} alt={`Carta: ${nome}`} />
                        <p>{nome.nome}</p>
                    </FrontCard>
                    <BackCard>
                        <img src="https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png" alt="Carta Verso" />
                    </BackCard>
                </FlipperCard>
            </ContainerCard>
            <Modal
                cartaEscolhida={frente.frente}
                nomeCarta={nome.nome}
                isOpen={modalOpen}
                fecharModal={() => setModalOpen(!modalOpen)}
            />
        </>
    )
}

export default CardsFlip