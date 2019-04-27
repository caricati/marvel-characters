import { FETCH_CHARACTER_SUCCESS } from '../constantes'

const defaults = {
  count: 0,
  limit: 0,
  offset: 0,
  results: [],
  total: 0,
}

export default (state = defaults, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_SUCCESS:
      return action.payload
    default:
      return state
  }
}
