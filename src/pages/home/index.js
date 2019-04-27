import React, { Component } from 'react'
import { connect } from 'react-redux'
import CharacterCard from '../../components/character-card'
import Button from '../../components/button'
import { fetchCharacters } from '../../redux/actions'
import './home.css'

class Homepage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCharacters())
  }

  render() {
    const { characters: { results } } = this.props
    return (
      <section className="page-wrapper container">
        <header>
          <h1>Characters</h1>
          <Button to="/">Procuar</Button>
        </header>
        <div className="card-list">
          {results.map(({ id, name, thumbnail }) => (
            <CharacterCard
              key={id}
              title={name}
              image={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}
            />
          ))}
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ characters }) => ({
  characters,
})

export default connect(mapStateToProps)(Homepage)
