import React, { FC } from 'react'

interface Props  {
  title:string
}

const NavBar:FC<Props> = ({title}) => {
  return (
   <div className='text-4xl text-black font-semibold'>
    {title}
   </div>
  )
}

export default NavBar