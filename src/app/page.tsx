'use client'
import LineChart from '@/charts/AreaChart/TopFiveBarChart'
import PieChart from '@/charts/PieChart/PieChart'
import NavBar from '@/components/Navbar/NavBar'
import Card from '@/components/ui/Card'
import { card, pieData } from '@/types/types'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
const [sales,setSales]=useState<number>(0)
const [profit,setProfit]=useState<number>(0)
const [profitMargin,setProfitMargin]=useState<number>(0)
const [order,setOrder]=useState<number>(0)



  useEffect(()=>{
   const getData=async()=>{
    const data=await axios.get('api/summary')
    const res=data.data
    setSales(res.totalSales)
    setProfit(res.totalProfit)
    setOrder(res.totalOrder)
    setProfitMargin(res.profitMargin)
   }
   getData()
  },[])


const [stateSales,setStateSales]=useState([])
const [stateProfit,setStateProfit]=useState([])
  useEffect(()=>{
    const getPieData=async()=>{
      const data=await axios.get('api/pieData')
      const result=data.data
      setStateSales(result.formattedResultSales)
      setStateProfit(result.formattedResultProfit)
    }
    getPieData()
  })

  
  const values:card[]=[
    {
      id:1,
      name:'Total Sales',
      value:sales,
      
  },
  {
    id:2,
    name:'Total Profit',
    value:profit,
   
  },
  {
    id:3,
    name:'Total Order',
    value:order,
   
  },
  {
    id:4,
    name:'Margin Profit',
    value:profitMargin,
   
  },

]
 
  return (
    <div className='flex flex-col px-5'>
        <NavBar title={'Overview'}/>
        <div className='mt-5 flex lg:flex-row flex-col'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-4 md:gap-6 flex-1 md:mr-4 xl:mr-6">
            {
              values.map((val,index)=>(
               
                 <Card key={val.id} indicator={val.name} value={val.value}/>
               
              ))
            }
          </div>
        </div>
        <div className="grid max-lg:grid-cols-1 grid-cols-2 grid-rows-1 gap-4 mt-5">
          <div className="flex flex-col items-center justify-center bg-white rounded-md shadow-xl">
          <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4'>Top 3 Sales by Region</h2>
              <div className='h-[400px] w-full'>
              <PieChart piedata={stateSales}/>
              </div>
          </div>
          <div className="flex flex-col items-center justify-between bg-white rounded-md shadow-xl">
          <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4'>Top 5 Profit by Region</h2>
                <div className='h-[400px] w-full'>
                <PieChart piedata={stateProfit}/>
                </div>
            </div>
          <div className="lg:col-span-2 row-start-1 items-center justify-between p-4 bg-white rounded-md shadow-xl ">
            <h2 className='lg:text-2xl sm:text-xl text-center text-black font-semibold'>Top 5 Sales</h2>
            <div className='w-full sm:h-[250px] md:h-[300px] lg:h-[500px] '>
            <LineChart/>
            </div>
          </div>
        </div>
        
    </div>
  )
}
