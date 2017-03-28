import {
  ADD_BOOK,
  REMOVE_BOOK
} from '../actions/types'

const initialState = [];


export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:

      return state.indexOf(action.payload) === -1 ? state.concat(action.payload) : state;
    case REMOVE_BOOK:
      return null
    default:
      return state;
  }
}
