import axios from 'axios'
import store from '../store'
import { getLocalCharacters, updateLocalCharacter } from '../../storage'
import {
  URI_GET_CHARACTERS,
  FETCH_CHARACTER,
  FETCH_CHARACTER_SUCCESS,
  UPDATE_CHARACTER,
} from '../constantes'
import { api } from '../../marvel'

export function fetchCharacter(id) {
  return dispatch => {
    const { params, URL } = api()
    const request = axios.get(`${URL}${URI_GET_CHARACTERS}/${id}`, { params })

    dispatch({ type: FETCH_CHARACTER })

    return request
      .then(response => dispatch(fetchCharacterSuccess(response.data.data)))
  }
}

export function fetchCharacterSuccess(character) {
  const localChars = getLocalCharacters()
  const localChar = localChars.find(({ id }) => id === character.results[0].id)

  if (localChar) {
    character.results[0].description = localChar.description;
  }

  return {
    type: FETCH_CHARACTER_SUCCESS,
    payload: character,
  }
}

export function updateCharacterDescription(character) {
  return dispatch => {
    updateLocalCharacter(character)
    dispatch({ type: UPDATE_CHARACTER })
    dispatch(fetchCharacterSuccess(store.getState().character))
  }
}
