import {
  DATA_FETCH_STARTED,
  DATA_FETCH_COMPLETED,
  DATA_FETCH_FAILED
} from "../actionTypes/actionTypes";

const initialState = {
  isLoaded: true,
  errorMessage: ""
};

const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FETCH_STARTED:
      return {
        ...state,
        isLoaded: false,
        errorMessage: ""
      };
    case DATA_FETCH_COMPLETED:
      return {
        ...state,
        isLoaded: true,
        errorMessage: ""
      };
    case DATA_FETCH_FAILED:
      return {
        ...state,
        isLoaded: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default loadReducer;
