import React from 'react'
import { useState } from 'react'
import Menu from '../../components/menu/menu'
import styles from './about.module.scss'

const AboutPage = () => {
  const [year, setYear] = useState(2019)

  function handleScroll(){
    console.log('scrolling')
  }
  return (
    <div className={styles.container} onScroll={handleScroll}>
       <header>
          <Menu></Menu>
        </header>
        <h1 className={styles.title}>
          <span>FRONT-END</span>
          <span>SOFTWARE</span>
          <span>DEVELOPER</span>
        </h1>
        <main className={styles.grid}>
          <div>
            <h2>{year}</h2>
            <h2>2020</h2>
          </div>
          <div>
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
          </div>
        </main>
    </div>
  )
}
export default AboutPage