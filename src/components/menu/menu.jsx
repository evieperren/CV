import React, { Fragment, useContext  } from 'react'
import { Link } from "react-router-dom"
import { MenuContext } from '../../context/menu-context'
import styles from './menu.module.scss'
import cx from 'classnames'

const Menu = () => {
  const {isMenuOpen, setIsMenuOpen } = useContext(MenuContext)

  function handleMenuClick(){
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <Fragment>
      { isMenuOpen ? (
        <nav className={styles.menu}>
          <button className={cx(styles.button, styles.close)} onClick={handleMenuClick} aria-label="close menu">Close</button>
          <li onClick={handleMenuClick}><Link to="/" className={styles.primary}>Home</Link></li>
          <li onClick={handleMenuClick}><Link to="/about" className={styles.secondary}>About</Link></li>
          <li onClick={handleMenuClick}><Link to="/work" className={styles.tertiary}>Work</Link></li>
        </nav>
      ): (
        <button className={styles.button} onClick={handleMenuClick} aria-label="open menu">Menu</button>
      )}
    </Fragment>
  )
}
export default Menu