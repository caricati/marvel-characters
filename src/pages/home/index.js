import React, { Component } from 'react'
import { connect } from 'react-redux'
import CharacterList from '../../components/character-list'
import CharacterSearch from '../../components/character-search'
import { fetchCharacters } from '../../redux/actions'
import './home.css'

class Homepage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCharacters())
  }

  handleSearch = (e) => {
    e.preventDefault()
    const { value: name } = e.target['input-search-character']

    return this.props.dispatch(fetchCharacters({
      ...(name ? { name } : {}),
    }))
  }

  render() {
    const { characters } = this.props
    return (
      <section id="homepage" className="page-wrapper container">
        <header>
          <h1>Characters</h1>
          <CharacterSearch onSubmit={this.handleSearch} />
        </header>
        <CharacterList {...characters} />
      </section>
    )
  }
}

const mapStateToProps = ({ characters }) => ({
  characters,
})

export default connect(mapStateToProps)(Homepage)
