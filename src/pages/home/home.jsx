import React from 'react'
import { Link } from "react-router-dom"
import Menu from '../../components/menu/menu'
import styles from './home.module.scss'

const HomePage = () => {
  return(
      <div className={styles.container}>
      <header>
        <Menu></Menu>
        <Link to="/work" className={styles.non_menu_link}>Work</Link>
      </header>
        <h1><span className={styles.float__left}>EVIE</span><span className={styles.float__right}>PERREN</span></h1>
        <p>Evie is a software developer, focusing on front-end development</p>
      </div>
  )
}
export default HomePage