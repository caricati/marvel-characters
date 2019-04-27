import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/header'
import './main-template.css'

import Homepage from '../pages/home'
import CharacterPage from '../pages/character'


export default () => (
  <div id="marvel">
    <Header />

    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/character/:id" component={CharacterPage} />
    </Switch>
  </div>
)
