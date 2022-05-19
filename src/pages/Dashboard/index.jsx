import { useState } from 'react'
import { useEffect } from 'react'
import { Container } from '../../components/Container/styles'
import { TitleContainer } from '../../components/TitleContainer/styles'
import { Typography } from '../../components/Typography/styles'
import api from '../../services/api'

const Dashboard = () => {
    
    const [data, setData] = useState()

    useEffect(() => {
        api.get('api/vulnerabilities/?page=2').then( response => setData(response.data))
    }, [])

    return (
        <Container>
            <TitleContainer>
                <Typography variant='h4'>
                    Dashboard de vulnerabilidades
                </Typography>
            </TitleContainer>
        </Container>
    )
}

export default Dashboard