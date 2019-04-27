import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/button'
import CharacterCard from '../../components/character-card'
import CharacterSearch from '../../components/character-search'
import { fetchCharacters } from '../../redux/actions'
import './home.css'

class Homepage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCharacters())
  }

  render() {
    const { characters: { results, loading } } = this.props
    return (
      <section id="homepage" className="page-wrapper container">
        <header>
          <h1>Characters</h1>
          <CharacterSearch />
        </header>
        {
          loading
            ? <p className="loading">Carregando...</p>
            : (
              <div className="card-list">
                {results.map(({ id, name, thumbnail }) => (
                  <CharacterCard
                    key={id}
                    title={name}
                    image={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}
                  />
                ))}
              </div>
            )
        }
      </section>
    )
  }
}

const mapStateToProps = ({ characters }) => ({
  characters,
})

export default connect(mapStateToProps)(Homepage)
