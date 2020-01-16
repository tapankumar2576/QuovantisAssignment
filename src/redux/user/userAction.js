import {
  SET_CURRENT_USER,
  GET_USER_LIST,
  GET_SELECTED_USER,
  DATA_FETCH_STARTED,
  DATA_FETCH_COMPLETED,
  DATA_FETCH_FAILED,
  LOGOUT_USER
} from "../actionTypes/actionTypes";
import { globalAPIHandler } from "../../services/services";
import { persistor } from "../store";

export const setCurrentUser = (email, password, rememberMe) => {
  let path = "api/login";

  return dispatch => {
    dispatch({ type: DATA_FETCH_STARTED });
    globalAPIHandler(path, "post", { email, password })
      .then(response => {
        dispatch({ type: SET_CURRENT_USER, payload: response.data });
        dispatch({ type: DATA_FETCH_COMPLETED });
      })
      .catch(error => {
        const errorMessage = error.response.data.error;
        dispatch({ type: DATA_FETCH_FAILED, payload: errorMessage });
      });
  };
};

export const getUserList = (pageNumber = 1) => {
  let path = `api/users?page=${pageNumber}`;
  return dispatch => {
    dispatch({ type: DATA_FETCH_STARTED });
    globalAPIHandler(path, "get")
      .then(response => {
        dispatch({ type: GET_USER_LIST, payload: response.data });
        dispatch({ type: DATA_FETCH_COMPLETED });
      })
      .catch(error => {
        const errorMessage = error.response.data.error;
        dispatch({ type: DATA_FETCH_FAILED, payload: errorMessage });
      });
  };
};

/*This one is not required as we already have all data we are going to fetch
in this method, however for the sake of assignment implemented this method*/
export const getSelectedUser = id => {
  let path = `api/users/${id}`;
  return dispatch => {
    dispatch({ type: DATA_FETCH_STARTED });
    globalAPIHandler(path, "get")
      .then(response => {
        dispatch({ type: GET_SELECTED_USER, payload: response.data.data });
        dispatch({ type: DATA_FETCH_COMPLETED });
      })
      .catch(error => {
        const errorMessage = error.response.data.error;
        dispatch({ type: DATA_FETCH_FAILED, payload: errorMessage });
      });
  };
};

export const handleLogout = () => {
  return dispatch => {
    persistor.purge(() => {
      dispatch({ type: LOGOUT_USER });
    });
    window.location.pathname = "/";
  };
};
