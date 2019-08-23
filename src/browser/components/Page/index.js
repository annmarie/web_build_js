// Paths
import React from "react"
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"
import Footer from '../Footer'
import Home from './Home'

const About = () => <h3>about page under construction</h3>

export default (props) => {
  return (
    <Router>
      <nav className="Nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about/">About</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route exact
          path="/"
          component={Home}
        />
        <Route exact
          path="/about/"
          component={About}
        />
        <Route
          render={() => <Redirect to='/' /> }
        />
      </Switch>

      <Footer />
    </Router>
  )
}

require('./style.scss')
