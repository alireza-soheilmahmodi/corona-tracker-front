import { FETCH_COVID } from "../actions/types";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_COVID:
      return action.payload.Global;
    default:
      return state;
  }
}
