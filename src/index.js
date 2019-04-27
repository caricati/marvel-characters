import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './redux/store'
import MainTemplate from './templates/main-template'

import * as serviceWorker from './serviceWorker'
import './reset.css'

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <MainTemplate />
    </Router>
  </Provider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
