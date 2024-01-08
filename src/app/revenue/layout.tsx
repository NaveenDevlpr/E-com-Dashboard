import NavBar from '@/components/Navbar/NavBar'
import React, { ReactNode } from 'react'

import RevenueContextProvider from '@/context/revenueContext'
type Props = {
  children:ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div className='p-6 w-full'>
      <NavBar title={'Revenue'}/>
      <RevenueContextProvider>
        {children}
      </RevenueContextProvider>
      </div>
  )
}

export default layout