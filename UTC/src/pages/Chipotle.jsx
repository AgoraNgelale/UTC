import React from 'react'
import { chickMenu } from '../constants'
import NavBar from '../components/Navbar'
const Chipotle = () => {
  return (
    <div className='grid grid-cols-1 gap-20'>
       <div className='max-w-[1640px] mx-auto p-4'>
        <NavBar/>
       </div>
       <div className='text-center text-white flex-1 bg-olive 
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

export default Chipotle
