import React, { Component } from 'react'
import Button from '../button'
import './character-search.css'

export default class CharacterSearch extends Component {
  state = { active: false }

  render() {
    const { active } = this.state
    return (
      <div className="character-search">
        <Button
          onClick={() => this.setState({ active: !active })}
        >
          Procurar
        </Button>
        
        {active && (
          <form>
            <input type="search" placeholder="Precione 'Enter' para buscar" />
          </form>
        )}
      </div>
    )
  }

}