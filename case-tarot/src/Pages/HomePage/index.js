import { Cabecalho, Inicial, BlocoCards, ContainerCard, FlipperCard, FrontCard, BackCard } from './Styled'
// import CardsFlip from '../../components/CardsFlip/CardsFlip'
import useRequestData from '../../hooks/useRequestData'
import React from 'react'

const HomePage = () => {

    const cartas = useRequestData('/dataCards.json')
    const urlImgFront = cartas && `${cartas.imagesUrl}`
    const urlImgBack = cartas && `${cartas.imageBackCard}`

    console.log(cartas)

    // const jogoCartas = cartas && cartas.cards &&
    //     cartas.cards.map((info, index) => {
    //         return <CardsFlip
    //             key={index}
    //             frente={`${urlImgFront}${info.image}`}
    //             verso={urlImgBack}
    //             nome={info.name}
    //         />
    //     })

    return (
        <Inicial>
            <Cabecalho>
                <h1>Página Tarot</h1>
                <p>Clique em iniciar e escolha uma carta.</p>
            </Cabecalho>
            <button>Iniciar</button>

            {/* {<img alt='teste' src={urlImgBack} />} */}

            <BlocoCards>

                {/* {jogoCartas} */}
                {/* /////////////////// */}

                {cartas && cartas.cards &&
                    cartas.cards.map((info, index) => {
                        <ContainerCard key={index}>
                            <FlipperCard>
                                <FrontCard>
                                    <img src={`${urlImgFront}${info.image}`} alt={`Carta: ${info.name}`}></img>
                                </FrontCard>
                                <BackCard>
                                    <img src={urlImgBack} alt="Carta Verso"></img>
                                </BackCard>
                            </FlipperCard>
                        </ContainerCard>

                    })
                }

                {/* ////////////////////// */}
            </BlocoCards>
        </Inicial>
    )
}

export default HomePage