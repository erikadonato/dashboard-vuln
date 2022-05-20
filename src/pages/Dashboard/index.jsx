import { Container } from '../../components/Container/styles'
import { TitleContainer } from '../../components/TitleContainer/styles'
import { Typography } from '../../components/Typography/styles'
import AssetCard from '../../components/VulnerabilityCard/assetCard'
import { CardSpace, GraphicsArea, GraphicTitle,
    GraphicArea
} from './styles'
import VulnerabilityCard from '../../components/VulnerabilityCard/vulnerabilityCard'
import RiskCard from '../../components/VulnerabilityCard/riskCard'
import GraphicSeverity from '../../components/GraphicSeverity'
import GraphicTopAsset from '../../components/GraphicTopAsset'

const Dashboard = () => {


    return (
        <Container>
            <TitleContainer>
                <Typography variant='h4'>
                    Dashboard de vulnerabilidades
                </Typography>
            </TitleContainer>
            <CardSpace>
                <AssetCard />
                <VulnerabilityCard />
                <RiskCard />
            </CardSpace>
            <GraphicsArea>
                <GraphicArea>
                <GraphicTitle>
                    Gráfico de vulnerabilidade de host
                </GraphicTitle>
                <GraphicSeverity />
                </GraphicArea>
                {/*<GraphicArea>
                    <GraphicTitle>
                    Gráfico top Ativos
                    </GraphicTitle>
                    <GraphicTopAsset />
                    </GraphicArea> */}   
            </GraphicsArea>
        </Container>
    )
}

export default Dashboard