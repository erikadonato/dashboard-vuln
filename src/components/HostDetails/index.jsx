import { Container } from '../Container/styles'
import TableHostDetails from "./tableHostDetails";
const HostDetails = ({infos}) => {
    

    return (
        <Container>
            {infos.map((item) => {
                return (
                    <TableHostDetails infos={item} key={item.id} />
                )
            })}
        </Container>
    )
}

export default HostDetails