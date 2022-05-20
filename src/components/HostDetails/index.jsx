import { ContainerHost, ContainerTable, DateHost,
    HeaderHost, Options, TitleHost
 } from "./styles"
import { Container } from '../Container/styles'
import api from '../../services/api' 
import { useState } from "react";
import { useEffect } from "react";
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