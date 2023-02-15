import { useEffect, useState } from "react";
// import axios from "axios";

const useRequestData = (url) => {
    const [data, setData] = useState({})

    const sortArrayCard = (array) => {
        return array.sort(() => Math.random() - 0.5)
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(dados => {
                dados.cards = sortArrayCard(dados.cards)
                return dados
            })
            .then(dados => setData(dados))
            .catch(error => console.log(error))
    }, [url])

    return data
}

export default useRequestData