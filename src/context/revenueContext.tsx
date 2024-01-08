'use client'

import { sales } from '@/types/types'
import axios from 'axios'
import React, { FC, ReactNode, useEffect } from 'react'
import { createContext,useContext ,useState} from 'react'
type Props = {
    children:ReactNode
}

type ContextProps = {
    statedata: sales[];
    regiondata:sales[]
    profitdata:sales[]
    
  };
  
  const initialContextValues: ContextProps = {
    statedata: [],
    regiondata:[],
    profitdata:[]

  };
  export const RevenueContext=createContext(initialContextValues)

  export function useMyContext(){
    return React.useContext(RevenueContext)
  };
const RevenueContextProvider:FC<Props> = ({children}) => {

    
    const [statedata,setStateData]=useState<sales[]>([])
    const [regiondata,setRegionData]=useState<sales[]>([])
    const [profitdata,setProfitData]=useState<sales[]>([])

    useEffect(()=>{
        const getData=async()=>{
            const data=await axios.get('api/revenue')
            const res=data.data

            setStateData(res.resultState)
            setRegionData(res.resultRegion)
            setProfitData(res.resultProfit)
          
        }
        getData()
    },[])
  return (
    <RevenueContext.Provider value={{statedata,regiondata,profitdata}}>
        {
            children
        }
    </RevenueContext.Provider>
  )
}

export default RevenueContextProvider

