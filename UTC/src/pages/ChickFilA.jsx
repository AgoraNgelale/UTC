import React from 'react'
import NavBar from '../components/Navbar'
import { chickMenu } from '../constants'
const ChickFilA = () => {
  return (
    <div className='grid grid-cols-1 gap-20'>
       <div className='max-w-[1640px] mx-auto p-4'>
        <NavBar/>
       </div>
       <div className='text-center text-white flex-1 bg-red-600 
       grid grid-cols-1 gap-8 py-6'>
        <div className='text-center font-bold text-lg flex-1'>
         Menu
        </div>
        <div>
        {chickMenu.map((item)=>(
          <div key={item.label} className='py-4'>
            {item.label}
          </div>
        ))}
        </div>
       </div>
    </div>
   
  )
}

export default ChickFilA
