import React from 'react'
import PropTypes from 'prop-types'
import CharacterCard from '../character-card'
import './character-list.css'

export default function CharacterList({ results, loading, count }) {
  
  if (loading) {
    return <p className="character-list message-list">Carregando...</p>
  }

  if (count === 0) {
    return <p className="character-list message-list">Nenhum personagem encontrado</p>
  }

  return (
    <div className="character-list card-list">
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

CharacterList.defaultProps = {
  results: [],
  loading: false,
  count: null,
}

CharacterList.propTypes = {
  count: PropTypes.number,
  loading: PropTypes.bool,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        extension: PropTypes.string,
      }),
    }),
  ),
}
