import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ChartOptions, ChartType, ChartData,ChartDataset,ElementChartOptions,PluginChartOptions ,DatasetChartOptions,ScaleChartOptions,LineControllerChartOptions} from "chart.js"

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler);
import React from 'react';

interface TopData {
  product_name: string;
  total_sales: number;
}


function LineChart() {

  const [topData,setTopData]=useState([])

  useEffect(()=>{
    const getData=async()=>{
      const results=await axios.get('api/top_product')
      const data=results.data
      setTopData(data)
      console.log('repeat')
    }
    getData()
  },[])

  
  const data = {
    labels: (topData as TopData[]).map((data) => data.product_name),
    datasets: [
      {
        label:'' ,
        data: (topData as TopData[]).map((data) => data.total_sales),
        borderColor: '#cb0c9f',
        borderWidth: 3,
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
           <Line 
        data={data} options={options} 
       
        style={{padding:'20px'}}
        />
    
      </div>
       
  );
}

export default LineChart;
