import { all, call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import {
  FETCH_DATA,
  FETCH_DATA_REQUESTED,
  INITIAL_CACHED_PAGES,
  MAX_CACHED_PAGES,
  MOVE_NEXT_PAGE,
  NEXT_PAGE_REQUESTED,
  PAGE_SIZE,
  TOTAL_BACKEND_CARDS,
  UPDATE_TOTAL_FETCHED_PAGES,
} from "../constants";
import { fetchData } from "../services";


function* getApiDataAsync() {
  try {
    // create a variable to make API call
    let numbersToFetch = 0;

    // create a variable to record total fetched pages
    let totalFetchedPages = 0;

    /* Initial Cache:
       (INITIAL_CACHED_PAGES + first page) * PAGE_SIZE  
       e.g. (4 + 1) * 12 = 60 cards in total

       Further Cache:
       (state.totalFetchedPages + MAX_CACHED_PAGES) * PAGE_SIZE
       e.g. (5 + 8) * 12 = 156 cards in total
    */

    const state: ReturnType<any> = yield select();

    if (state.data.currentPage === 1) {
      totalFetchedPages = INITIAL_CACHED_PAGES + 1;
      numbersToFetch = totalFetchedPages * PAGE_SIZE;
    } else {
      totalFetchedPages = state.data.totalFetchedPages + MAX_CACHED_PAGES;
      numbersToFetch = totalFetchedPages * PAGE_SIZE;
    }

    // make API call to fetch data
    const { data, totalBackendCards } = yield call(fetchData, numbersToFetch);

    // convert string to int
    const num = parseInt(totalBackendCards);

    // udpate fetched data to redux store
    yield put({
      type: FETCH_DATA,
      payload: data,
    });

    // update total number of backend cards to redux store
    yield put({
      type: TOTAL_BACKEND_CARDS,
      payload: num,
    });
  } catch (error) {
    console.log(error);
  }
}

function* onNextPageAsync() {
  // Update pagination to store
  yield put({ type: MOVE_NEXT_PAGE });

  const state: ReturnType<any> = yield select();

  const { currentPage, totalFetchedPages } = state.data;

  // if current page that user visits equals the total number of fetched pages
  // then make api call to fetch more data and update total number of fetched pages
  if (currentPage === totalFetchedPages) {
    yield getApiDataAsync();

    yield put({ type: UPDATE_TOTAL_FETCHED_PAGES });
  }
}

// Watch for firing API Call
function* watchFetchDataRequest() {
  yield takeLatest(FETCH_DATA_REQUESTED, getApiDataAsync);
}

// Watch for user clicking 'Next Page' button
function* watchOnNextPageAsync() {
  yield takeEvery(NEXT_PAGE_REQUESTED, onNextPageAsync);
}

export default function* rootSaga() {
  yield all([watchFetchDataRequest(), watchOnNextPageAsync()]);
}
