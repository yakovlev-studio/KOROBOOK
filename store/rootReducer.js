import { combineReducers } from "redux";

import shuffleBookReducer from "./shuffleBook/shuffleBook.reducer";

const rootReducer = combineReducers({
  shuffleBook: shuffleBookReducer
});

export default rootReducer;
