import { FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS } from '../constantes'

const defaults = {
  count: 0,
  limit: 0,
  offset: 0,
  results: [],
  total: 0,
  loading: null,
}

export default (state = defaults, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        loading: true,
      }
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...action.payload,
        loading: false,
      }
    default:
      return state
  }
}
