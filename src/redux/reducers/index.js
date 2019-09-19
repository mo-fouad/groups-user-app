import { combineReducers } from "redux";
// import initialReducer from "./initalReducer";
import groupsReducer from "./groupsReducer";
import usersReducer from "./usersReducer";
const reducers = combineReducers({ groupsReducer, usersReducer });
export default reducers;
