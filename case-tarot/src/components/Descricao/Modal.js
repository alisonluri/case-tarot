import React, { useContext } from "react";
import { BoxDescricao, FundoModal, SuaCarta } from './Styled'
import { GlobalStateContext } from '../../global/GlobalStateContext'

const Modal = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { modalOpen } = states
    const { setModalOpen } = setters

    if (modalOpen) {
        return (
            <FundoModal>
                <BoxDescricao>
                    <img src={"https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png"} alt="Imagem selecionada" />
                    <SuaCarta>
                        {/* <h1>{nome}</h1> */}
                        <p>
                            Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!<br /><br />
                            Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!
                        </p>
                    </SuaCarta>
                    <button onClick={() => setModalOpen(!modalOpen)}>X</button>
                </BoxDescricao>
            </FundoModal>
        )
    } 

}

export default Modal