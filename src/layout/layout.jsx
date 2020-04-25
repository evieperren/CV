import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from '../pages/about/about'
import HomePage from '../pages/home/home';

const Layout = () => {
  return(
    <Fragment>
    <Router>
      <header>
        <nav>
          <li><Link to="/about">About </Link></li>
          <li><Link to="/home">Home </Link></li>
        </nav>
      </header>
      <main>
          <Switch>
            <Route path="/about">
              <AboutPage></AboutPage>
            </Route>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
          </Switch>
      </main>
      <footer></footer>
    </Router>
    </Fragment>
  )
}
export default Layout