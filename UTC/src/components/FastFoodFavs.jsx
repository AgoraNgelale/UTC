import React from 'react'
import { FastFoods } from '../constants'

const FastFoodFavs = () => {
  
  return (
    <div className='border m-auto px-4 py-12 bg-blue-400'>
      <h1 className='text-center font-bold text-xl text-white'>Fast Food Faves</h1>
      <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      
      {FastFoods.map((item)=>(
        // CARD
        <div key={item.label} className='rounded-xl relative'>
          {/* Overlay */}
        <div className='absolute w-full h-full bg-black/35 rounded-xl text-white '>
            <p className='font-bold text-2xl px-2 pt-4'>{item.label}</p>
            <a className='border-white bg-white text-black absolute mx-2 bottom-4 hover:text-white hover:bg-orange-600 
            hover:scale-105 duration-300 rounded-full p-2' href={item.href}>
              Order Now
            </a>
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

export default FastFoodFavs
