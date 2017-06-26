import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './modules/components/layouts/app'
import Home from './modules/components/layouts/home'
import Products from './modules/components/containers/products'
render((
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route path="/home" component={Home}/>
      <Route path="/products" component={Products}/>
    </div>
  </Router>
), document.getElementById('root'))
