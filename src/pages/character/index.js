import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Button from '../../components/button'
import './character.css'

export default class CharacterPage extends Component {
  render() {
    return (
      <section id="character-page" className="container">
        <nav className="character-page-navbar">
          <Button to="/">Voltar</Button>
        </nav>
        <div className="character-page-wraper">
          <header>
            <figure>
              <img src="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/detail.jpg" alt="" />
            </figure>
          </header>
          <div className="charater-details">
            <h1>char name</h1>
            <h2>Lorem ipsum dolor sit</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, similique?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, similique?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, similique?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, similique?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, similique?</li>
            </ul>
            
            <h2>Lorem ipsum dolor sit</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, similique?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, similique?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, similique?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, similique?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, similique?</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
