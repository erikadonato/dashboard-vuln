import SmallCard from '../../components/Card'
import { Container } from '../../components/Container/styles'
import { TitleContainer } from '../../components/TitleContainer/styles'
import { Typography } from '../../components/Typography/styles'

const Dashboard = () => {
    return (
        <Container>
            <TitleContainer>
                <Typography variant='h4'>
                    Dashboard de vulnerabilidades
                </Typography>
            </TitleContainer>
            <SmallCard />
        </Container>
    )
}

export default Dashboard