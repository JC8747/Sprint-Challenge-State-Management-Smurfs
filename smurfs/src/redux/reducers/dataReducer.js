import constants from "../constants";

const initialState = {
  smurfs: []
};

const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.READ:
      return {
        ...state,
        smurfs: [...payload]
      };
    case constants.ADD:
      return {
        ...state,
        smurfs: [...payload]
      };
    default:
      return state;
  }
};

export default dataReducer;