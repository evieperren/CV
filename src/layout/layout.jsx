import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import AboutPage from '../pages/about/about'
import HomePage from '../pages/home/home'
import { MenuContext } from '../context/menu-context'
import LoadingPage from '../pages/loading/loading'
import Menu from '../components/menu/menu'
import './layout.scss'

import WorkPage from '../pages/work/work'
import { ThemeContext } from '../context/theme-context'

const Layout = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ theme, setTheme] = useState('LIGHT')
  const [ displayAdditionalLink, setDisplayAdditionalLink ] = useState(false)


  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)

  }, [])
  let currentTheme = theme
  switch(theme){
    case 'DARK':
      currentTheme = "dark"
      break
    default: 
      currentTheme = "light"
  }


  return(
    <Fragment>
    <Router>
      <main className={currentTheme}>
          <Switch>
            {!isLoading ? (
              <ThemeContext.Provider value={{theme, setTheme}}>
                <MenuContext.Provider value={{isMenuOpen, setIsMenuOpen}}>
                  <header>
                    <Menu></Menu>
                    {displayAdditionalLink && (
                      <Link smooth to="/work">Works</Link>
                    )}
                  </header>
                  <Route exact path="/">
                    <HomePage></HomePage>
                  </Route>
                  <Route path="/about">
                    <AboutPage></AboutPage>
                  </Route>
                  <Route path="/work">
                    <WorkPage></WorkPage>
                  </Route>
                </MenuContext.Provider>
              </ThemeContext.Provider>
              ):(
              <LoadingPage></LoadingPage>
              )}
          </Switch>
      </main>
    </Router>
    </Fragment>
  )
}
export default Layout