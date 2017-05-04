import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import User from './Components/User'

export default(
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/user" component={User} />
  </Route>
)
