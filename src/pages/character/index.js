import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import { fetchCharacter } from '../../redux/actions'
import Button from '../../components/button'
import './character.css'

class CharacterPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(fetchCharacter(id))
  }

  render() {
    const { character } = this.props
    
    if (character.loading || character.loading === null) {
      return <p>Loading...</p>
    }

    const {
      name: profileName,
      thumbnail,
      series,
      stories,
    } = character.results[0]

    return (
      <section id="character-page" className="container">
        <nav className="character-page-navbar">
          <Button to="/">Voltar</Button>
        </nav>
        <div className="character-page-wraper">
          <header>
            <figure>
              <img src={`${thumbnail.path}/detail.${thumbnail.extension}`} alt={profileName} />
            </figure>
          </header>
          <div className="charater-details">
            <h1>{profileName}</h1>
            <h2>Séries</h2>
            <ul>
              {series.items.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            
            <h2>Histórias</h2>
            <ul>
              {stories.items.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ character }) => ({
  character,
})

export default connect(mapStateToProps)(CharacterPage)
