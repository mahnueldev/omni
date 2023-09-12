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

const Statistics = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
      });
    
      const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        setChartData({
          labels: [
            '2017',
            '2018',
            '2019',
            '2020',
            '2021',
            '2022',
          ],
          datasets: [
            {
              label: 'dataset',
              data: [
                200, 450, 778, 645, 601, 467
              ],
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: barCol,
              borderRadius: 0,
              barThickness: 20,
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
    <div className='bg-dark-200 p-4 rounded-lg w-92'>
        <div>
            <p className='text-light-100'>Statistics</p>
        </div>
        <Spacer marginVertical='mb-10'/>
          <Bar options={chartOptions} data={chartData} />
    </div>
  )
}

export default Statistics