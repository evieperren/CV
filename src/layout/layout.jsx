import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from '../pages/about/about'
import HomePage from '../pages/home/home';
import Menu from '../components/menu/menu'
import ContactPage from '../pages/contact/contact';
import WorkPage from '../pages/work/work';

const Layout = () => {
  return(
    <Fragment>
    <Router>
      <header>
        <Menu></Menu>
      </header>
      <main>
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="/about">
              <AboutPage></AboutPage>
            </Route>
            <Route path="/contact">
              <ContactPage></ContactPage>
            </Route>
            <Route path="/work">
              <WorkPage></WorkPage>
            </Route>
          </Switch>
      </main>
      <footer></footer>
    </Router>
    </Fragment>
  )
}
export default Layout