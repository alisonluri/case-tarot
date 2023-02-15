import { Cabecalho, Inicial, BlocoCards, BotaoIniciar } from './Styled'
import CardsFlip from '../../components/CardsFlip/CardsFlip'
import useRequestData from '../../hooks/useRequestData'
import React, { useContext} from 'react'
import Modal from '../../components/Descricao/Modal'
import { GlobalStateContext } from '../../global/GlobalStateContext'


const HomePage = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { modalOpen, imagem, nomeCarta } = states
    const { setModalOpen, setImagem, setNomeCarta } = setters

    const cartas = useRequestData('/dataCards.json')
    
    const urlImgFront = cartas && `${cartas.imagesUrl}`


    const abrirModal = (carta, nomeCarta) => {
        setImagem(carta)
        setNomeCarta(nomeCarta)
        setModalOpen(true)
    }


    return (
        <Inicial>
            <Cabecalho>
                <h1>Página Tarot</h1>
                <p>Clique em iniciar e escolha uma carta.</p>
            </Cabecalho>

            <BotaoIniciar onClick={() => window.location.reload()}>
                Iniciar Jogo
            </BotaoIniciar>

            <Modal
                isOpen={modalOpen}
                fecharModal={() => setModalOpen(!modalOpen)}
                carta={imagem}
                nomeCarta={nomeCarta}
            />

            <BlocoCards>
                {cartas && cartas.cards &&
                    cartas.cards.map((index) => {
                        return <CardsFlip
                            key={index.name}
                            frente={urlImgFront + index.image}
                            nome={index.name}
                            abrirModal={abrirModal}
                        />
                    })}
            </BlocoCards>

        </Inicial>
    )
}

export default HomePage