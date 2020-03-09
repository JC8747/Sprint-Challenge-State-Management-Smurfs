import constants from "../constants";
import axios from "axios";

export const getSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: constants.READ,
        payload: res.data
      });
    })
    .catch(err => console.log(err.response));
};

export const addSmurfs = data => dispatch => {
  console.log(data);
  axios
    .post("http://localhost:3333/smurfs", data)
    .then(res => {
      dispatch({
        type: constants.READ,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};