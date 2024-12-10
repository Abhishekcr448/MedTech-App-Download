import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="*" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))