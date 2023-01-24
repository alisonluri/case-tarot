import {Cabecalho, Inicial, ContainerCard, BoxCard, Switch} from './Styled'

const HomePage = () => {
    return (
        <Inicial>
            <Cabecalho>
                <h1>Página Tarot</h1>
                <p>Clique em iniciar e escolha uma carta.</p>
            </Cabecalho>
            <button>Iniciar</button>
            <Switch type='checkbox' />
            <ContainerCard>
                <BoxCard>

                </BoxCard>
            </ContainerCard>
        </Inicial>
    )
}

export default HomePage