import React, { useState } from 'react'
import './carousel.scss'
import hr_project_laptop from '../../assets/images/hr-desktop.png'
import self_serve_tablet from '../../assets/images/self-serve.png'
import pet_checkout_mobile from '../../assets/images/pets-checkout-mobile.png'
import pet_link_laptop from '../../assets/images/pets-link-generator.png'
import orange_laptop from '../../assets/images/orange.png'
import cs from 'classnames'

const Carousel = () => {
  const [ activeIndex, setActiveIndex ] = useState(0)
  // const [ progressStatus, setProgressStatus] = useState(0) /*TODO: make progress status dynamic */

  const slides = [
    {
      title: 'HR Mentor Project',
      image: hr_project_laptop,
      class: "laptop",
      progress: `_20`, 
      year: '2020'
    },
    {
      title: 'Pet Checkout',
      image: pet_checkout_mobile,
      class: "mobile",
      progress: `_40`,
      year: '2019'
    },
    {
      title: 'Link Generator',
      image: pet_link_laptop,
      class: "laptop",
      progress: `_60`,
      year: '2019'
    },
    {
      title: 'Self Service Redesign',
      image: self_serve_tablet,
      class: "tablet",
      progress: `_80`,
      year: '2019'
    },
    {
      title: 'Orange Driver Training Redesign',
      image: orange_laptop,
      class: "laptop",
      progress: `_100`,
      year: '2021'
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
    <div className="carousel">
      <h2 className="number">0{activeIndex + 1}</h2>
      <div className="container">
        <span className="scroll_left" aria-label="scroll left" onClick={goToPreviousSlide}></span>
        <ul className="slider">
          {slides.map((item, key) => 
            {return (
              <>
                {checkActiveIndex(key) && (
                  <>
                  <h3 class="heading">{item.title}</h3>
                  <li key={activeIndex}>
                    <a href="/" className="item">
                      <div className="feature_wrapper">
                        <div className="year_wrapper">
                          <p>{item.year}</p>
                          <span></span>
                        </div>
                        <img src={item.image} alt={item.title} className={item.class}/>
                      </div>
                    </a>
                    <div className="container">
                      <div>0{activeIndex + 1}</div>
                        <div className="progress_bar">
                          <div className={cs(item.progress, "bar")}></div>
                        </div>
                      <div>0{slides.length}</div>
                    </div>
                  </li>
                  </>
                  )}
              </>
            )
          })}
          </ul>
          <span className="scroll_right" aria-label="scroll right" onClick={goToNextSlide}></span>
      </div>
    </div>
  )
}
export default Carousel