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

export const Switch = styled.label`
    :checked 
`

export const ContainerCard = styled.label`
    background-color: #fcde22;
    border-radius: 10px;
    width: 1200px;
    height: 500px;
`

export const BoxCard = styled.div`

`

/*
container {
    position: relative;
    width: 350px
    height 500px
}

carta{
    position: absolute
    width: 100%
    height 100%

    transform-style: preserve-3d
    transition: all 0.5s ease
}

container:hover carta{
    transform: rotateY(180deg)
}

frente{
    position: absolute
    w 100%
    h 100%

    backface-visibility: hidden
    background-image
}

verso{
    position: absolute
    w 100%
    h 100%

    backface-visibility: hidden
    background-image
    transform: rotateY(180deg)
}
*/ 