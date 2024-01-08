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
    cityData: sales[];
    regionData: sales[];
    category: sales[];
  };
  
  const initialContextValues: ContextProps = {
    statedata: [],
    cityData: [],
    regionData: [],
    category: [],
  };
  export const Context=createContext(initialContextValues)

  export function useMyContext(){
    return React.useContext(Context)
  };
const ContextProvider:FC<Props> = ({children}) => {

    
    const [statedata,setStateData]=useState<sales[]>([])
    const [cityData,setCityData]=useState<sales[]>([])
    const [regionData,setRegionData]=useState<sales[]>([])
    const [category,setCategory]=useState<sales[]>([])

    useEffect(()=>{
        const getData=async()=>{
            const data=await axios.get('api/sales')
            const res=data.data

            setStateData(res.formattedResultState)
            setCityData(res.formattedResultCity)
            setRegionData(res.formattedResultRegion)
            setCategory(res.formattedResultCategory)
        }
        getData()
    },[])
  return (
    <Context.Provider value={{statedata,cityData,regionData,category}}>
        {
            children
        }
    </Context.Provider>
  )
}

export default ContextProvider

