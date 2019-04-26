import React from 'react'
import Button from '../button'
import './character-card.css'

export default () => (
  <article className="character-card">
    <div className="inner-card">
      <figure>
        <img />
      </figure>
      <h2>Name x</h2>
      <footer>
        <Button to="/">
          ver detalhes
        </Button>
      </footer>
    </div>
  </article>
)