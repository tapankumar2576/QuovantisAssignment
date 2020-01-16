import {
  SET_CURRENT_USER,
  GET_USER_LIST,
  GET_SELECTED_USER,
  LOGOUT_USER
} from "../actionTypes/actionTypes";

const initialState = {
  currentUser: null,
  isAuthorized: false,
  userListInfo: { page: 1, per_page: 6, total: 12, total_pages: 2, data: [] },
  selectedUserInfo: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthorized: true,
        currentUser: action.payload
      };
    case GET_USER_LIST:
      return {
        ...state,
        userListInfo: action.payload
      };
    case GET_SELECTED_USER:
      return {
        ...state,
        selectedUserInfo: action.payload
      };
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: null,
        isAuthorized: false
      };
    default:
      return state;
  }
};

export default userReducer;
