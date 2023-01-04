import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/index";
import thunk from 'redux-thunk'

const store = createStore (rootReducer,{}, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__());

export default store;