import {
  BACK_PREVIOUS_PAGE,
  FETCH_DATA,
  MOVE_NEXT_PAGE,
  FetchDataAction,
  PaginateActionTypes,
  UpdateTotalFetchedPagesAction,
  UPDATE_TOTAL_FETCHED_PAGES,
  FETCH_DATA_REQUESTED,
  RequestNextPageAction,
  NEXT_PAGE_REQUESTED,
  GET_INITIAL_FETCHED_PAGES,
} from "../constants";

// fetch data action
const fetchData = (data: []): FetchDataAction => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};

// fetch data request
const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUESTED
  }
}

// get initial fetched page action
const getInitialFetchedPages = () => {
  return {
    type: GET_INITIAL_FETCHED_PAGES,
  }
}

// update total number of fetched pages action
const updateTotalFetchedPages = (fetchedPages: number): UpdateTotalFetchedPagesAction => {
  return {
    type: UPDATE_TOTAL_FETCHED_PAGES,
    payload: fetchedPages
  }
}

// move to next page action
const moveNextPage = (): PaginateActionTypes => {
  return {
    type: MOVE_NEXT_PAGE,
  };
};

// move to next page action
const requestNextPage = (): RequestNextPageAction => {
  return {
    type: NEXT_PAGE_REQUESTED,
  };
};

// back to previous page action
const backPreviousPage = (): PaginateActionTypes => {
  return {
    type: BACK_PREVIOUS_PAGE,
  };
};

export const applicationAction = {
  fetchData,
  getInitialFetchedPages,
  fetchDataRequest,
  updateTotalFetchedPages,
  moveNextPage,
  backPreviousPage,
  requestNextPage
};
