import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import About from '../pages/About'
import FAQs from '../pages/FAQs'
import Home from '../pages/Home'
import Services from '../pages/Services'
 

const Navbar = () => {
  return (
    <nav>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/about">ABOUT</Link>
      </li>
      <li>
        <Link to="/services">SERVICES</Link>
      </li>
      <li>
        <Link to="/faqs">FAQS</Link>
      </li>
  </nav>
  )
}

export default Navbar
