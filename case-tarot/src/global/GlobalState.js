import React, { useState } from "react"
import { GlobalStateContext } from "./GlobalStateContext"

const GlobalState = props => {
    const [dados, setDados] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [flip, setFlip] = useState(false)

    const handleFlipCard = () => {
        setFlip(!flip);
    }

    const states = {
        dados,
        modalOpen,
        flip
    }

    const setters = {
        setDados,
        setModalOpen,
        setFlip
    }

    const functions = {
        handleFlipCard
    }

    return (
        <GlobalStateContext.Provider value={{states, setters, functions}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState