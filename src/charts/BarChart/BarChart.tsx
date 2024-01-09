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
  scales,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BarProps } from '@/types/types';
import Loader from '@/components/ui/Loader';


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
  scales:{
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display:true,
        font: {
          size:  14,
          weight: 'normal',
        },
      },
      title: {
        display: true,
        text: 'Sales',
        padding: {
          bottom: 5,
        },
        font: {
          size: 20,
          family: 'Montserrat',
        },
      },
      min: 50,
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display:true,
        font: {
          size:  14,
          weight: 'normal',
        },
      },
      title: {
        display: true,
        text: 'Place',
        padding: {
          top: 5,
        },
        font: {
          size: 20,
          family: 'Montserrat',
        },
      },
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
 return(<div className='flex justify-center items-center' style={{width:'100%',height:'100%'}}>
    {
        data.datasets[0].data.length!==0 ? (
            <Bar options={options} data={data} />
          ):
          (
         <Loader/>
          )
    }
 </div>)
}


export default BarChart

