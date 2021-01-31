import { FETCH_COVID } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_COVID:
      return action.payload.Global;
    default:
      return state;
  }
}
