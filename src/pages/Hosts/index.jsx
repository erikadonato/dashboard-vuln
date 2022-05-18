import { Typography } from '../../components/Typography/styles'
import { Container } from '../../components/Container/styles'
import TableComponent from '../../components/HostTable'
import { TitleContainer } from '../../components/TitleContainer/styles'

const HostPage = () => {

    return (
        <Container>
            <TitleContainer>
                <Typography variant="h4" color={'white'}>Tabela de Host</Typography>
            </TitleContainer>
            <TableComponent />
        </Container>
    )

}

export default HostPage