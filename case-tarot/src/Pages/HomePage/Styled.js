import styled from "styled-components";
import ImgTopo from '../../assets/topo.jpg'

export const Inicial = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `

export const Cabecalho = styled.header`
    background-image: url(${ImgTopo});
    width: 1440px;
    height: 150px;
    background-position: center center;
    padding: 25px 55px;
    color: #ccc;
`

export const BlocoCards = styled.div`
    width: 1300px;
    padding: 0 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
`

export const BotaoIniciar = styled.button`
    height: 50px;
    width: 100px;
    margin: 20px 10px;
    background-color: #ffa229;
    font-size: 18px;
    font-weight: 500;
    color: white;
    border-radius: 10px;
    border: #f9f9c9;
`