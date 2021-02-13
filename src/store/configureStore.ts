import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas/sagas";

// const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(rootReducer);

  return store;
};

export default configureStore;
