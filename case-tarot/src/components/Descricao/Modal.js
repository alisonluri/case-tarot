import React from "react";
import { BoxDescricao, FundoModal, SuaCarta } from './Styled'

const Modal = ({isOpen, fecharModal, carta, nomeCarta}) => {

console.log("Abrir Modal "+JSON.stringify(isOpen) )


    if (isOpen) {
        return (
            <FundoModal>
                <BoxDescricao>
                    <img src={carta} alt={`Carta: ${nomeCarta}`} />
                    <SuaCarta>
                        <h1>{nomeCarta}</h1>
                        <p>
                            Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!<br /><br />
                            Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!
                        </p>
                    </SuaCarta>
                    <button onClick={fecharModal}>X</button>
                </BoxDescricao>
            </FundoModal>
        )
    } 

    return null

}

export default Modal