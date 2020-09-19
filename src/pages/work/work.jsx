import React, { useEffect, useContext } from 'react'
import { CurrentPageContext } from '../../context/current-page'
import Carousel from '../../components/carousel/carousel'
import styles from './work.module.scss'

const WorkPage = () => {
  const { setCurrentPage } = useContext(CurrentPageContext)

  useEffect(() => {
    // setCurrentPage('WORK')
  })
  return (
    <main className={styles.work}>
      <h2>Works</h2>
      <Carousel></Carousel>
    </main>
  )
}
export default WorkPage