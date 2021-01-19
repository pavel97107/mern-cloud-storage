import { combineReducers } from "redux";
import user from "./user";
import files from "./file";
export default combineReducers({ user, files });
