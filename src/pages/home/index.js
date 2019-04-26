import React from 'react'
import CharacterCard from '../../components/character-card'
import Button from '../../components/button'
import './home.css'

export default () => (
  <div id="marvel">
    <header id="header">
      <img src="https://i.annihil.us/u/prod/misc/marvel.svg" alt="Marvel" />
    </header>

    <section className="page-wrapper container">
      <header>
        <h1>Marvel</h1>
        <Button to="/">Criar personagem</Button>
      </header>

      <div className="card-list">
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
    </section>
  </div>
)