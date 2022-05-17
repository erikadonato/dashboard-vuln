import { Table, TableContainer, Tbody, Td, Th, Tr, Thead} from './styles'

const TableComponent = ({data}) => {
    const tableHeader = Object.keys(data[0].results[0])
    const tableData = data[0].results
    console.log('data', tableData)
    return (
        <TableContainer>
            <Table>
            <Thead>
                <Tr>
                    {tableHeader.map((header, index) => {
                        return (
                            <Th key={index}>{header}</Th>
                        )
                    })}
                    
                </Tr>
            </Thead>
            <Tbody>
                {tableData.map((data, index) => {
                    return (
                        <Tr key={index}>
                            <Td>{data.id}</Td>
                            <Td>{data.created}</Td>
                            <Td>{data.hostname}</Td>
                            <Td>{data.ip_address}</Td>
                            <Td>{data.modified}</Td>
                            <Td>{data.risk}</Td>
                            <Td>{data.vuln_count}</Td>
                            
                        </Tr>
                        )
                    })}
            </Tbody>
            </Table>
        </TableContainer>
    )

} 
export default TableComponent