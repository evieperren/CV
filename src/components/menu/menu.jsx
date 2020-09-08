import React, { Fragment, useContext  } from 'react'
import { Link } from "react-router-dom"
import { MenuContext } from '../../context/menu-context'

const Menu = () => {
  const {isMenuOpen, setIsMenuOpen } = useContext(MenuContext)

  function handleMenuClick(){
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <Fragment>
      <button onClick={handleMenuClick}>Menu</button>
      { isMenuOpen && (
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </nav>
      )}
    </Fragment>
  )
}
export default Menu