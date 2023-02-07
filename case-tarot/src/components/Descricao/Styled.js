import styled from "styled-components";

export const BoxDescricao = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 70vw;
    height: 50vh;
    padding: 1rem;
    background-image: linear-gradient(45deg, rgba(84,84,84, 0.8), rgba(91,60,40, 0.8), rgba(63,35,16, 0.8));
    color: white;
    font-weight: 500;
    img {
        height: 90%;
    }
`

export const SuaCarta = styled.div`
    margin: 25px;
    background-color: rgba(10,10,10,0.6);
    border-radius: 10px;
    height: 90%;
    padding: 0 15px;
    h1 {
        font-size: 2rem;
        margin-bottom: 10px;
        color: #b87400;
    }
    p {
        font-size: 1.2rem;
    }
`