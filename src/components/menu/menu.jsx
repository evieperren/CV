import React, { Fragment } from 'react'
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <Fragment>
      <p>Menu</p>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </nav>
    </Fragment>
  )
}
export default Menu