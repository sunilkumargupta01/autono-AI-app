import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import TechnologyHero from '../../components/TechnologyHero/TechnologyHero'
import TechCar from '../../components/TechCar/TechCar'
import TechProduct from '../../components/TechProduct/TechProduct'

const Technology = () => {
  return (
    <div>
        <Navbar/>
        <TechnologyHero/>
        <TechCar/>
        <TechProduct/>
      <Footer/>
    </div>
  )
}

export default Technology
