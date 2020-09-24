import React, { Fragment, useContext  } from 'react'
import { Link } from "react-router-dom"
import { MenuContext } from '../../context/menu-context'
import './menu.scss'
import cx from 'classnames'

const Menu = () => {
  const {isMenuOpen, setIsMenuOpen } = useContext(MenuContext)

  function handleMenuClick(){
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <Fragment>
      { isMenuOpen ? (
        <nav className="menu">
          <button className="button button__close" onClick={handleMenuClick} aria-label="close menu">Close</button>
          <li onClick={handleMenuClick}><Link to="/" className="primary">Home</Link></li>
          <li onClick={handleMenuClick}><Link to="/about" className="secondary">About</Link></li>
          <li onClick={handleMenuClick}><Link to="/work" className="tertiary">Work</Link></li>
        </nav>
      ): (
        <button className="button" onClick={handleMenuClick} aria-label="open menu">Menu</button>
      )}
    </Fragment>
  )
}
export default Menu