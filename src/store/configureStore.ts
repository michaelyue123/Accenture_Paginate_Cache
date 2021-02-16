import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas/sagas";

// create saga middleware 
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  // create redux store and add sagaMiddleware
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  // run sage
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
