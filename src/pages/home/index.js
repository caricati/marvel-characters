import React, { Component } from 'react'
import axios from 'axios'
import { api } from '../../marvel'
import CharacterCard from '../../components/character-card'
import Button from '../../components/button'
import './home.css'

const URI_GET_CHARACTERS = '/v1/public/characters'

export default class Homepage extends Component {
  state = {
    characters: [],
  }

  async componentWillMount() {
    const { params, URL } = api()
    const res = await axios.get(`${URL}${URI_GET_CHARACTERS}`, { params })
    console.log({ res })
    const { results } = res.data.data
    this.setState({
      characters: results.map(char => ({
        id: char.id,
        name: char.name,
        image: `${char.thumbnail.path}/portrait_incredible.${char.thumbnail.extension}`,
      })),
    })
  }

  render() {
    const { characters } = this.state
    return (
      <section className="page-wrapper container">
        <header>
          <h1>Characters</h1>
          <Button to="/">Procuar</Button>
        </header>
        <div className="card-list">
          {characters.map(({ id, name, image }) => (
            <CharacterCard key={id} title={name} image={image} />
          ))}
        </div>
      </section>
    )
  }
}