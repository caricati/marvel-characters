import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCharacter } from '../../redux/actions'
import Button from '../../components/button'
import Modal from '../../components/modal'
import './character.css'

class CharacterPage extends Component {
  state = { modalOpen: false }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchCharacter(id)
  }

  render() {
    const { character } = this.props
    
    if (character.loading || character.loading === null) {
      return <p>Loading...</p>
    }

    const { modalOpen } = this.state

    const {
      name: profileName,
      thumbnail,
      series,
      stories,
      description,
    } = character.results[0]

    return (
      <section id="character-page" className="container">
        <nav className="character-page-navbar">
          <Button to="/">Voltar</Button>
          <Button
            onClick={() => this.setState({ modalOpen: !modalOpen })}
          >
            Alterar descrição
          </Button>
        </nav>
        <div className="character-page-wraper">
          <header>
            <figure>
              <img src={`${thumbnail.path}/detail.${thumbnail.extension}`} alt={profileName} />
            </figure>
          </header>
          <div className="charater-details">
            <h1>{profileName}</h1>

            {description && <p>{description}</p>}

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

        <Modal id="modal-update-character" open={modalOpen}>
          <header className="modal-header">
            <h2>Alterar descrição</h2>
          </header>
          <div className="modal-context">
            <p>Descrição:</p>
            <textarea />
          </div>
          <footer className="modal-footer">
            <Button>Salvar</Button>
            <Button
              onClick={() => this.setState({ modalOpen: false })}
            >
              Cancelar
            </Button>
          </footer>
        </Modal>
      </section>
    )
  }
}

const mapStateToProps = ({ character }) => ({
  character,
})

export default connect(mapStateToProps, { fetchCharacter })(CharacterPage)
