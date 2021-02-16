import rootReducer from "./reducers";
import { createStore } from "redux";

// store generator
export const storeFactory = (initialState = {}) => {
  return createStore(rootReducer, initialState);
};

// shallow wrapper to search within the application, val is the test attribute
export const findByTestAttr = (wrapper: any, val: string) => {
  return wrapper.find(`[data-test="${val}"]`);
};
