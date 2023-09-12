import  { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
  } from 'chart.js';
import Spacer from './Spacer';
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const barCol ='#1F1E2C'
const hoverBarCol ='#0177FB'
const Activities = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
      });
    
      const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        setChartData({
          labels: [
            '10 Oct',
            '12 Oct',
            '14 Oct',
            '16 Oct',
            '18 Oct',
            '20 Oct',
            '22 Oct',
            '24 Oct',
          ],
          datasets: [
            {
              label: 'dataset',
              data: [
                0, 10, 60, 20, 5, 0
              ],
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: barCol,
              borderRadius: 0,
              barThickness: 40,
              hoverBackgroundColor: hoverBarCol,
              barPercentage: 1,
            },
          ],
        });
        setChartOptions({
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
            },
          },
          scales: {
            y: {
              display: true,
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        });
      }, []);
  return (
    <div className='bg-dark-200 p-4 rounded-lg '>
        <div>
            <p className='text-light-100'>Activities</p>
        </div>
        <Spacer marginVertical='mb-10'/>
          <Bar options={chartOptions} data={chartData} />
    </div>
  )
}

export default Activities