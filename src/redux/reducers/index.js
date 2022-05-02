import { combineReducers } from "redux";
import { useReducer } from "./userReducer";

export const rootReducer = combineReducers({
    auth: useReducer,
})