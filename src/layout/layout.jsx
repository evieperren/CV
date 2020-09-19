import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AboutPage from '../pages/about/about'
import HomePage from '../pages/home/home'
import { MenuContext } from '../context/menu-context'
import LoadingPage from '../pages/loading/loading'

const Layout = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)

  }, [])
  return(
    <Fragment>
    <Router>
      <main>
          <Switch>
              {!isLoading ? (
                <Fragment>
                  <MenuContext.Provider value={{isMenuOpen, setIsMenuOpen}}>
                    <Route exact path="/">
                      <HomePage></HomePage>
                    </Route>
                    <Route path="/about">
                      <AboutPage></AboutPage>
                    </Route>
                  </MenuContext.Provider>
                </Fragment>
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