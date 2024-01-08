import React, { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BarProps } from '@/types/types';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options= {
  responsive: true,
  plugins: {
    legend: {
        display: false,
      position: 'top' as const,
    },
    
  },
  maintainAspectRatio: false
};



const BarChart:FC<BarProps>=({datas})=>{

const labels=datas.map((data)=>data.name)

const data = {
  labels,
  datasets: [
    {
      label: '',
      data:datas.map((data)=>data.total_quantity),
      backgroundColor: '#cb0c9f',
    },
    
  ],
};
 return(<div className='w-full h-full'>
    <Bar options={options} data={data} />
 </div>)
}


export default BarChart