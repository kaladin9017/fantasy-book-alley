import {
  SELECT_BOOK
} from '../actions/types'

const initialState = {
    title: "Wheel of Time",
    author: "Robert Jordan",
    description: "",
    image:"http://lytherus.com/wp-content/uploads/2012/05/Memory-of-Light_WoT_Michael-Whelan.jpg"
};


export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_BOOK:
      return action.payload
    default:
      return state;
  }
}
