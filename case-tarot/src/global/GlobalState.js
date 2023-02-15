import React, { useState } from "react"
import { GlobalStateContext } from "./GlobalStateContext"

const GlobalState = props => {
    const [dados, setDados] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [imagem, setImagem] = useState()
    const [nomeCarta, setNomeCarta] = useState()

    const states = {
        dados,
        modalOpen,
        imagem,
        nomeCarta
    }

    const setters = {
        setDados,
        setModalOpen,
        setImagem,
        setNomeCarta
    }

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState