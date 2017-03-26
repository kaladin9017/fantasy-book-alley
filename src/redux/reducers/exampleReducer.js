import epicFantasy from '../../seed/epic-fantasy';
import lowFantasy from '../../seed/low-fantasy';

const initialState = {
  epicFantasy,
  lowFantasy
};


export default function(state = initialState, action) {
  switch (action.type) {
    case "expression":

      break;
    default:
      return state;
  }
}
