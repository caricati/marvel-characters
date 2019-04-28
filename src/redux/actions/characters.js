import axios from 'axios'
import { api } from '../../marvel'
import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  URI_GET_CHARACTERS,
} from '../constantes'

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
