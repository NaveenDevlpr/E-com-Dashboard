import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ChartOptions, ChartType, ChartData,ChartDataset,ElementChartOptions,PluginChartOptions ,DatasetChartOptions,ScaleChartOptions,LineControllerChartOptions} from "chart.js"
import { FC } from 'react';
Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler);
import React from 'react';

interface TopData {
  product_name: string;
  total_sales: number;
}
interface Props{
    total:number[]
}

const SimpleLineChart:FC<Props>=({total})=> {
  
  const data = {
    labels: [''],
    datasets: [
      {
        label: 'Revenue',
        data: total,
        borderColor: '#cb0c9f',
        borderWidth: 3,
        tension: 0.5,
      },
    ],
  };

  
  const options:ChartOptions<'line'>= {
  
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      y: {
        grid: {
           
          display: false,
        },
        ticks: {
          display:false,
          font: {
            size:  14,
            weight: 'normal',
          },
        },
        title: {
          display: false,
          text: 'Sales',
          padding: {
            bottom: 10,
          },
          font: {
            size: 30,
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
          display:false,
          font: {
            size:  14,
            weight: 'normal',
          },
        },
        title: {
          display: false,
          text: 'Product',
          padding: {
            top: 0,
          },
          font: {
            size: 30,
            family: 'Montserrat',
          },
        },
      },
    },
    
  maintainAspectRatio: false
  };

  
  return (
      <div id="line-chart-container" 
     className='flex justify-center items-center' style={{width:'100%',height:'100%'}}>
           <Line 
        data={data} options={options} 
       
        style={{padding:'20px'}}
        />
    
      </div>
       
  );
}

export default SimpleLineChart;
