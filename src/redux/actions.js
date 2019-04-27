import axios from 'axios'
import {
  FETCH_CHARACTER,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
} from './constantes'
import { api } from '../marvel'

const URI_GET_CHARACTERS = '/v1/public/characters'

// FETCH ALL

export function fetchCharacters(filter = {}) {
  return dispatch => {
    const { params, URL } = api()
    const request = axios.get(`${URL}${URI_GET_CHARACTERS}`, {
      params: {
        ...params,
        ...filter,
      }
    })
    
    dispatch({ type: FETCH_CHARACTERS })

    return request
      .then(response => dispatch(fetchCharactersSuccess(response.data.data)))
  }
}

export function fetchCharactersSuccess(characters) {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters,
  }
}

// FETCH ONE

export function fetchCharacter(id) {
  return dispatch => {
    const { params, URL } = api()
    const request = axios.get(`${URL}${URI_GET_CHARACTERS}/${id}`, { params })
    
    dispatch({ type: FETCH_CHARACTER })

    return request
      .then(response => dispatch(fetchCharacterSuccess(response.data.data)))
  }
}

export function fetchCharacterSuccess(characters) {
  return {
    type: FETCH_CHARACTER_SUCCESS,
    payload: characters,
  }
}