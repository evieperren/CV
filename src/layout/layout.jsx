import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from '../pages/about/about'
import HomePage from '../pages/home/home';
import ContactPage from '../pages/contact/contact';
import { MenuContext } from '../context/menu-context';

const Layout = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  return(
    <Fragment>
    <Router>
      <main>
          <Switch>
            <MenuContext.Provider value={{isMenuOpen, setIsMenuOpen}}>
              <Route exact path="/">
                <HomePage></HomePage>
              </Route>
              <Route path="/about">
                <AboutPage></AboutPage>
              </Route>
              <Route path="/contact">
                <ContactPage></ContactPage>
              </Route>
            </MenuContext.Provider>
          </Switch>
      </main>
      <footer></footer>
    </Router>
    </Fragment>
  )
}
export default Layout