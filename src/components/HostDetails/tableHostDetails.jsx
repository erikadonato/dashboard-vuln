import { ContainerHost, ContainerTable,
    HeaderHost, TitleHost
 } from "./styles"
import api from '../../services/api' 
import { useState } from "react";

const TableHostDetails = ({infos}) => {

    const [tableDisplay, setTableDisplay ] = useState(false)
    const [tableData, setTableData] = useState()
    const [subTableData, setSubTableData] = useState()
    const [tableHeaders] = useState(Object.keys(infos))

    function getHostDetails(id){
        setTableDisplay(!tableDisplay)
        api.get(`/api/assets/${id}`).then(response => {
            setTableData(response.data)
            setSubTableData(response.data.vulnerabilities)
        })
    }

    function checkSeverity(severity) {
        if(severity === 'Médio') {
            return <td style={{background: '#326da8', color: 'white', width: '100%'}}><h1>{severity}</h1></td>
        } else if(severity === 'Alto'){
            return <td style={{background: '#c97826'}}><h1>{severity}</h1></td>
        } else {
            return <td style={{background: '#e31919'}}><h1>{severity}</h1></td>
        }
    }

    return (
        <ContainerHost key={infos.id} onClick={() => getHostDetails(infos.id)}>
            <HeaderHost>
                <TitleHost>
                    Id: {infos.id}
                </TitleHost>

                <TitleHost large>
                    HostName: {infos.hostname}
                </TitleHost>

                <TitleHost medium>
                    Ip Address : {infos.ip_address}
                </TitleHost>

                <TitleHost>
                    Risk : {infos.risk}
                </TitleHost>

                <TitleHost>
                    Vul Count : {infos.vuln_count}
                </TitleHost>
            </HeaderHost>
            {tableDisplay && 
                <ContainerTable>
                     <table className="container-table">
                       <thead>
                           <tr>
                               {tableHeaders.map((header, index) =>{
                                   return (
                                       <th scope="col" key={index}><h1>{header}</h1></th>
                                   )
                               })}
                           </tr>
                       </thead> 
                       <tbody>
                           {tableData && 
                           <>
                                <tr>  
                                <td style={{color: '#fff'}}>{tableData.id}</td>
                                <td style={{color: '#fff'}}>{tableData.created}</td>
                                <td style={{color: '#fff'}}>{tableData.modified}</td>
                                <td style={{color: '#fff'}}>{tableData.hostname}</td>
                                <td style={{color: '#fff'}}>{tableData.ip_address}</td>
                                <td style={{color: '#fff'}}>{tableData.risk}</td>
                                <td style={{color: '#fff'}}>{tableData.vuln_count}</td>
                                {/*{tableData.lenght > 0 && tableData.map((item) => {
                                    console.log('')
                                    return (
                                    )
                                })} */}
                                </tr>    
                                <tr>
                                    <td colSpan={7}>
                                    <h1>Vulnerabilidades</h1>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="col"><h1>id</h1></th>
                                    <th scope="col" colSpan={2}><h1>title</h1></th>
                                    <th scope="col"><h1>severity</h1></th>
                                    <th scope="col"><h1>cvss</h1></th>
                                    <th scope="col"><h1>publication_date</h1></th>
                                    <th scope="col"><h1>asset_count</h1></th>
                                </tr>   
                            </>
                           }
                           {subTableData &&  subTableData.map((vuln, index) => {
                               console.log(vuln.vulnerability)
                                return (
                                    <tr key={index}>
                                        <td>
                                            <h1>
                                                {vuln.vulnerability.id}
                                            </h1>
                                        </td>
                                        <td colSpan={2}>
                                            <h1>
                                                {vuln.vulnerability.title}
                                            </h1>
                                        </td>
                                        {vuln.vulnerability.severity === 'Médio' ? 
                                            <td style={{background: '#326da8', color: 'white', textTransform: 'uppercase'}}><h1>{vuln.vulnerability.severity}</h1></td>
                                            : vuln.vulnerability.severity === 'Alto' ?
                                                <td style={{background: '#c97826', color: 'white', textTransform: 'uppercase'}}><h1>{vuln.vulnerability.severity}</h1></td> 
                                            : 
                                            <td style={{background: '#e31919', color: 'white', textTransform: 'uppercase'}}><h1>{vuln.vulnerability.severity}</h1></td>
                                        }
                                        <td>
                                            <h1>
                                                {vuln.vulnerability.cvss}
                                            </h1>
                                        </td>
                                        <td>
                                            <h1>
                                                {vuln.vulnerability.publication_date !== null ?
                                                vuln.vulnerability.publication_date : 'Não informado'    
                                                }
                                            </h1>
                                        </td>
                                        <td>
                                            <h1>
                                                {vuln.vulnerability.asset_count}
                                            </h1>
                                        </td>
                                    </tr>
                                )
                            })}
                       </tbody>
                    </table>

                </ContainerTable>
            }
        </ContainerHost>
    )
}
export default TableHostDetails