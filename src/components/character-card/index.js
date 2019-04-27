import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button'
import './character-card.css'

export default function CharacterCard({ id, title, image }) {
  return (
    <article className="character-card">
      <div className="inner-card">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <h2>{title}</h2>
        <footer>
          <Button to={`/character/${id}`}>
            ver detalhes
          </Button>
        </footer>
      </div>
    </article>
  )
}

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
