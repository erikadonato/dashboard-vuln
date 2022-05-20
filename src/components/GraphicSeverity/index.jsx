import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { chartColors, ContainerChart } from "./styles";
import api from '../../services/api'


const GraphicSeverity = () => {
    const [dataAPI, setDataAPI] = useState([])
    const [labels, setLabels] = useState([])
    const [numbers, setNumbers] = useState([])

    ChartJS.register(ArcElement, Tooltip, Legend);

    useEffect(() => {
        api.get('/api/dashboard/charts/severity').then(response => setDataAPI(response.data))
    }, [])

    useEffect(() => {
      setNumbers(Object.values(dataAPI))
      setLabels(Object.keys(dataAPI))
    }, [dataAPI]) 
    
    const data = {
        maintainAspectRatio: false,
        labels: labels,
        datasets: [
          {
            data: numbers,
            backgroundColor: chartColors,
            hoverBackgroundColor: chartColors
          }
        ]
      };

    const options = {
        plugins: {
          legend: {
              display: true
          },
          tooltips: {
              enabled: true
          },
        }
    } 

    return (
        <ContainerChart>
            <Doughnut data={data} options={options} />
        </ContainerChart>
    )
}

export default GraphicSeverity;