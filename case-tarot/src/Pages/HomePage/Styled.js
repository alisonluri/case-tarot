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

////////////////////////////////////////// flip ///////////////

export const ContainerCard = styled.label`
    background-color: #56070c;
    border-radius: 10px;
    width: 162px;
    height: 339px;
    margin: 10px auto;
    &:hover {
        transform: rotateY(180deg);
        transition: 1.8s;
    }
`

export const FlipperCard = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1.8s;
    transform-style: preserve-3d;
`

export const FrontCard = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    img{
        border-radius: 10px;
        height: 100%;
        width: 100%;
    }
    /* backface-visibility: hidden; */
`

export const BackCard = styled(FrontCard)`
    transform: rotateY(180deg);
    height: 100%;
    width: 100%;
    img{
        border-radius: 10px;
        height: 100%;
        width: 100%;
    }
`