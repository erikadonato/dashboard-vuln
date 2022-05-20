import { useState, useEffect } from 'react'
import { Typography } from '../../components/Typography/styles'
import { Container } from '../../components/Container/styles'
import { TitleContainer } from '../../components/TitleContainer/styles'
import HostDetails from '../../components/HostDetails'
import api from '../../services/api'
const HostDetailsPage = () => {
    
    const [data, setData] = useState([])

    useEffect(() => {
        api.get('/api/assets/').then(response => setData(response.data.results))
    }, [])

    return (
        <Container>
            <TitleContainer>
                <Typography variant="h4" color={'white'}>Tabela de detalhamento de Host</Typography>
                <Typography variant='subtitle'>Clique no host para visualizar os detalhes</Typography>
            </TitleContainer>
            <HostDetails infos={data} />
        </Container>
    )

}

export default HostDetailsPage