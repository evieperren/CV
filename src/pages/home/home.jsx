import React, { useEffect, useContext } from 'react'
import { CurrentPageContext } from '../../context/current-page'
import { ThemeContext } from '../../context/theme-context'
import styles from './home.module.scss'

const HomePage = () => {
  const { setTheme } = useContext(ThemeContext)

  function handleLightClick(){
    setTheme('LIGHT')
  }
  function handleDarkClick(){
    setTheme('DARK')
  }

  return(
    <div>
      <div className={styles.container}>
        <h1>
          <span className={styles.float__left}>EVIE</span>
          <span className={styles.float__right}>PERREN</span>
        </h1>
        <p className={styles.feature__header}></p>
        <button onClick={handleLightClick}>Light</button>
        <button onClick={handleDarkClick}>Dark</button>
      </div>
    </div>
  )
}
export default HomePage