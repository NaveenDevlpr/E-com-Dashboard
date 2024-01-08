import SimpleLineChart from '@/charts/AreaChart/simpleArea'
import React, { FC } from 'react'
interface Props {
    indicator:string,
    value:number,
   
}

const Card:FC<Props>= ({indicator,value}) => {
  return (
    <div className='bg-white relative max-md:w-full w-[250px] h-[120px] rounded-md shadow-lg flex items-center border-[#cb0c9f] border-[2px] transition-transform duration-300 transform hover:scale-110 cursor-pointer'>
        <div className='flex flex-col items-start space-y-2 px-4 w-3/5'>
            <h2 className='text-gray-700 opacity-45 text-[14px]'>{indicator}</h2>
            {
                value===0?(
                    <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                      >Loading...</span>
                  </div>
                ):(
                    <h2 className='text-black text-2xl font-medium '>
                        {
                        indicator==='Total Sales'?(
                            `${value}M`
                        ):(value)
                    }
                    
                    </h2>
                )
            }
          
        </div>
        <div className='w-2/5 h-full'>

        </div>
    </div>
  )
}

export default Card