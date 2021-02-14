import { all, call, put, select } from "redux-saga/effects";
import { FETCH_DATA } from "../constants";
import { fetchData } from "../services";

function* getApiData() {
  try {
    // initialize a variable to make API call
    let numbersToFetch = 0;

    /* Initial Cache:
       (INITIAL_CACHED_PAGES + first page) * PAGE_SIZE  
       e.g. (4 + 1) * 12 = 60 cards in total

       Further Cache:
       (state.totalFetchedPages + MAX_CACHED_PAGES) * PAGE_SIZE
       e.g. (5 + 8) * 12 = 156 cards in total
    */

    const state: ReturnType<any> = yield select();
    console.log(state);

    // make API call to fetch data
    const data = yield call(fetchData, numbersToFetch);
    const totalPage = data

    yield put({
      type: FETCH_DATA,
      payload: {

      }
    });

  } catch (error) {}
}

export default function* rootSaga() {
  yield all([getApiData]);
}
