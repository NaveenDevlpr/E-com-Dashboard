'use client'
import { RevenueContext } from '@/context/revenueContext'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Lines from '@/charts/LineChart/LineChart'
import BarChart from '@/charts/BarChart/BarChart'
import PieChart from '@/charts/PieChart/PieChart'
import { motion } from 'framer-motion'
import fadeIn from '@/lib/variant'

type Props = {}

const Page = (props: Props) => {

    const [rev,setRev]=useState({})

    const {statedata,regiondata,profitdata}=useContext(RevenueContext)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-6 gap-5 mt-5">
    <div className="lg:col-span-3 lg:row-span-6">
        <motion.div
        variants={fadeIn("left",0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.3}}
        className='flex flex-col items-center w-full bg-white rounded-md shadow-xl'>
            <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4 align-text-top'>Total Revenue By States</h2>
            <div className='h-[500px] w-full'>
                <Lines datas={statedata}/>
            </div>
        </motion.div>
    </div>
    <div className="lg:col-span-3 lg:row-span-3 lg:col-start-4">
        <motion.div 
        variants={fadeIn("up",0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.3}}
        className='flex flex-col items-center w-full bg-white rounded-md shadow-xl'>
            <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4 align-text-top'>Total Revenue By Regions</h2>
            <div className='lg:h-[200px] h-[400px] w-full'>
                <BarChart datas={regiondata}/>
            </div>
        </motion.div>
    </div>
    <div className="lg:col-span-3 lg:row-span-3 lg:col-start-4 lg:row-start-4 lg:mt-2">
    <motion.div
    variants={fadeIn("down",0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.3}}
     className='flex flex-col items-center w-full bg-white rounded-md shadow-xl'>
            <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4 align-text-top'>Total Profit By States</h2>
            <div className='lg:h-[200px] h-[400px] w-full'>
                <BarChart datas={profitdata}/>
            </div>
        </motion.div>
    </div>
</div>
  )
}

export default Page