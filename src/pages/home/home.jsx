import React, { useEffect, useContext } from 'react'
import { CurrentPageContext } from '../../context/current-page'
import styles from './home.module.scss'

const HomePage = () => {
  const { setCurrentPage } = useContext(CurrentPageContext)

  useEffect(() => {
    setCurrentPage('HOME')
  }, [])

  return(
    <div>
      <div className={styles.container}>
        <h1>
          <span className={styles.float__left}>EVIE</span>
          <span className={styles.float__right}>PERREN</span>
        </h1>
        <p className={styles.feature__header}></p>
        <button>Light</button>
        <button>Dark</button>
      </div>
    </div>
  )
}
export default HomePage