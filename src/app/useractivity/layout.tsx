import NavBar from '@/components/Navbar/NavBar'
import React, { ReactNode } from 'react'

import RevenueContextProvider from '@/context/revenueContext'
type Props = {
  children:ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div className='p-6 w-full'>
      <NavBar title={'User Activity'}/>
        {children}
      </div>
  )
}

export default layout