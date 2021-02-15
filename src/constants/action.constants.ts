// fetch data contant type
export const FETCH_DATA = "FETCH_DATA";

// get total number of cards available from backend
export const TOTAL_BACKEND_CARDS = "TOTAL_BACKEND_CARDS";

// request next page constant type
export const REQUEST_NEXT_PAGE = "REQUEST_NEXT_PAGE";

// move to next page constant type
export const MOVE_NEXT_PAGE = "MOVE_NEXT_PAGE";

// back to previous page constant type
export const BACK_PREVIOUS_PAGE = "BACK_PREVIOUS_PAGE";

// update cache pages constant type
export const UPDATE_CACHED_PAGES = "UPDATE_CACHED_PAGES";

// show single card details
export const SHOW_CARD_DETAILS = "SHOW_CARD_DETAILS";

// empty card details after clicking close button
export const EMPTY_CARD_DETAILS = "EMPTY_CARD_DETAILS";

export interface FetchDataAction {
  type: typeof FETCH_DATA;
  payload: {};
}

export interface GetTotalCardsAction {
  type: typeof TOTAL_BACKEND_CARDS;
  payload: number;
}

interface MoveNextPageAction {
  type: typeof MOVE_NEXT_PAGE;
}

interface BackPreviousPageAction {
  type: typeof BACK_PREVIOUS_PAGE;
}

export type PaginateActionTypes = MoveNextPageAction | BackPreviousPageAction;

export interface UpdateCachedPagesAction {
  type: typeof UPDATE_CACHED_PAGES;
}

export interface ShowCardDetailsAction {
  type: typeof SHOW_CARD_DETAILS;
}

export interface EmptyCardDetailsAction {
  type: typeof EMPTY_CARD_DETAILS;
}
