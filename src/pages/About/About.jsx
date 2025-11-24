import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import AboutHero from '../../components/AboutHero/AboutHero'
import AboutMission from '../../components/AboutMission/AboutMission'
import AboutJourney from '../../components/AboutJourney/AboutJourney'

const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutHero/>
      <AboutMission/>
      <AboutJourney/>
      <Footer/>
    </div>
  )
}

export default About
