import { useState } from 'react'
import NavBar from '../components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FastFoodFavs from '../components/FastFoodFavs'
import DineInDelights from '../components/DineInDelights'


function Home() {
  return (
    <main className='relative'>
      <div className='max-w-[1640px] mx-auto p-4'>
      <NavBar/>
      </div>
      <section className="xl:padding-l
      wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className='padding'>
      <FastFoodFavs/>
      </section>
      <section className='padding'>
        <DineInDelights/>
      </section>
      <section className='padding'>
        <Services/>
      </section>
      <section className='padding text-white
      padding-x padding-t pb-8 bg-black'>
        footer
      </section>
    </main>
  )
}

export default Home