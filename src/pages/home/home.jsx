import React, { Fragment, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Menu from '../../components/menu/menu'
import styles from './home.module.scss'
import sky from '../../assets/images/sky.jpg'
import street from '../../assets/images/street.jpg'
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
            <img className={styles.img__top} src={sky}/>
            <span className={styles.img__reference}>Photo by 
              <a href="https://unsplash.com/@kevinmueller?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Kevin Mueller</a> on 
                <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash
              </a>
            </span>
          </Fragment>
        )}
        <h1 onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
          <span className={styles.float__left}>Evie</span>
          <span className={styles.float__right}>Perren</span>
        </h1>
        <p className={styles.feature__header}></p>
        {showFeatureImg && (
          <Fragment>
            <img className={styles.img__bottom} src={street} alt=""/>
            <span className={styles.img__reference}>Photo by 
              <a href="https://unsplash.com/@pelayoarbues?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Pelayo Arbués</a> on 
              <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
            </span>
          </Fragment>
        )}
      </div>
      <div className={styles.introduction}>
        <p>A self teaching software developer born and raised in England. With a focus on Front-end development, Evie is able to work individually and in a team to create a strong UI/UX written in clean code.
        <br/> With 2 years of experience, Evie has a passion for creating a product that exceeds the clients requirements with focus on accessibility.</p>
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