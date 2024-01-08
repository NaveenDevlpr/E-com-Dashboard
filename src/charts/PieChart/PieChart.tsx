import { Pie} from 'react-chartjs-2';
import { FC, useEffect,useState } from 'react';
import axios from 'axios';
import { ChartOptions } from 'chart.js';
import '../../app/globals.css'
import { Doughnut } from 'react-chartjs-2';

import {
    Chart,
    ArcElement,
    Legend,
    Tooltip,
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    PieController,
  } from 'chart.js';
import { pieData, pieProps } from '@/types/types';
import Loader from '@/components/ui/Loader';
  
 
  Chart.register(
    ArcElement,Tooltip,Legend, CategoryScale,
    LinearScale,
    PointElement,
    PieController
  )
  
const PieChart:FC<pieProps>=({piedata})=> {

    
  const data = {
    labels: (piedata).map((data) => data.name),
    datasets: [
      {
        label: '',
        data: (piedata).map((data) => data.total_quantity),
        backgroundColor: [
          '#cb0c9f',
          '#f797e1',
          '#e7cbe1',
          // Add more colors as needed
        ],
      },
    ],
  };


  const options: ChartOptions<'pie'> = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        title: {
            display: true,
            font: {
              size:12,
            },
          },
      },
    },
    responsive: true,
    layout: {
        padding: {
          left: 0, 
          right: 0, 
        },
    },
    maintainAspectRatio: false
  };
  return (
    <div id="pie-chart-container"
    className='max-md:p-2 flex justify-center items-center'style={{width: '100%', height: '100%'}}>
      {
        data.datasets[0].data.length!==0 ? (
          <Doughnut data={data} />
        ):
        (
       <Loader/>
        )
      }
    </div>
  );
}

export default PieChart;
