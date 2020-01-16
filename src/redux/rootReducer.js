import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../redux/user/userReducer";
import loadReducer from "../redux/loader/loadReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["loadReducer"]
};

const rootReducer = combineReducers({
  userReducer,
  loadReducer
});

export default persistReducer(persistConfig, rootReducer);
