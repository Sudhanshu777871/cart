import { applyMiddleware,createStore } from "redux";
import reducers from './reducer/index'
import thunk from "redux-thunk";

//creating store
const store  = createStore(reducers, {}, applyMiddleware(thunk));
export default store;