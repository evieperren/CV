import React, { useState, useLayoutEffect } from 'react'
import Menu from '../../components/menu/menu'
import styles from './about.module.scss'

const AboutPage = () => {
  const [year, setYear] = useState(2018)

  useLayoutEffect(() => {
    const onScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
     if(scrollPosition >= 2000) { 
        setYear(2019)
       } else {
         setYear(2018)
       }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    
  }, [])
  return (
    <div className={styles.container}>
       <header>
          <Menu></Menu>
        </header>
        <h1 className={styles.title}>
          <span>FRONT-END</span>
          <span>SOFTWARE</span>
          <span>DEVELOPER</span>
        </h1>
        <p className={styles.feature}></p>
        <main className={styles.grid}>
          <div>
            <h2>
              {year} <br/>
              2020
            </h2>
          </div>
          <div className={styles.content}>
            <p><strong className={styles.heading}>Evie</strong> is a Front-End Software Developer born and raised in Hampshire, UK. With a passion for UI/UX, Evie has learnt to develop unique and highly functional systems from requirements. </p>
            <p>Since 2018, Evie has been building her skills in her free time as well as working full time as a developer at a health insurance company.</p>
            <p>In 2019, Evie started an apprenticeship with FireBrand, recieving a Level 4 Software Developer accreditation.</p>
            <p>With 2 years of experience, Evie has a passion for creating a product that exceeds the clients requirements with focus on accessibility.</p>
            <h3>Accreditations</h3>
            <ul>
              <li>Level 4 Software Developer Diploma</li>
              <li>Udemy Courses</li>
            </ul>
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:evie.butland@gmail.com">Email</a></li>
              <li><a href="tel:07720764111">Phone</a></li>
              <li><a href="www.linkedin.com/in/evie-butland-432a33170">LinkedIn</a></li>
            </ul>
          </div>
        </main>
    </div>
  )
}
export default AboutPage