import React, { useContext } from 'react'
import { ThemeContext } from '../../context/theme-context'
import './home.scss'

const HomePage = () => {
  const { setTheme } = useContext(ThemeContext)

  function handleLightClick(){
    setTheme('LIGHT')
  }
  function handleDarkClick(){
    setTheme('DARK')
  }

  return(
    <div className="home container">
      <h1>
        <span className="float__left">EVIE</span>
        <span className="float__right">PERREN</span>
      </h1>
      <p className="feature__header"></p>
      <div className="feature__buttons">
        <div id="light">
          <button onClick={handleLightClick}>Light</button>
        </div>
        <div id="dark">
          <button onClick={handleDarkClick}>Dark</button>
        </div>
      </div>
    </div>
  )
}
export default HomePage