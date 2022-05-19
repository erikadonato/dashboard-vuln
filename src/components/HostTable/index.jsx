import { Table, Tbody, Td, Th, Tr, Thead} from './styles'
import moment from 'moment'
import { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import api from '../../services/api';

const HostTable = () => {

    const [data, setData] = useState([])
    const [tableHeaders, setTableHeaders] = useState([])

    useEffect(() => {
    api.get('http://201.49.62.134:8080/api/assets/').then(response => {
        setData(response.data.results)
        setTableHeaders(Object.keys(response.data.results[0]))
    })}, [])

    return (
        <div>
            {data.lenght === 0 ? <ClipLoader color={'#FFF'} loading={true} size={35} />
            :
                <Table>
                <Thead>
                    <Tr>
                        {tableHeaders.map((header, index) => {
                            return (
                                <Th key={index}>{header}</Th>
                            )
                        })}
                        
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((data, index) => {
                        return (
                            <Tr key={index}>
                                <Td>{data.id}</Td>
                                <Td>{moment(data.created).format('DD/MM/YYYY h:mm:ss')}</Td>
                                <Td>{moment(data.modified).format('DD/MM/YYYY h:mm:ss')}</Td>
                                <Td>{data.hostname}</Td>
                                <Td>{data.ip_address}</Td>
                                <Td>{data.risk}</Td>
                                <Td>{data.vuln_count}</Td>
                                
                            </Tr>
                            )
                        })}
                </Tbody>
                </Table>    
            }    

        </div>
    )

} 
export default HostTable