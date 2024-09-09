import React from 'react'
import Hero from './../components/Hero'
import Show from '../components/Show'
import Services from './../components/Services'
import Collections from '../components/Collections'
import PerfumeBrandsSlider from '../components/PerfumeBrandsSlider'
import Footer from '../components/Footer'
import '../index.css'

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <Show />
      <Services />
      <Collections />
      <PerfumeBrandsSlider />
    </div>
  )
}

export default Home
