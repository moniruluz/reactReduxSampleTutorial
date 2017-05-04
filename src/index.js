import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import App from './App';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import User from './Components/User'
import SignupPage from './Components/Signup/SignupPage'
import './index.css';

const store = createStore(
  (state ={}) => state,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/user" component={User} />
        <Route path="/signup" component={SignupPage} />
      </Route>
    </Router>
</Provider>,
  document.getElementById('root')
);
