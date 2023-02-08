import { ContainerCard, FlipperCard, FrontCard, BackCard, Switching } from "./Styled"
import React, {useContext} from "react"
import { GlobalStateContext } from '../../global/GlobalStateContext'

const CardsFlip = (frente, nome) => {
    // const [checked, setCheckd] = useState(true)
    const { setters, states } = useContext(GlobalStateContext)
    const { setModalOpen } = setters
    const { flip } = states


    return (<>
        <Switching type="checkbox" id="switch" />
        {
            <ContainerCard htmlFor="switch" >
                <FlipperCard className={`${flip ? 'isFliped' : ''}`}>
                    <FrontCard onClick={() => setModalOpen(true)}>
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