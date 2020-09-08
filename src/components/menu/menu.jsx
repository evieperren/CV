import React, { Fragment, useContext  } from 'react'
import { Link } from "react-router-dom"
import { MenuContext } from '../../context/menu-context'
import styles from './menu.module.scss'
const Menu = () => {
  const {isMenuOpen, setIsMenuOpen } = useContext(MenuContext)

  function handleMenuClick(){
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <Fragment>
      <button onClick={handleMenuClick}aria-label="open menu">Menu</button>
      { isMenuOpen && (
        <Fragment>
        <nav className={styles.menu}>
         <button onClick={handleMenuClick} aria-label="close menu">X</button>
          <li onClick={handleMenuClick}><Link to="/">Home</Link></li>
          <li onClick={handleMenuClick}><Link to="/about">About</Link></li>
          <li onClick={handleMenuClick}><Link to="/work">Work</Link></li>
          <li onClick={handleMenuClick}><Link to="/contact">Contact</Link></li>
        </nav>
        </Fragment>
      )}
    </Fragment>
  )
}
export default Menu