import React, { Fragment, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Menu from '../../components/menu/menu'
import styles from './home.module.scss'
import image1 from '../../assets/images/banksy.jpg'
import image2 from '../../assets/images/busy-street.jpg'
import Carousel from '../../components/carousel/carousel'
import mountains from '../../assets/images/mountains.png.jpeg'

const HomePage = () => {
  const [ showFeatureImg, setShowFeatureImg] = useState(false)

  function handleMouseOver(){
    setShowFeatureImg(true)
  }
  function handleMouseLeave(){
    setShowFeatureImg(false)
  }
  return(
    <div>
      <div className={styles.container}>
        <header>
          <Menu></Menu>
          <Link smooth to="#work" className={styles.non_menu_link}>Works</Link>
        </header>
        {showFeatureImg && (
          <Fragment>
            <img className={styles.img__top} src={image1} alt="Photo by Nick Fewings on Unsplash"/>
          </Fragment>
        )}
        <h1 onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
          <span className={styles.float__left}>EVIE</span>
          <span className={styles.float__right}>PERREN</span>
        </h1>
        <p className={styles.feature__header}></p>
        {showFeatureImg && (
          <Fragment>
            <img className={styles.img__bottom} src={image2} alt="Photo by Ryoji Iwata on Unsplash"/>
          </Fragment>
        )}
      </div>
      <div className={styles.introduction}>
        <p>A self-taught Software Developer born and raised in England. With a focus on Front-End development, Evie is able to work individually and in a team to create a strong UI/UX written in clean code.
        </p>
      </div>
      <div className={styles.work}>
        <h2 id="work">Works</h2>
        <Carousel></Carousel>
      </div>
      <footer>
        <img src={mountains} alt="mountains" className={styles.footer}/>
      </footer>
    </div>
  )
}
export default HomePage