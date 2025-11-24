import React from 'react'

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Technology from './pages/Tehnology/Technology';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';


const App = () => {
  return (
    <div>
       <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/technology" element={<Technology/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/careers" element={<Careers/>} />
          </Routes>
    </div>
  )
}

export default App
