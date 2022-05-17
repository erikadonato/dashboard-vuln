import { useState } from 'react'
import { Container } from '../../components/Container/styles'
import TableComponent from '../../components/Table'

const HostPage = () => {
    const apiresponse =  [{
        "count": 33,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 1,
                "created": "2021-08-04T16:54:46.369764-03:00",
                "modified": "2021-08-04T16:54:46.369787-03:00",
                "hostname": "WORKSTATION-1",
                "ip_address": "172.18.0.1",
                "risk": "10.00",
                "vuln_count": 25
            },
            {
                "id": 2,
                "created": "2021-08-04T16:54:46.380910-03:00",
                "modified": "2021-08-04T16:54:46.380927-03:00",
                "hostname": "WORKSTATION-2",
                "ip_address": "172.18.0.2",
                "risk": "10.00",
                "vuln_count": 29
            },
            {
                "id": 3,
                "created": "2021-08-04T16:54:46.386685-03:00",
                "modified": "2021-08-04T16:54:46.386701-03:00",
                "hostname": "WORKSTATION-3",
                "ip_address": "172.18.0.3",
                "risk": "10.00",
                "vuln_count": 31
            },
            {
                "id": 4,
                "created": "2021-08-04T16:54:46.408076-03:00",
                "modified": "2021-08-04T16:54:46.408092-03:00",
                "hostname": "WORKSTATION-4",
                "ip_address": "172.18.0.4",
                "risk": "9.80",
                "vuln_count": 116
            },
            {
                "id": 5,
                "created": "2021-08-04T16:54:46.448243-03:00",
                "modified": "2021-08-04T16:54:46.448260-03:00",
                "hostname": "WORKSTATION-5",
                "ip_address": "172.18.0.5",
                "risk": "10.00",
                "vuln_count": 36
            },
            {
                "id": 6,
                "created": "2021-08-04T16:54:46.455211-03:00",
                "modified": "2021-08-04T16:54:46.455227-03:00",
                "hostname": "SERVER-1",
                "ip_address": "172.20.0.1",
                "risk": "10.00",
                "vuln_count": 28
            },
            {
                "id": 7,
                "created": "2021-08-04T16:54:46.460880-03:00",
                "modified": "2021-08-04T16:54:46.460896-03:00",
                "hostname": "SERVER-2",
                "ip_address": "172.20.0.2",
                "risk": "9.80",
                "vuln_count": 24
            },
            {
                "id": 8,
                "created": "2021-08-04T16:54:46.481152-03:00",
                "modified": "2021-08-04T16:54:46.481169-03:00",
                "hostname": "WORKSTATION-6",
                "ip_address": "172.18.0.6",
                "risk": "6.50",
                "vuln_count": 4
            },
            {
                "id": 9,
                "created": "2021-08-04T16:54:46.488177-03:00",
                "modified": "2021-08-04T16:54:46.488193-03:00",
                "hostname": "WORKSTATION-7",
                "ip_address": "172.18.0.7",
                "risk": "8.80",
                "vuln_count": 14
            },
            {
                "id": 10,
                "created": "2021-08-04T16:54:46.526060-03:00",
                "modified": "2021-08-04T16:54:46.526076-03:00",
                "hostname": "WORKSTATION-8",
                "ip_address": "172.18.0.8",
                "risk": "10.00",
                "vuln_count": 26
            },
            {
                "id": 11,
                "created": "2021-08-04T16:54:46.544765-03:00",
                "modified": "2021-08-04T16:54:46.544782-03:00",
                "hostname": "SERVER-3",
                "ip_address": "172.20.0.3",
                "risk": "10.00",
                "vuln_count": 45
            },
            {
                "id": 12,
                "created": "2021-08-04T16:54:46.597229-03:00",
                "modified": "2021-08-04T16:54:46.597245-03:00",
                "hostname": "WORKSTATION-9",
                "ip_address": "172.18.0.9",
                "risk": "9.80",
                "vuln_count": 15
            },
            {
                "id": 13,
                "created": "2021-08-04T16:54:47.271857-03:00",
                "modified": "2021-08-04T16:54:47.271897-03:00",
                "hostname": "WORKSTATION-10",
                "ip_address": "172.18.0.10",
                "risk": "8.10",
                "vuln_count": 3
            },
            {
                "id": 14,
                "created": "2021-08-04T16:54:47.301384-03:00",
                "modified": "2021-08-04T16:54:47.301400-03:00",
                "hostname": "SERVER-4",
                "ip_address": "172.20.0.4",
                "risk": "10.00",
                "vuln_count": 16
            },
            {
                "id": 15,
                "created": "2021-08-04T16:54:47.640616-03:00",
                "modified": "2021-08-04T16:54:47.640631-03:00",
                "hostname": "WORKSTATION-11",
                "ip_address": "172.18.0.11",
                "risk": "9.80",
                "vuln_count": 3
            },
            {
                "id": 16,
                "created": "2021-08-04T16:54:47.903210-03:00",
                "modified": "2021-08-04T16:54:47.903226-03:00",
                "hostname": "WORKSTATION-12",
                "ip_address": "172.18.0.12",
                "risk": "7.50",
                "vuln_count": 7
            },
            {
                "id": 17,
                "created": "2021-08-04T16:54:47.935757-03:00",
                "modified": "2021-08-04T16:54:47.935773-03:00",
                "hostname": "WORKSTATION-13",
                "ip_address": "172.18.0.13",
                "risk": "6.50",
                "vuln_count": 2
            },
            {
                "id": 18,
                "created": "2021-08-04T16:54:47.941290-03:00",
                "modified": "2021-08-04T16:54:47.941306-03:00",
                "hostname": "SERVER-5",
                "ip_address": "172.20.0.5",
                "risk": "7.50",
                "vuln_count": 8
            },
            {
                "id": 19,
                "created": "2021-08-04T16:54:47.946936-03:00",
                "modified": "2021-08-04T16:54:47.946951-03:00",
                "hostname": "WORKSTATION-14",
                "ip_address": "172.18.0.14",
                "risk": "7.50",
                "vuln_count": 8
            },
            {
                "id": 20,
                "created": "2021-08-04T16:54:47.952584-03:00",
                "modified": "2021-08-04T16:54:47.952604-03:00",
                "hostname": "SERVER-6",
                "ip_address": "172.20.0.6",
                "risk": "6.50",
                "vuln_count": 8
            },
            {
                "id": 21,
                "created": "2021-08-04T16:54:47.958207-03:00",
                "modified": "2021-08-04T16:54:47.958222-03:00",
                "hostname": "SERVER-7",
                "ip_address": "172.20.0.7",
                "risk": "7.50",
                "vuln_count": 5
            },
            {
                "id": 22,
                "created": "2021-08-04T16:54:47.963775-03:00",
                "modified": "2021-08-04T16:54:47.963790-03:00",
                "hostname": "SERVER-8",
                "ip_address": "172.20.0.8",
                "risk": "7.50",
                "vuln_count": 11
            },
            {
                "id": 23,
                "created": "2021-08-04T16:54:47.986965-03:00",
                "modified": "2021-08-04T16:54:47.986981-03:00",
                "hostname": "WORKSTATION-15",
                "ip_address": "172.18.0.15",
                "risk": "6.50",
                "vuln_count": 2
            },
            {
                "id": 24,
                "created": "2021-08-04T16:54:47.996759-03:00",
                "modified": "2021-08-04T16:54:47.996774-03:00",
                "hostname": "SERVER-9",
                "ip_address": "172.20.0.9",
                "risk": "7.50",
                "vuln_count": 6
            },
            {
                "id": 25,
                "created": "2021-08-04T16:54:48.002432-03:00",
                "modified": "2021-08-04T16:54:48.002448-03:00",
                "hostname": "WORKSTATION-16",
                "ip_address": "172.18.0.16",
                "risk": "10.00",
                "vuln_count": 6
            },
            {
                "id": 26,
                "created": "2021-08-04T16:54:48.012207-03:00",
                "modified": "2021-08-04T16:54:48.012222-03:00",
                "hostname": "WORKSTATION-17",
                "ip_address": "172.18.0.17",
                "risk": "6.50",
                "vuln_count": 2
            },
            {
                "id": 27,
                "created": "2021-08-04T16:54:48.017826-03:00",
                "modified": "2021-08-04T16:54:48.017842-03:00",
                "hostname": "SERVER-10",
                "ip_address": "172.20.0.10",
                "risk": "7.50",
                "vuln_count": 4
            },
            {
                "id": 28,
                "created": "2021-08-04T16:54:48.023355-03:00",
                "modified": "2021-08-04T16:54:48.023371-03:00",
                "hostname": "WORKSTATION-18",
                "ip_address": "172.18.0.18",
                "risk": "6.50",
                "vuln_count": 4
            },
            {
                "id": 29,
                "created": "2021-08-04T16:54:48.208609-03:00",
                "modified": "2021-08-04T16:54:48.208625-03:00",
                "hostname": "WORKSTATION-19",
                "ip_address": "172.18.0.19",
                "risk": "7.50",
                "vuln_count": 5
            },
            {
                "id": 30,
                "created": "2021-08-04T16:54:48.720065-03:00",
                "modified": "2021-08-04T16:54:48.720081-03:00",
                "hostname": "WORKSTATION-20",
                "ip_address": "172.18.0.20",
                "risk": "2.60",
                "vuln_count": 1
            },
            {
                "id": 31,
                "created": "2021-08-04T16:54:48.725667-03:00",
                "modified": "2021-08-04T16:54:48.725682-03:00",
                "hostname": "WORKSTATION-21",
                "ip_address": "172.18.0.21",
                "risk": "2.60",
                "vuln_count": 1
            },
            {
                "id": 32,
                "created": "2021-08-04T16:54:48.752833-03:00",
                "modified": "2021-08-04T16:54:48.752849-03:00",
                "hostname": "SERVER-11",
                "ip_address": "172.20.0.11",
                "risk": "2.60",
                "vuln_count": 1
            },
            {
                "id": 33,
                "created": "2021-08-04T16:54:48.758415-03:00",
                "modified": "2021-08-04T16:54:48.758430-03:00",
                "hostname": "SERVER-12",
                "ip_address": "172.20.0.12",
                "risk": "2.60",
                "vuln_count": 1
            }
        ]
    }]
    
    const [data, setData] = useState(apiresponse)

    console.log(data[0])
    return (
        <Container>
            <TableComponent data={data}  />
        </Container>
    )

}

export default HostPage