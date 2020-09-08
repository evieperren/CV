import React from 'react'
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/work">Work</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </nav>
  )
}
export default Menu