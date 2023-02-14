import styled from "styled-components"



export const ContainerCard = styled.div`
    position: relative;
    background-color: transparent;
    border-radius: 10px;
    width: 162px;
    height: 339px;
    margin: 10px auto;
    perspective: 800px;
    margin-top: -273px;
    margin-right: -133px;
    .isFliped {
        transform: rotateY(180deg);
        
    }
    `

export const FlipperCard = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.6s ease;
    border: 2px groove #336ca5;
    border-radius: 10px;
    :hover {
        margin-top: -25px;
    }
    `

export const FrontCard = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    img{
        border-radius: 10px;
        height: 100%;
        width: 100%;
    }
    transition: all 0.8s ease;
`

export const BackCard = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    img{
        border-radius: 10px;
        height: 100%;
        width: 100%;
    }
    transform: rotateY(180deg);
`