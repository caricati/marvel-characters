import React, { Component } from 'react'
import { connect } from 'react-redux'
import CharacterList from '../../components/character-list'
import CharacterSearch from '../../components/character-search'
import { fetchCharacters } from '../../redux/actions'
import './home.css'

const initials = ['3', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

class Homepage extends Component {
  componentDidMount() {
    this.props.fetchCharacters()
  }

  fetchByInitial = (nameStartsWith) => {
    this.props.fetchCharacters({ nameStartsWith })
  }

  handleSearch = (e) => {
    e.preventDefault()
    const { value: name } = e.target['input-search-character']
    
    this.props.fetchCharacters({
      ...(name ? { name } : {}),
    })
  }

  render() {
    const { characters } = this.props
    return (
      <section id="homepage" className="page-wrapper container">
        <header>
          <h1>Characters</h1>
          <CharacterSearch onSubmit={this.handleSearch} />
        </header>
        <nav className="search-by-inicial">
          {initials.map(initial => (
            <button
              key={initial}
              onClick={() => this.fetchByInitial(initial)}
            >
              {initial}
            </button>
          ))}
        </nav>
        <CharacterList {...characters} />
      </section>
    )
  }
}

const mapStateToProps = ({ characters }) => ({
  characters,
})

export default connect(mapStateToProps, { fetchCharacters })(Homepage)
