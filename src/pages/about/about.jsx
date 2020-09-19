import React, { Fragment } from 'react'
import Menu from '../../components/menu/menu'
import styles from './about.module.scss'

const AboutPage = () => {
  return (
    <div className={styles.container}>
       <header>
          <Menu></Menu>
        </header>
        <p>About me</p>
    </div>
  )
}
export default AboutPage