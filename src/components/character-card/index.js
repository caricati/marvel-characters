import React from 'react'
import Button from '../button'
import './character-card.css'

export default ({ title, image }) => (
  <article className="character-card">
    <div className="inner-card">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <h2>{title}</h2>
      <footer>
        <Button to="/">
          ver detalhes
        </Button>
      </footer>
    </div>
  </article>
)