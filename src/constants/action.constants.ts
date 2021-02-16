// fetch data contant type
export const FETCH_DATA = "FETCH_DATA";

// inital fetched page number
export const GET_INITIAL_FETCHED_PAGES = "GET_INITIAL_FETCHED_PAGES";

// constant for watching fetch data request
export const FETCH_DATA_REQUESTED = "FETCH_DATA_REQUESTED";

// get total number of cards available from backend
export const TOTAL_BACKEND_CARDS = "TOTAL_BACKEND_CARDS";

// update total fetched pages 
export const UPDATE_TOTAL_FETCHED_PAGES = "UPDATE_TOTAL_FETCHED_PAGES";

// constant for watching moving to next page request 
export const NEXT_PAGE_REQUESTED = "NEXT_PAGE_REQUESTED";

// move to next page constant type
export const MOVE_NEXT_PAGE = "MOVE_NEXT_PAGE";

// back to previous page constant type
export const BACK_PREVIOUS_PAGE = "BACK_PREVIOUS_PAGE";


export interface FetchDataAction {
  type: typeof FETCH_DATA;
  payload: {};
}

export interface GetInitialFetchedPagesAction {
  type: typeof GET_INITIAL_FETCHED_PAGES;
  payload: number
}

export interface UpdateTotalFetchedPagesAction {
  type: typeof UPDATE_TOTAL_FETCHED_PAGES;
  payload: number
}

export interface GetTotalCardsAction {
  type: typeof TOTAL_BACKEND_CARDS;
  payload: number;
}

export interface RequestNextPageAction {
  type: typeof NEXT_PAGE_REQUESTED;
}

interface MoveNextPageAction {
  type: typeof MOVE_NEXT_PAGE;
}

interface BackPreviousPageAction {
  type: typeof BACK_PREVIOUS_PAGE;
}

export type PaginateActionTypes = MoveNextPageAction | BackPreviousPageAction;

