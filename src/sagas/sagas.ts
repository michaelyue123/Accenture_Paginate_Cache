import { all } from "redux-saga/effects";

function* getApiData() {}

export default function* rootSaga() {
  yield all([getApiData]);
}
