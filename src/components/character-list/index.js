import React from 'react'
import PropTypes from 'prop-types'
import CharacterCard from '../character-card'
import './character-list.css'

export default function CharacterList ({ results, loading }) {
  if (loading) {
    return <p className="character-list loading">Carregando...</p>
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
}

CharacterList.propTypes = {
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
