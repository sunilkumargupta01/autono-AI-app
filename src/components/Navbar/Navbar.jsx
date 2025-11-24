import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
      <nav>
        <h1><Link to= '/'>AUTONO</Link></h1>
         <GiHamburgerMenu  className='hamburger' onClick={()=> setOpen(!open)}/>
        <ul className={open? "open" : ""}>
            <li><Link to='/technology'>Technology</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/careers'>Careers</Link></li>
            <li ><a href="#subscribe"><button className='nav-button'>Subscribe</button></a></li>
        </ul>
      </nav>
  )
}

export default Navbar
