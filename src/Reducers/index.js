import { combineReducers } from "redux";
import { formReducer } from "./formReducer";
import stepReducers from "./stepReducers";

const rootReducer = combineReducers({
   stepReducers,
   formReducer
})

export default rootReducer;
 