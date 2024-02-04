import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Hero from './components/Hero'
import Services from './components/Services'
import FastFoodFavs from './components/FastFoodFavs'
import DineInDelights from './components/DineInDelights'


function App() {
  return (
    <main className='relative'>
      <Navbar/>
      <section className="xl:padding-l
      wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className='padding'>
        <Services/>
      </section>
      <section className='padding'>
      <FastFoodFavs/>
      </section>
      <section className='padding'>
        <DineInDelights/>
      </section>
      <section className='padding text-white
      padding-x padding-t pb-8 bg-black'>
        footer
      </section>
    </main>
  )
}

export default App
