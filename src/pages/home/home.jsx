import React, { Fragment, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Menu from '../../components/menu/menu'
import styles from './home.module.scss'
import sky from '../../assets/images/sky.jpg'
import street from '../../assets/images/street.jpg'

const HomePage = () => {
  const [ showFeatureImg, setShowFeatureImg] = useState(false)

  function handleMouseOver(){
    setShowFeatureImg(true)
  }
  function handleMouseLeave(){
    setShowFeatureImg(false)

  }
  return(
    <Fragment>
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
        <p className={styles.feature__bottom}></p>
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
          <p>This should be a filler white space for work here </p>
        </div>
    </Fragment>
  )
}
export default HomePage