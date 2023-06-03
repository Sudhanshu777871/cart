import { combineReducers } from "redux";
import reducer from "./myCart";

const reducers = combineReducers({
    cartOperations:reducer
})

export default reducers;