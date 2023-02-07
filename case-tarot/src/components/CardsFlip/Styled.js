import styled from "styled-components"

export const Switching = styled.input`
    /* display: none; */
    &:checked + label {
        transition: transform 1.5s ease-out;
        transform: rotateY(180deg);
    }

`

export const ContainerCard = styled.label`
    background-color: transparent;
    border-radius: 10px;
    width: 162px;
    height: 339px;
    margin: 10px auto;
    perspective: 1000px;
    `

export const FlipperCard = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;

    ////////////
    
    /* &:nth-child(2) {
        transition: transform 0.8s ease-out;
        transform: rotateY(180deg);
    } */

    ////////////
    /* ${Switching} :checked {
        transform: rotateY(180deg);
        transition: 1.8s ease-out;
    } */
    //////////
    &:hover {
        transition: transform 0.8s ease-out;
        transform: rotateY(180deg);
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
`

export const BackCard = styled(FrontCard)`
    transform: rotateY(180deg);
`