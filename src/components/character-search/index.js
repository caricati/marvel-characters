import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
          <form onSubmit={this.props.onSubmit}>
            <input
              type="search"
              name="input-search-character"
              placeholder="Precione 'Enter' para buscar"
            />
          </form>
        )}
      </div>
    )
  }
}

CharacterSearch.defaultProps = {
  onSubmit: () => {},
}

CharacterSearch.propTypes = {
  onSubmit: PropTypes.func,
}
