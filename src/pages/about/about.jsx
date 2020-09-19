import React from 'react'
import Menu from '../../components/menu/menu'
import styles from './about.module.scss'

const AboutPage = () => {
  return (
    <div className={styles.container}>
       <header>
          <Menu></Menu>
        </header>
        <h1>FRONT-END <br/>SOFTWARE<br/> DEVELOPER</h1>
    </div>
  )
}
export default AboutPage