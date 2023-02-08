import styled from "styled-components";

export const FundoModal = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.8);
    z-index: 1000;
`

export const BoxDescricao = styled.div`
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
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    img {
        height: 90%;
    }
    button {
        align-self: flex-start;
        padding: 5px 10px;
        background-color: gray;
        border-radius: 5px;
        border: 0;
        cursor: pointer;
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