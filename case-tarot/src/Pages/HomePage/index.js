import { Cabecalho, Inicial, BlocoCards, BotaoIniciar } from './Styled'
import CardsFlip from '../../components/CardsFlip/CardsFlip'
import useRequestData from '../../hooks/useRequestData'
import React, { useState } from 'react'
import Descricao from '../../components/Descricao/Descricao'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const HomePage = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const cartas = useRequestData('/dataCards.json')
    const urlImgFront = cartas && `${cartas.imagesUrl}`

    console.log(cartas)
    
        const handleOpenModal = () => {
            setModalOpen(true)
        }
    
        const handleCloseModal = () => {
            setModalOpen(false)
        }

    const jogoCartas = cartas && cartas.cards &&
        cartas.cards.map((index) => {
            return <CardsFlip
                key={index.name}
                frente={urlImgFront + index.image}
                nome={index.name}
                openModal={handleOpenModal}
            />
        })

    return (
        <Inicial>
            <Cabecalho>
                <h1>Página Tarot</h1>
                <p>Clique em iniciar e escolha uma carta.</p>
            </Cabecalho>

            <BotaoIniciar>Iniciar</BotaoIniciar>

            <Modal
                isOpen={modalOpen}
                onRequestClose={handleCloseModal}
            >
                <Descricao />
            </Modal>

            <BlocoCards>
                {jogoCartas}
            </BlocoCards>

        </Inicial>
    )
}

export default HomePage