import React from 'react'
import { services } from '../constants'

const Services = () => {
  return (
    <div className='border  m-auto px-4 py-12 bg-yellow-400'>
        {/* copy */}
        <h1 className='text-xl text-center pt-4 pb-2 font-bold text-white'>
            Shopping
        </h1>
      <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-2 gap-12'>
        {services.map((item)=>(
             <a key={item.label} href= {item.href} 
             className='rounded-xl relative transform scale-100 hover:scale-110 transition-transform 
             duration-300 ease-in-out' target='_blank' rel='noreferrer'>
               {/* Overlay */}
               <div className='absolute w-full h-full bg-black/10 rounded-xl text-white '>
                 <p className='font-bold text-2xl px-2 pt-4'>{item.label}</p>
             </div>
             <img className='max-h[160px] md:max-h-[400px] w-full object-cover rounded-xl'
             src={item.image} 
             alt='/'
             />
             </a>
        ))}
      </div>
    </div>
  )
}

export default Services
