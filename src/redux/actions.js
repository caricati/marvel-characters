import axios from 'axios'
import { FETCH_CHARACTER, FETCH_CHARACTER_SUCCESS } from './constantes'
import { api } from '../marvel'

const URI_GET_CHARACTERS = '/v1/public/characters'

export function fetchCharacters(filter = {}) {
  return dispatch => {
    const { params, URL } = api()
    const request = axios.get(`${URL}${URI_GET_CHARACTERS}`, {
      params: {
        ...params,
        ...filter,
      }
    })
    
    dispatch({ type: FETCH_CHARACTER })

    return request
      .then(response => dispatch(fetchCharactersSuccess(response.data.data)))
  }
}

export function fetchCharactersSuccess(characters) {
  return {
    type: FETCH_CHARACTER_SUCCESS,
    payload: characters,
  }
}