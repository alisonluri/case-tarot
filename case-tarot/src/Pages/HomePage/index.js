import { Cabecalho, Inicial, BlocoCards, BotaoIniciar } from './Styled'
import CardsFlip from '../../components/CardsFlip/CardsFlip'
import useRequestData from '../../hooks/useRequestData'
import React, { useContext } from 'react'
import Modal from '../../components/Descricao/Modal'
import { GlobalStateContext } from '../../global/GlobalStateContext'

const HomePage = () => {
    const {states, setters} = useContext(GlobalStateContext)
    const {flip} = states
    const {setFlip} = setters

    const cartas = useRequestData('/dataCards.json')
    const urlImgFront = cartas && `${cartas.imagesUrl}`

    const jogoCartas = cartas && cartas.cards &&
        cartas.cards.map((index) => {
            return <CardsFlip
                key={index.name}
                frente={urlImgFront + index.image}
                nome={index.name}
            />
        })

        console.log(flip)

    return (
        <Inicial>
            <Cabecalho>
                <h1>Página Tarot</h1>
                <p>Clique em iniciar e escolha uma carta.</p>
            </Cabecalho>

            <BotaoIniciar onClick={() => setFlip(!flip)}>
                Iniciar
            </BotaoIniciar>

            <Modal />

            <BlocoCards>
                {jogoCartas}
            </BlocoCards>

        </Inicial>
    )
}

export default HomePage