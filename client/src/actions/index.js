import axios from "axios";
import { FETCH_COVID } from "./types";

export const fetchCovid = () => async (dispatch) => {
  const res = await axios.get("https://api.covid19api.com/summary");
  dispatch({ type: FETCH_COVID, payload: res.data });
};
