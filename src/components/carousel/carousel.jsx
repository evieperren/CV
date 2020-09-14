import React, { useState } from 'react'
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
      class: styles.work__img1,
    },
    {
      title: 'Pet Checkout',
      image: pet_checkout_mobile,
      class: styles.work__img1
    },
    {
      title: 'Self Service Portal Redesign',
      image: self_serve_tablet,
      class: styles.work__img1
    },
    {
      title: 'Link Generator',
      image: pet_link_laptop,
      class: styles.work__img2
    }
  ]
  function goToPreviousSlide(){
    if(activeIndex < 1){
      setActiveIndex(slides.length)
    } else (
      setActiveIndex(activeIndex - 1)
    )
  }
  function goToNextSlide(){
    if(activeIndex < slides.length){
      setActiveIndex(activeIndex + 1)
    } 
    else (
      setActiveIndex(0)
    )
  }
  function checkActiveIndex (key){
    if(activeIndex === key) {
      return true 
    }

  }
  console.log(`active index: ${activeIndex}`)
  return (
    <div className={styles.slider}>
      <div className={styles.items}>
        <span className={styles.scroll_left} aria-label="scroll left" onClick={goToPreviousSlide}></span>
        <div className={styles.item}>
          <ul>
            {slides.map((item, key) => 
              { return (
                <li key={key} className={checkActiveIndex(key) ? styles.active : styles.not_active }>
                  <a href="/">
                    <p>{item.title}</p> 
                    <img src={item.image} alt={item.title} className={styles.work__img1}/>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <span className={styles.scroll_right} aria-label="scroll right" onClick={goToNextSlide}></span>
      </div>
    </div>
  )
}
export default Carousel