import { useState, useEffect } from 'react'
import api from '../../services/api'
import { chartColors,ContainerChart} from '../GraphicSeverity/styles'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  
  const GraphicTopAsset = () => {

    const [dataAPI, setDataAPI] = useState([])
    const [labels, setLabels] = useState([])
    const [numbers, setNumbers] = useState([])

    useEffect(() => {
      api.get('/api/dashboard/charts/top-assets').then(response => setDataAPI(response.data))
    }, [])

    useEffect(() => {
      dataAPI.map((item) => {
        Object.keys(item).map((label) => {
          labels.push(label)
        })
        Object.values(item).map((number) => {
            numbers.push(number)
        })
      })
    },[dataAPI])
    
    const options = {
      maintainAspectRatio: false,
      plugins: {
          legend: {
              display: false,
            },
      },
    };
    
  
    const data = {
      labels,
      datasets: [
        {
          data: numbers,
          backgroundColor: chartColors,
          hoverBackgroundColor: chartColors,
          height: '10vh'
        },
      ],
    };

    return (
        <ContainerChart>
        <Line options={options} data={data} />
        </ContainerChart>
    )
}

export default GraphicTopAsset;