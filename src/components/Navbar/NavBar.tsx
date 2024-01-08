import React, { FC } from 'react'

interface Props  {
  title:string
}

const NavBar:FC<Props> = ({title}) => {
  return (
   <div className='text-4xl text-black font-semibold flex items-center justify-between'>
    {title}
    <div>
      {
        title==='Overview'?(
          <div>
            Hello
          </div>
        ):''
      }
    </div>
   </div>
  )
}

export default NavBar