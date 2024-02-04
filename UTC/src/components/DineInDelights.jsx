import React from 'react'
import { DineIn } from '../constants'
const DineInDelights = () => {
  return (
    <div className='border m-auto px-4 py-12 bg-red-400'>
      <h1 className='text-center font-bold text-xl text-white'>Dine In Delights</h1>
      <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-12'>
      
      {DineIn.map((item)=>(
        // CARD
        <div key={item.label} className='rounded-xl relative 
        transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/10 rounded-xl text-white '>
            <p className='font-bold text-2xl px-2 pt-4'>{item.label}</p>
        </div>
        <img className='max-h[160px] md:max-h-[400px] w-full object-cover rounded-xl'
        src={item.image} 
        alt='/'
        />
        </div>
      ))}
    </div>
    </div>
  )
}

export default DineInDelights
