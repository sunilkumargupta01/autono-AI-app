import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import CareerHero from '../../components/CareerHome/CareerHero'
import CareerLocation from '../../components/CareerLocation/CareerLocation'
import HomeCareers from '../../components/HomeCareers/HomeCareers'

const Careers = () => {
  return (
    <div>
      <Navbar/>
      <CareerHero/>
      <CareerLocation/>
      <HomeCareers/>
      <Footer/>
    </div>
  )
}

export default Careers
