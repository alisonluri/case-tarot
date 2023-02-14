import { Cabecalho, Inicial, BlocoCards, BotaoIniciar } from './Styled'
import CardsFlip from '../../components/CardsFlip/CardsFlip'
import useRequestData from '../../hooks/useRequestData'
import React from 'react'

const HomePage = () => {

    const cartas = useRequestData('/dataCards.json')
    const urlImgFront = cartas && `${cartas.imagesUrl}`

    const sortArrayCard = (array) => {
        return array.sort(() => Math.random() - 0.5)
    }

    const jogoCartas = cartas && cartas.cards &&
        cartas.cards.map((index) => {
            return <CardsFlip
                key={index.name}
                frente={urlImgFront + index.image}
                nome={index.name}
            />
        })

    return (
        <Inicial>
            <Cabecalho>
                <h1>Página Tarot</h1>
                <p>Clique em iniciar e escolha uma carta.</p>
            </Cabecalho>

            <BotaoIniciar onClick={+1}>
                Iniciar Jogo
            </BotaoIniciar>

            <BlocoCards>
                {jogoCartas && sortArrayCard(jogoCartas)}
            </BlocoCards>

        </Inicial>
    )
}

export default HomePage