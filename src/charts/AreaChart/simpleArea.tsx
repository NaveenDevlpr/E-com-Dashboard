import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ChartOptions, ChartType, ChartData,ChartDataset,ElementChartOptions,PluginChartOptions ,DatasetChartOptions,ScaleChartOptions,LineControllerChartOptions} from "chart.js"
import { FC } from 'react';
Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler);
import React from 'react';
import { BarProps } from '@/types/types';
import Loader from '@/components/ui/Loader';

interface TopData {
  product_name: string;
  total_sales: number;
}


const SimpleLineChart:FC<BarProps>=({datas})=> {
  
  const data = {
    labels: datas.map((data)=>data.name),
    datasets: [
      {
        label: '',
        data: datas.map((data)=>data.total_quantity),
        borderColor: '#cb0c9f',
        pointBorderColor: '#cb0c9f',
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context:any) => {
          const ctx = context.chart.ctx as CanvasRenderingContext2D;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, '#f797e1');
          gradient.addColorStop(1, '#f3edf2');
          return gradient;
        },
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
          display:true,
          font: {
            size:  14,
            weight: 'normal',
          },
        },
        title: {
          display: false,
          text: 'Total',
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
          display:true,
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
           {
        data.datasets[0].data.length!==0 ? (
          <Line 
          data={data} options={options} />
        ):
        (
          <Loader/>
        )
      }
    
      </div>
       
  );
}

export default SimpleLineChart;
