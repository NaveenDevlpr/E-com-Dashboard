'use client'
/*import LineChart from '@/charts/AreaChart/TopFiveBarChart'
import PieChart from '@/charts/PieChart/PieChart'
import NavBar from '@/components/Navbar/NavBar'
import Card from '@/components/ui/Card'*/
import { card, pieData } from '@/types/types'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import fadeIn from '@/lib/variant'


import dynamic from 'next/dynamic';
const LineChart = dynamic(() => import('@/charts/AreaChart/TopFiveBarChart'),{
  loading: () => <p>Loading...</p>
});
const PieChart = dynamic(() => import('@/charts/PieChart/PieChart'));
const NavBar = dynamic(() => import('@/components/Navbar/NavBar'));
const Card = dynamic(() => import('@/components/ui/Card'));

export default function Overview() {
const [sales,setSales]=useState<number>(0)
const [profit,setProfit]=useState<number>(0)
const [profitMargin,setProfitMargin]=useState<number>(0)
const [order,setOrder]=useState<number>(0)

const [stateSales,setStateSales]=useState([])
const [stateProfit,setStateProfit]=useState([])

  useEffect(()=>{
  
   getData()

   getPieData()
  },[])

  const getData=async()=>{
   // const data=await axios.get('api/summary')
    //const res=data.data
   try {
    const data=await fetch('api/summary')
    const res=await data.json()
    console.log(res)
    setSales(res.totalSales)
    setProfit(res.totalProfit)
    setOrder(res.totalOrder)
    setProfitMargin(res.profitMargin)
   } catch (error) {
    console.log(error)
   }
   }


  const getPieData=async()=>{
    const data=await axios.get('api/pieData')
    const result=data.data
    setStateSales(result.formattedResultSales)
    setStateProfit(result.formattedResultProfit)
  }

 

  
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
        <motion.div
         variants={fadeIn("up",0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.3}}
        className='mt-5 flex lg:flex-row flex-col'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-4 md:gap-6 flex-1 md:mr-4 xl:mr-6">
            {
              values.map((val,index)=>(
               
                 <motion.div
                  
                variants={fadeIn("up",0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.3}}
                 key={val.id} >
                  <Card indicator={val.name} value={val.value}/>
                 </motion.div>
               
              ))
            }
          </div>
        </motion.div>
        <div className="grid max-lg:grid-cols-1 grid-cols-2 grid-rows-1 gap-4 mt-5">
          <motion.div
           variants={fadeIn("right",0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false,amount:0.3}}
          className="flex flex-col items-center justify-center bg-white rounded-md shadow-xl">
          <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4'>Top 3 Sales by Region</h2>
              <div className='h-[400px] w-full'>
              <PieChart piedata={stateSales}/>
              </div>
          </motion.div>
          <motion.div 
           variants={fadeIn("left",0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false,amount:0.3}}
          className="flex flex-col items-center justify-between bg-white rounded-md shadow-xl">
          <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4'>Top 5 Profit by Region</h2>
                <div className='h-[400px] w-full'>
                <PieChart piedata={stateProfit}/>
                </div>
            </motion.div>
          <motion.div 
          variants={fadeIn("left",0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.3}}
          className="lg:col-span-2 row-start-1 items-center justify-between p-4 bg-white rounded-md shadow-xl ">
            <h2 className='lg:text-2xl sm:text-xl text-center text-black font-semibold'>Top 5 Sales</h2>
            <div className='w-full h-[500px] '>
            <LineChart/>
            </div>
          </motion.div>
        </div>
        
    </div>
  )
}
