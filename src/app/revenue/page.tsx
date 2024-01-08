'use client'
import { RevenueContext } from '@/context/revenueContext'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Lines from '@/charts/LineChart/LineChart'
import BarChart from '@/charts/BarChart/BarChart'
import PieChart from '@/charts/PieChart/PieChart'


type Props = {}

const Page = (props: Props) => {

    const [rev,setRev]=useState({})

    const {statedata,regiondata,profitdata}=useContext(RevenueContext)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-6 gap-4 mt-5">
    <div className="lg:col-span-3 lg:row-span-6">
        <div className='flex flex-col items-center w-full bg-white rounded-md shadow-xl'>
            <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4 align-text-top'>Total Revenue By States</h2>
            <div className='h-[500px] w-full'>
                <Lines datas={statedata}/>
            </div>
        </div>
    </div>
    <div className="lg:col-span-3 lg:row-span-3 lg:col-start-4">
        <div className='flex flex-col items-center w-full bg-white rounded-md shadow-xl'>
            <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4 align-text-top'>Total Revenue By Regions</h2>
            <div className='h-[200px] w-full'>
                <BarChart datas={regiondata}/>
            </div>
        </div>
    </div>
    <div className="lg:col-span-3 lg:row-span-3 lg:col-start-4 lg:row-start-4">
    <div className='flex flex-col items-center w-full bg-white rounded-md shadow-xl'>
            <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4 align-text-top'>Total Profit By States</h2>
            <div className='h-[200px] w-full'>
                <BarChart datas={profitdata}/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Page