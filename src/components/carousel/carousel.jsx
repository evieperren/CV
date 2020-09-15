import React, { useState, Fragment } from 'react'
import styles from './carousel.module.scss'
import hr_project_laptop from '../../assets/images/hr-desktop.png'
import self_serve_tablet from '../../assets/images/self-serve.png'
import pet_checkout_mobile from '../../assets/images/pets-checkout-mobile.png'
import pet_link_laptop from '../../assets/images/pets-link-generator.png'

const Carousel = () => {
  const [ activeIndex, setActiveIndex ] = useState(0)

  const slides = [
    {
      title: 'HR Mentor Project',
      image: hr_project_laptop,
      class: styles.laptop,
      progress: styles._25, 
      year: '2020'
    },
    {
      title: 'Pet Checkout',
      image: pet_checkout_mobile,
      class: styles.mobile,
      progress: styles._50,
      year: '2019'
    },
    {
      title: 'Link Generator',
      image: pet_link_laptop,
      class: styles.laptop,
      progress: styles._75,
      year: '2019'
    },
    {
      title: 'Self Service Portal Redesign',
      image: self_serve_tablet,
      class: styles.tablet,
      progress: styles._100,
      year: '2019'
    }
  ]

  function goToPreviousSlide(){
    if(activeIndex === 0){
      setActiveIndex(slides.length - 1)
    } else (
      setActiveIndex(activeIndex - 1)
    )
  }
  function goToNextSlide(){
    if(activeIndex < slides.length - 1){
      setActiveIndex(activeIndex + 1)
    } 
    else (
      setActiveIndex(0)
    )
  }
  function checkActiveIndex (key){
    if(activeIndex === key) return true 
  }
  return (
    <Fragment>
      <h3 className={styles.number}>0{activeIndex + 1}</h3>
      <div className={styles.container}>
        <span className={styles.scroll_left} aria-label="scroll left" onClick={goToPreviousSlide}></span>
        <ul className={styles.slider}>
          {slides.map((item, key) => 
            {return (
              <Fragment>
                {checkActiveIndex(key) && (
                  <li key={activeIndex}>
                    <a href="/" className={styles.item}>
                      <h4 className={styles.title}>{item.title}</h4> 
                      <div className={styles.feature_wrapper}>
                        <div className={styles.year_wrapper}>
                          <p>{item.year}</p>
                          <div></div>
                        </div>
                        <img src={item.image} alt={item.title} className={item.class}/>
                      </div>
                    </a>
                    <div className={styles.container}>
                      <div>0{activeIndex + 1}</div>
                        <div className={styles.progress_bar}>
                          <div className={item.progress}></div>
                        </div>
                      <div>0{slides.length}</div>
                    </div>
                  </li>
                  )}
              </Fragment>
            )
          })}
          </ul>
          <span className={styles.scroll_right} aria-label="scroll right" onClick={goToNextSlide}></span>
      </div>
    </Fragment>
  )
}
export default Carousel