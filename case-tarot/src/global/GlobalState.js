import React, { useState } from "react"
import { GlobalStateContext } from "./GlobalStateContext"

const GlobalState = props => {
    const [dados, setDados] = useState(null)

    const states = {
        dados

    }

    const setters = {
        setDados

    }

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState