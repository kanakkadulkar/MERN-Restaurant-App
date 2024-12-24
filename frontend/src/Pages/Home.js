import React from 'react'
import HeroSection from '../component/HeroSection'
import About from '../component/About'
import Menu from '../component/Menu'
import Reservation from '../component/Reservation'
import Footer from '../component/Footer'
import TiffinAndOrders from '../component/TiffinAndOrders'
import Social from '../component/Social'
import Reviews from '../component/Reviews'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Menu/>
      <TiffinAndOrders/>
      <Reviews/>
      <Reservation/>
      <Social/>
      <Footer/>
    </>
  )
}

export default Home
