import React from 'react'


type Props = {}

const Settings = (props: Props) => {
  return (
    <div 
    
    className='flex flex-col items-center space-y-4 mt-5' style={{width:'100%',height:'100%'}}>
        <h2 
        className='text-black text-3xl font-semibold'>Naveen Kumar</h2>
        <p className='lg:text-xl text:lg text-black font-medium text-center'>
        I'm a Next.js Full Stack Developer, proficient in HTML, CSS, JavaScript & React.js. Specialized in utilizing Tailwind CSS for
        responsive design and SQL for data management.
        </p>
    </div>
  )
}

export default Settings