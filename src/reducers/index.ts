import { combineReducers } from "redux";
import { applicationReducer } from "./application.reducer";

const rootReducer = combineReducers({
  appData: applicationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
