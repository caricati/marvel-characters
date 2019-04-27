import { FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER } from '../constantes'

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
    case FETCH_CHARACTER:
      return {
        ...state,
        loading: true,
      }
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...action.payload,
        loading: false,
      }
    default:
      return state
  }
}
