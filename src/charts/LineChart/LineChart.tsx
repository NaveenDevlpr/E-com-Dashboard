import React, { FC } from 'react';
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
import { BarProps } from '@/types/types';
import Loader from '@/components/ui/Loader';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display:false,
      position: 'top' as const,
    },scales: {
      x: {
        grid: {
          display: false,
        },
        
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    
  },
  maintainAspectRatio: false
};





const Lines:FC<BarProps>=({datas})=> {


  const labels = datas.map((data)=>data.name)
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: datas.map((data)=>data.total_quantity),
        borderColor: '#cb0c9f',
        backgroundColor: '#f3edf2',
      },
    ],
  };
  return (
    <div className='' style={{width:'100%',height:'100%'}}>
       {
        data.datasets[0].data.length!==0 ? (
          <Line options={options} data={data} />
        ):
        (
       <Loader/>
        )
      }
    </div>
  );
}

export default Lines

