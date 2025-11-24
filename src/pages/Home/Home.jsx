import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import HomeHero from '../../components/HomeHero/HomeHero'
import HomeVision from '../../components/HomeVision/HomeVision'
import HomeTime from '../../components/HomeTime/HomeTime'
import HomeApproach from '../../components/HomeApproach/HomeApproach'
import HomeNumber from '../../components/HomeNumber/HomeNumber'
import HomeIndustry from '../../components/HomeIndustry/HomeIndustry'
import HomeCareers from '../../components/HomeCareers/HomeCareers'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <HomeHero/>
      <HomeVision/>
      <HomeTime/>
      <HomeApproach/>
      <HomeNumber/>
      <HomeIndustry/>
      <HomeCareers/>
      <Footer/>
    </div>
  )
}

export default Home
