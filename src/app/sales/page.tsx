'use client'
import BarChart from '@/charts/BarChart/BarChart'
import PieChart from '@/charts/PieChart/PieChart'
import ContextProvider, { Context, useMyContext } from '@/context/context'
import React from 'react'
import { useContext } from 'react'
type Props = {}


const Page = (props: Props) => {
  
const {category,cityData,regionData,statedata}=useContext(Context)
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mt-5">
      <div className="mb-4 w-full flex items-center flex-col justify-between bg-white rounded-md shadow-xl">
          <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4 align-text-top'>Total Sales By States</h2>
          <div className='h-[400px] w-full'>
            <BarChart datas={regionData}/>
          </div>
      </div>
      
      <div className="mb-4 w-full flex items-center justify-center flex-col bg-white rounded-md shadow-xl">
          <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4'>Total Sales By States</h2>
          <div className='h-[400px] w-full'>
            <PieChart piedata={cityData}/>
          </div>
      </div>
      <div className="lg:col-span-2">
      <div className="mb-4 w-full flex items-center flex-col justify-center bg-white rounded-md shadow-xl">
          <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4 align-text-top'>Total Sales By Region</h2>
          <div className='h-[400px] w-full'>
            <BarChart datas={statedata}/>
          </div>
      </div>
      </div>
      <div className="mb-4 w-full flex items-center flex-col justify-between bg-white rounded-md shadow-xl">
          <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4 align-text-top'>Total Sales By Category</h2>
          <div className='h-[400px] w-full'>
            <PieChart piedata={category}/>
          </div>
      </div>
      <div className="mb-4 w-full flex items-center flex-col justify-between bg-white rounded-md shadow-xl">
          <h2 className='lg:text-2xl sm:text-xl text-black font-semibold my-4 align-text-top'>Total Sales By States</h2>
          <div className='h-[400px] w-full'>
            <BarChart datas={cityData}/>
          </div>
      </div>
    </div>
  )
}

export default Page