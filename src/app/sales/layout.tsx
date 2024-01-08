import NavBar from '@/components/Navbar/NavBar'
import React, { ReactNode } from 'react'
import ContextProvider from '@/context/context'
type Props = {
  children:ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div className='p-6 w-full'>
      <NavBar title={'Sales'}/>
      <ContextProvider>
        {children}
      </ContextProvider>
      </div>
  )
}

export default layout