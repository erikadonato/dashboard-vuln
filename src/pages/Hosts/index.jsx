import { Typography } from '../../components/Typography/styles'
import { Container } from '../../components/Container/styles'
import HostTable from '../../components/HostTable'
import { TitleContainer } from '../../components/TitleContainer/styles'

const HostPage = () => {

    return (
        <Container>
            <TitleContainer>
                <Typography variant="h4" color={'white'}>Tabela de Host</Typography>
            </TitleContainer>
            <HostTable />
        </Container>
    )

}

export default HostPage