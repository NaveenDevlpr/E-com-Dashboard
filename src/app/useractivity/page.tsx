'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import fadeIn from '@/lib/variant'
import axios from 'axios'
import SimpleLineChart from '@/charts/AreaChart/simpleArea'
type Props = {}

const UserActivity = (props: Props) => {

    const [sales,setSales]=useState([])
    const [order,setOrder]=useState([])
    useEffect(()=>{
        const getData=async()=>{
            const data=await axios.get('api/useractivity')
            const res=data.data

            setSales(res.totalSales)
            setOrder(res.totalOrder)
        }
        getData()
    },[])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-4 mt-5">
        <motion.div 
        variants={fadeIn("down",0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.3}}
        className="lg:col-span-3 lg:row-span-2 p-4 bg-white rounded-md shadow-xl">
             <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4 text-center'>Total Sales By Customer type</h2>
            <div className='h-[500px] w-full'>
                <SimpleLineChart datas={sales}/>
            </div>
        </motion.div>
        <motion.div
        variants={fadeIn("left",0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.3}}
        className="lg:col-span-3 lg:row-span-2 lg:row-start-3 bg-white rounded-md p-4 shadow-xl">
            <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4 text-center'>Total Order By Shipping type</h2>
            <div className='h-[500px] w-full'>
                <SimpleLineChart datas={order}/>
            </div>
        </motion.div>
</div>
  )
}

export default UserActivity