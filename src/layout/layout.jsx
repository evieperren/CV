import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import AboutPage from '../pages/about/about'
import HomePage from '../pages/home/home'
import { MenuContext } from '../context/menu-context'
import LoadingPage from '../pages/loading/loading'
import Menu from '../components/menu/menu';
import { CurrentPageContext } from '../context/current-page'
import WorkPage from '../pages/work/work'

const Layout = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ currentPage, setCurrentPage ] = useState('')
  const [ displayAdditionalLink, setDisplayAdditionalLink ] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)

  }, [])

  if(currentPage === 'HOME'){
    setDisplayAdditionalLink(true)
  }
  return(
    <Fragment>
    <Router>
      <main>
          <Switch>
              {!isLoading ? (
                <Fragment>
                  <CurrentPageContext.Provider value={{currentPage, setCurrentPage}}>
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
                  </CurrentPageContext.Provider>
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