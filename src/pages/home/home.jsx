import React, { Fragment, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Menu from '../../components/menu/menu'
import styles from './home.module.scss'
import sky from '../../assets/images/sky.jpg'
import street from '../../assets/images/street.jpg'
import hr_project_laptop from '../../assets/images/hr-desktop.png'
import self_serve_tablet from '../../assets/images/self-serve.png'

const HomePage = () => {
  const [ showFeatureImg, setShowFeatureImg] = useState(false)
  const [ workNumber, setWorkNumber ] = useState(1)

  function handleMouseOver(){
    setShowFeatureImg(true)
  }
  function handleMouseLeave(){
    setShowFeatureImg(false)
  }
  function handleOnScroll(){
    window.addEventListener('scroll', function() {
      if(window.pageYOffset > 700 && window.pageYOffset < 800){
        setWorkNumber(1)
      }
      
    })
  }
  return(
    <div onLoad={handleOnScroll}>
      <div className={styles.container}>
        <header>
          <Menu></Menu>
          <Link smooth to="#work" className={styles.non_menu_link}>Work</Link>
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
        <div id="work">
          <h2>Works</h2>
          <h3 className={styles.work__number}>0{workNumber}</h3>
          <div className={styles.work__container}>
            <img src={hr_project_laptop} alt="HR mentor project" className={styles.work__img1}/>
            <p className={styles.feature__right}></p>
          </div>
          <div className={styles.work__container}>
            <img src={self_serve_tablet} alt="Self-service portal redesign" className={styles.work__img2}/>
          </div>
        </div>
    </div>
  )
}
export default HomePage